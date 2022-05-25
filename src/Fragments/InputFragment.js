import React, {useState} from 'react';
import {View} from 'react-native';
import InputsForm from '../Components/InputsForm';
import Dropdown from '../Components/Dropdown';

const InputFragment = ({
  wholeList,
  handleWholeList,
  dropdown,
  handleDropdown,
}) => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');

  const [chosenList, setChosenList] = useState('default');

  const [isOpen, setIsOpen] = useState(false);

  function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  function handleTodoInputChange(value) {
    setTodoInput(value);
  }

  function addTodo() {
    if (todoInput) {
      const selectedList = chosenList;
      const todo = {name: todoInput, completed: false};
      const copyWholeList = [...wholeList];
      const listInTodoList = copyWholeList.find(
        el => lowerCaseFirstLetter(el.label) === selectedList,
      );
      listInTodoList.relatedTodos.push(todo);

      handleWholeList(copyWholeList);
      setTodoInput('');
    }
  }

  function handleListInputChange(value) {
    setListInput(value);
  }

  function addList() {
    const copyDropdown = [...dropdown];
    copyDropdown.push({
      label: listInput,
      value: lowerCaseFirstLetter(listInput),
    });
    handleDropdown(copyDropdown);

    const copyWholeList = [...wholeList];
    copyWholeList.push({
      label: listInput,
      relatedTodos: [],
    });

    handleWholeList(copyWholeList);
    setListInput('');
  }

  return (
    <View>
      <InputsForm
        onChangeTextTodo={handleTodoInputChange}
        valueTodo={todoInput}
        variantInputTypeTodo="secondaryType"
        placeholderTypeTodo="todo"
        onPressAddTodoButton={() => addTodo()}
        buttonTypeTodo="typeB"
        onChangeTextList={handleListInputChange}
        valueList={listInput}
        placeholderTypeListe="listToDropdown"
        onPressAddListButton={() => addList()}
        buttonTypeList="typeC"
      />
      <Dropdown
        label="Select a list * (optional)"
        isOpen={isOpen}
        value={chosenList}
        items={dropdown}
        onChangeIsOpen={setIsOpen}
        placeValue={setChosenList}
        placeItems={handleDropdown}
      />
    </View>
  );
};

export default InputFragment;

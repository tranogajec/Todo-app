import React, {useState} from 'react';
import {View} from 'react-native';
import InputsAndButtons from '../Components/InputsAndButtons';
import Dropdown from '../Components/Dropdown';

const InputsAndDropdown = ({
  wholeList,
  handleWholeList,
  dropdown,
  handleDropdown,
}) => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');

  const [chosenList, setChosenList] = useState('default');

  const [open, setOpen] = useState(false);

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
      <InputsAndButtons
        onChangeTextTodo={handleTodoInputChange}
        valueTodo={todoInput}
        variantInputTypeTodo="secondaryType"
        placeholderTypeTodo="todo"
        onPressTodoButton={() => addTodo()}
        buttonTypeTodo="typeB"
        onChangeTextList={handleListInputChange}
        valueList={listInput}
        placeholderTypeListe="listToDropdown"
        onPressListButton={() => addList()}
        buttonTypeList="typeC"
      />
      <Dropdown
        label="Select a list (*optional)"
        open={open}
        value={chosenList}
        items={dropdown}
        setOpen={setOpen}
        setValue={setChosenList}
        setItems={handleDropdown}
        searchPlaceholder="Search..."
        labelProps={{
          numberOfLines: 1,
        }}
        contentType="mainContent"
      />
    </View>
  );
};

export default InputsAndDropdown;

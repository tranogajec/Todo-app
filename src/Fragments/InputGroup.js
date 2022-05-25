import React, {useState} from 'react';
import {View} from 'react-native';
import InputsForm from '../Components/InputsForm';
import Dropdown from '../Components/Dropdown';
import {InputPlaceholderType} from '../Components/Input';
import {ButtonType} from '../Components/Button';

const InputGroup = ({arrangeDropdown, arrangeTodoList, dropdown, todoList}) => {
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
      const copyTodoList = [...todoList];
      const listInTodoList = copyTodoList.find(
        el => lowerCaseFirstLetter(el.label) === selectedList,
      );
      listInTodoList.relatedTodos.push(todo);

      arrangeTodoList(copyTodoList);
      setTodoInput('');
    }
  }

  function handleListInputChange(value) {
    setListInput(value);
  }

  function addList() {
    if (listInput) {
      const copyDropdown = [...dropdown];
      copyDropdown.push({
        label: listInput,
        value: lowerCaseFirstLetter(listInput),
      });
      arrangeDropdown(copyDropdown);

      const copyTodoList = [...todoList];
      copyTodoList.push({
        label: listInput,
        relatedTodos: [],
      });

      arrangeTodoList(copyTodoList);
      setListInput('');
    }
  }

  return (
    <View>
      <InputsForm
        buttonTypeList={ButtonType.typeC}
        buttonTypeTodo={ButtonType.typeB}
        onChangeTextList={handleListInputChange}
        onChangeTextTodo={handleTodoInputChange}
        onPressAddListButton={() => addList()}
        onPressAddTodoButton={() => addTodo()}
        placeholderTypeListe={InputPlaceholderType.typeB}
        placeholderTypeTodo={InputPlaceholderType.typeA}
        valueList={listInput}
        valueTodo={todoInput}
      />
      <Dropdown
        isOpen={isOpen}
        items={dropdown}
        onChangeIsOpen={setIsOpen}
        placeItems={arrangeDropdown}
        placeValue={setChosenList}
        value={chosenList}
      />
    </View>
  );
};

export default InputGroup;

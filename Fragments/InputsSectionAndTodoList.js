import React, {useState} from 'react';
import InputsAndDropdown from './InputsAndDropdown';
import TodoList from '../Components/TodoList';
import {View} from 'react-native';

const InputsSectionAndTodoList = () => {
  const [todoList, setTodoList] = useState([
    {label: 'Default', relatedTodos: []},
  ]);
  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);

  return (
    <View>
      <InputsAndDropdown
        wholeList={todoList}
        handleWholeList={setTodoList}
        dropdown={dropdownArray}
        handleDropdown={setDropdownArray}
      />
      <TodoList
        wholeList={todoList}
        handleWholeList={setTodoList}
        dropdown={dropdownArray}
        handleDropdown={setDropdownArray}
      />
    </View>
  );
};
export default InputsSectionAndTodoList;

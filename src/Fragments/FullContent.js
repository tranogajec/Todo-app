import React, {useState} from 'react';
import InputGroup from './InputGroup';
import TodoList from '../Components/TodoList';
import {View} from 'react-native';

const FullContent = () => {
  const [todoList, setTodoList] = useState([
    {label: 'Default', relatedTodos: []},
  ]);
  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);

  return (
    <View>
      <InputGroup
        todoList={todoList}
        arrangeTodoList={setTodoList}
        dropdown={dropdownArray}
        arrangeDropdown={setDropdownArray}
      />
      <TodoList
        todoList={todoList}
        arrangeTodoList={setTodoList}
        dropdown={dropdownArray}
        arrangeDropdown={setDropdownArray}
      />
    </View>
  );
};
export default FullContent;

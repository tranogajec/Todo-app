import React, {useState} from 'react';
import InputGroup from './InputGroup';
import TodoList from '../Components/TodoList';
import {View} from 'react-native';

const AppContent = () => {
  const [todoList, setTodoList] = useState([
    {label: 'Default', relatedTodos: []},
  ]);

  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);

  return (
    <View>
      <InputGroup
        arrangeDropdown={setDropdownArray}
        arrangeTodoList={setTodoList}
        dropdown={dropdownArray}
        todoList={todoList}
      />
      <TodoList
        arrangeDropdown={setDropdownArray}
        arrangeTodoList={setTodoList}
        dropdown={dropdownArray}
        todoList={todoList}
      />
    </View>
  );
};
export default AppContent;

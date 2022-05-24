import React, {useState} from 'react';
import InputFragment from './InputFragment';
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
      <InputFragment
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
export default FullContent;

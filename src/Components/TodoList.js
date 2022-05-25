import React from 'react';
import {View} from 'react-native';
import List from './List';

const TodoList = ({arrangeDropdown, arrangeTodoList, dropdown, todoList}) => {
  return (
    <View>
      {todoList.map((list, index) => (
        <List
          arrangeDropdown={arrangeDropdown}
          arrangeTodoList={arrangeTodoList}
          dropdown={dropdown}
          index={index}
          key={list + index}
          list={list}
          todoList={todoList}
        />
      ))}
    </View>
  );
};

export default TodoList;

import React from 'react';
import List from './List';

const TodoList = ({arrangeDropdown, arrangeTodoList, dropdown, todoList}) => {
  return (
    <>
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
    </>
  );
};

export default TodoList;

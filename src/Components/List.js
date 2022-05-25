import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Todo from './Todo';

const List = ({arrangeDropdown, arrangeTodoList, dropdown, list, todoList}) => {
  function deleteTodo(todo, index, arrayOfTodos) {
    const copyTodoList = [...todoList];
    const copyDropdown = [...dropdown];

    const requiredListIndex = copyTodoList.findIndex(
      el => el.relatedTodos === arrayOfTodos,
    );
    const requiredListLabel = copyTodoList[requiredListIndex].label;
    const todosInRequiredList = copyTodoList[requiredListIndex].relatedTodos;

    todosInRequiredList.splice(index, 1);

    if (!todosInRequiredList.length && requiredListLabel !== 'Default') {
      const requiredListInDropdown = copyDropdown.findIndex(
        el => el === requiredListLabel,
      );

      copyDropdown.splice(requiredListInDropdown, 1);
      copyTodoList.splice(requiredListIndex, 1);

      arrangeDropdown(copyDropdown);
      arrangeTodoList(copyTodoList);
    }

    arrangeTodoList(copyTodoList);
  }

  function markTodoAsDone(todo, index, arrayOfTodos) {
    const copyTodoList = [...todoList];
    const requiredListIndex = copyTodoList.findIndex(
      el => el.relatedTodos === arrayOfTodos,
    );
    const requiredTodo = copyTodoList[requiredListIndex].relatedTodos[index];
    requiredTodo.completed = !requiredTodo.completed;

    arrangeTodoList(copyTodoList);
  }

  return (
    <>
      <Text style={styles.title}>{list.label}</Text>
      {list.relatedTodos.map((todo, index, arrayOfTodos) => {
        return (
          <Todo
            index={index}
            key={todo + index}
            onPressComplete={() => markTodoAsDone(todo, index, arrayOfTodos)}
            onPressDelete={() => deleteTodo(todo, index, arrayOfTodos)}
            todo={todo}
          />
        );
      })}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 26,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});

export default List;

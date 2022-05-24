import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Todo from './Todo';

const List = ({
  list,
  index,
  wholeList,
  handleWholeList,
  dropdown,
  handleDropdown,
}) => {
  function deleteTodo(todo, index, arrayOfTodos) {
    const copyWholeList = [...wholeList];
    const copyDropdown = [...dropdown];

    const requiredListIndex = copyWholeList.findIndex(
      el => el.relatedTodos === arrayOfTodos,
    );
    const requiredListLabel = copyWholeList[requiredListIndex].label;
    const todosInRequiredList = copyWholeList[requiredListIndex].relatedTodos;

    todosInRequiredList.splice(index, 1);

    if (!todosInRequiredList.length && requiredListLabel !== 'Default') {
      const requiredListInDropdown = copyDropdown.findIndex(
        el => el === requiredListLabel,
      );

      copyDropdown.splice(requiredListInDropdown, 1);
      copyWholeList.splice(requiredListIndex, 1);

      handleDropdown(copyDropdown);
      handleWholeList(copyWholeList);
    }

    handleWholeList(copyWholeList);
  }

  function markTodoAsDone(todo, index, arrayOfTodos) {
    const copyWholeList = [...wholeList];
    const requiredListIndex = copyWholeList.findIndex(
      el => el.relatedTodos === arrayOfTodos,
    );
    const requiredTodo = copyWholeList[requiredListIndex].relatedTodos[index];
    requiredTodo.completed = !requiredTodo.completed;

    handleWholeList(copyWholeList);
  }

  return (
    <View>
      <Text style={styles.title}>{list.label}</Text>
      {list.relatedTodos.map((todo, index, arrayOfTodos) => {
        return (
          <Todo
            key={todo + index}
            todo={todo}
            index={index}
            onPressDelete={() => deleteTodo(todo, index, arrayOfTodos)}
            onPressComplete={() => markTodoAsDone(todo, index, arrayOfTodos)}
          />
        );
      })}
    </View>
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

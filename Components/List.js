import React from 'react';
import {View, Text} from 'react-native';
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

    // u slučaju brisanja zadnjeg todoa iz dodane liste (ne defaultne) - briše se i lista
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
      <Text key={index + list.label}>{list.label}</Text>
      {list.relatedTodos.map((todo, index, arrayOfTodos) => {
        return (
          <Todo
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

export default List;

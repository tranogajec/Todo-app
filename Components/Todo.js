import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';

const Todo = ({todo, index, onPressDelete, onPressComplete}) => {
  return (
    <View>
      <Text
        style={todo.completed ? styles.completedTodo : null}
        key={index + todo.name}>
        {todo.name}
      </Text>
      <Button
        variantButtonStyle="quaternaryButton"
        onPress={onPressDelete}
        title="Delete"
      />
      <Button
        variantButtonStyle="quinaryButton"
        onPress={onPressComplete}
        title="Done"
      />
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => deleteTodo(todo, index, arrayOfTodos)}>
        <Text>Delete</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => markTodoAsDone(todo, index, arrayOfTodos)}>
        <Text>Done</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  completedTodo: {
    textDecorationLine: 'line-through',
  },
});

export default Todo;

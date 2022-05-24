import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './Button';

const Todo = ({todo, index, onPressDelete, onPressComplete}) => {
  return (
    <View style={styles.todoWithButtons}>
      <View style={styles.todoText}>
        <Text style={todo.completed ? styles.completed : styles.uncompleted}>
          {todo.name}
        </Text>
      </View>

      <View style={styles.doneAndDelete}>
        <Button type="typeD" onPress={onPressDelete} title="🗑️" />
        <Button type="typeD" onPress={onPressComplete} title="✔️" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoWithButtons: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  todoText: {
    width: 200,
    justifyContent: 'center',
  },
  doneAndDelete: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  completed: {
    textDecorationLine: 'line-through',
    fontWeight: '700',
    fontSize: 18,
  },
  uncompleted: {
    fontWeight: '700',
    fontSize: 18,
  },
});

export default Todo;

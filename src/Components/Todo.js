import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonType, Button, ButtonTitle} from './Button';

const Todo = ({onPressComplete, onPressDelete, todo}) => {
  return (
    <View style={styles.todoRow}>
      <View style={styles.todoText}>
        <Text style={todo.completed ? styles.completed : styles.uncompleted}>
          {todo.name}
        </Text>
      </View>

      <View style={styles.doneAndDelete}>
        <Button
          type={ButtonType.typeD}
          onPress={onPressDelete}
          title={ButtonTitle.typeB}
        />
        <Button
          type={ButtonType.typeD}
          onPress={onPressComplete}
          title={ButtonTitle.typeC}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  todoText: {
    justifyContent: 'center',
    width: 200,
  },
  doneAndDelete: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  completed: {
    fontSize: 18,
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
  uncompleted: {
    fontSize: 18,
    fontWeight: '700',
  },
});

export default Todo;

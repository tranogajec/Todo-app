import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ButtonType, Button, ButtonTitle} from './Button';

const Todo = ({todo, index, onPressDelete, onPressComplete}) => {
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

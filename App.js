import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');

  function handleTodoInputChange(value) {
    setTodoInput(value);
  }

  function addTodo() {
    console.log(todoInput);
  }

  function handleListInputChange(value) {
    setListInput(value);
  }

  function addListToDropdown() {
    console.log(listInput);
  }

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.appTitle}>Todo app</Text>
        <View style={styles.inputSection}>
          <TextInput
            onChangeText={handleTodoInputChange}
            value={todoInput}
            placeholder="Add your todo"
          />
          <Button onPress={() => addTodo()} title="+" />
        </View>
        <View>
          <TextInput
            onChangeText={handleListInputChange}
            value={listInput}
            placeholder="Add new list"
          />
          <Button onPress={() => addListToDropdown()} title="+" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

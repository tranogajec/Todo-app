import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import {Dropdown} from 'react-native-material-dropdown-v2-fixed';

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');
  const [dropdownArray, setDropdownArray] = useState([{value: 'Default'}]);

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
    const copyDropdownArray = [...dropdownArray];
    copyDropdownArray.push({value: listInput});
    setDropdownArray(copyDropdownArray);
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
          <Dropdown label="Choose a list (optional)" data={dropdownArray} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

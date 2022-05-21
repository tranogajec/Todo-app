import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  SectionList,
  Flatlist,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');
  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);
  const [chosenList, setChosenList] = useState('');
  const [todoList, setTodoList] = useState([
    {title: 'Default', relatedTodos: []},
  ]);
  const [open, setOpen] = useState(false);

  function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  function handleTodoInputChange(value) {
    setTodoInput(value);
  }

  function addTodo() {
    console.log(todoInput);
  }

  function handleListInputChange(value) {
    setListInput(value);
  }

  function addList() {
    const copyDropdownArray = [...dropdownArray];
    copyDropdownArray.push({
      label: listInput,
      value: lowerCaseFirstLetter(listInput),
    });
    setDropdownArray(copyDropdownArray);
    console.log(dropdownArray);
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
          <Button onPress={() => addList()} title="+" />
          <DropDownPicker
            open={open}
            value={chosenList}
            items={dropdownArray}
            setOpen={setOpen}
            setValue={setChosenList}
            setItems={setDropdownArray}
            onSelectItem={item => {
              console.log(item);
            }}
          />
          {/* <Dropdown
            label="Choose a list (optional)"
            data={dropdownArray}
            value={chosenList}
          /> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

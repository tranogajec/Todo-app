import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
DropDownPicker.setListMode('MODAL');

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');
  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);
  const [chosenList, setChosenList] = useState('');
  const [todoList, setTodoList] = useState([
    {label: 'Default', relatedTodos: []},
  ]);
  const [open, setOpen] = useState(false);

  function lowerCaseFirstLetter(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }

  function handleTodoInputChange(value) {
    setTodoInput(value);
  }

  function addTodo() {
    console.log(todoInput, 'todoInput');
    if (todoInput) {
      const selectedList = chosenList;
      console.log(selectedList, 'selectedList');

      const copyTodoList = [...todoList];
      // copyTodoList.map(el => console.log(el, 'tuuuuuuuuuuuuuuuu'));
      const listInTodoList = copyTodoList.find(
        el => lowerCaseFirstLetter(el.label) === selectedList,
      );
      console.log(listInTodoList, 'ejeehh');
      // console.log(copyTodoList, 'ejeehh');
      const todo = {name: todoInput, completed: false};
      listInTodoList.relatedTodos.push(todo);

      setTodoList(copyTodoList);
      setTodoInput('');
    }
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

    const copyTodoList = [...todoList];
    copyTodoList.push({
      label: listInput,
      relatedTodos: [],
    });

    setTodoList(copyTodoList);
    setListInput('');
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
            placeholder="Select a list (optional)"
            placeholderStyle={{
              color: '#73777B',
            }}
            searchable={true}
            searchPlaceholder="Search..."
            searchTextInputStyle={{
              color: '#066163',
            }}
            labelProps={{
              numberOfLines: 1,
            }}
            listMode="MODAL"
          />
        </View>
        <View>
          {todoList.map((list, index) => {
            return (
              <View>
                <Text key={index + list.label}>{list.label}</Text>
                {list.relatedTodos.map((todo, index) => {
                  return (
                    <View>
                      <Text key={index + todo.name}>{todo.name}</Text>
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;

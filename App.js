import React, {useState} from 'react';
import Input from './Components/Input';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  TouchableOpacity,
} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
// DropDownPicker.setListMode('MODAL');

const App = () => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');
  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);
  const [chosenList, setChosenList] = useState('default');
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
    if (todoInput) {
      const selectedList = chosenList;
      const todo = {name: todoInput, completed: false};
      const copyTodoList = [...todoList];
      const listInTodoList = copyTodoList.find(
        el => lowerCaseFirstLetter(el.label) === selectedList,
      );
      console.log(listInTodoList, 'lista u koju ce ic tuud');
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

  function deleteTodo(todo, index, arrayOfTodos) {
    const copyTodoList = [...todoList];
    const copyDropdownArray = [...dropdownArray];

    const requiredListIndex = copyTodoList.findIndex(
      el => el.relatedTodos === arrayOfTodos,
    );
    const requiredListLabel = copyTodoList[requiredListIndex].label;
    const todosInRequiredList = copyTodoList[requiredListIndex].relatedTodos;

    todosInRequiredList.splice(index, 1);

    // u slučaju brisanja zadnjeg todoa iz dodane liste (ne defaultne) - briše se i lista
    if (!todosInRequiredList.length && requiredListLabel !== 'Default') {
      const requiredListInDropdown = copyDropdownArray.findIndex(
        el => el === requiredListLabel,
      );

      copyDropdownArray.splice(requiredListInDropdown, 1);
      copyTodoList.splice(requiredListIndex, 1);

      setDropdownArray(copyDropdownArray);
      setTodoList(copyTodoList);
    }

    setTodoList(copyTodoList);
  }

  function markTodoAsDone(todo, index, arrayOfTodos) {
    console.log('done');
    const copyTodoList = [...todoList];
    const requiredListIndex = copyTodoList.findIndex(
      el => el.relatedTodos === arrayOfTodos,
    );

    const requiredTodo = copyTodoList[requiredListIndex].relatedTodos[index];
    requiredTodo.completed = !requiredTodo.completed;

    setTodoList(copyTodoList);
  }

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.appBody}>
        <Text style={styles.appTitle}>Todo app</Text>
        <View style={styles.inputSection}>
          <Input
            onChangeText={handleTodoInputChange}
            value={todoInput}
            variant="secondaryType"
            placeholder="Add todo"
          />
          <Button onPress={() => addTodo()} title="+" />
        </View>
        <View>
          <Input
            onChangeText={handleListInputChange}
            value={listInput}
            placeholder="Add list"
          />
          <Button onPress={() => addList()} title="+" />
          <View>
            <Text>Select a list (optional)</Text>
            <DropDownPicker
              open={open}
              value={chosenList}
              items={dropdownArray}
              setOpen={setOpen}
              setValue={setChosenList}
              setItems={setDropdownArray}
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
        </View>
        <View>
          {todoList.map((list, index) => {
            return (
              <View>
                <Text key={index + list.label}>{list.label}</Text>
                {list.relatedTodos.map((todo, index, arrayOfTodos) => {
                  return (
                    <View>
                      <Text
                        style={
                          todo.completed
                            ? styles.completedTodo
                            : styles.uncompletedTodo
                        }
                        key={index + todo.name}>
                        {todo.name}
                      </Text>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() => deleteTodo(todo, index, arrayOfTodos)}>
                        <Text>Delete</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        style={styles.button}
                        onPress={() =>
                          markTodoAsDone(todo, index, arrayOfTodos)
                        }>
                        <Text>Done</Text>
                      </TouchableOpacity>
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

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    // Set content's vertical alignment.
    verticalAlign: 'top',
    paddingTop: 30,

    // Set content's horizontal alignment.
    alignItems: 'center',

    // Set hex color code here.
    backgroundColor: '#069A8E',
  },
  appBody: {flex: 1},
  appTitle: {
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'black',
  },
  completedTodo: {
    textDecorationLine: 'line-through',
  },
  inputSection: {},
});

export default App;

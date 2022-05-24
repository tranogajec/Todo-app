import React, {useState} from 'react';
import {View} from 'react-native';
import InputAndButton from '../Components/InputSection';
import Dropdown from '../Components/Dropdown';

const TextInputFragment = ({list, handleList}) => {
  const [todoInput, setTodoInput] = useState('');
  const [listInput, setListInput] = useState('');
  const [dropdownArray, setDropdownArray] = useState([
    {label: 'Default', value: 'default'},
  ]);
  const [chosenList, setChosenList] = useState('default');
  //   const [todoList, setTodoList] = useState([
  //     {label: 'Default', relatedTodos: []},
  //   ]);
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
      const copyList = [...list];
      const listInTodoList = copyList.find(
        el => lowerCaseFirstLetter(el.label) === selectedList,
      );
      console.log(listInTodoList, 'lista u koju ce ic tuud');
      listInTodoList.relatedTodos.push(todo);

      handleList(copyList);
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

    const copyList = [...list];
    copyList.push({
      label: listInput,
      relatedTodos: [],
    });

    handleList(copyList);
    setListInput('');
  }

  return (
    <View>
      <InputAndButton
        onChangeText={handleTodoInputChange}
        value={todoInput}
        variantInputType="secondaryType"
        placeholderType="todo"
        onPress={() => addTodo()}
        title="+"
        variantButtonStyle="secondaryButton"
      />
      <InputAndButton
        onChangeText={handleListInputChange}
        value={listInput}
        placeholderType="listToDropdown"
        title="+"
        onPress={() => addList()}
        variantButtonStyle="tertiaryButton"
      />
      <Dropdown
        label="Select a list (*optional)"
        open={open}
        value={chosenList}
        items={dropdownArray}
        setOpen={setOpen}
        setValue={setChosenList}
        setItems={setDropdownArray}
        searchable={true}
        searchPlaceholder="Search..."
        labelProps={{
          numberOfLines: 1,
        }}
        listMode="MODAL"
        variantContent="secondaryContent"
        closeAfterSelecting={true}
      />
    </View>
  );
};

export default TextInputFragment;

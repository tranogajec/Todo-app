import React, {useState} from 'react';
import {View} from 'react-native';
import InputsAndButtons from '../Components/InputsAndButtons';
import Dropdown from '../Components/Dropdown';

const InputsAndDropdown = () => {
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
      const copyTodoList = [...todoList];
      const listInTodoList = copyTodoList.find(
        el => lowerCaseFirstLetter(el.label) === selectedList,
      );
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

    const copyTodoList = [...todoList];
    copyTodoList.push({
      label: listInput,
      relatedTodos: [],
    });

    setTodoList(copyTodoList);
    setListInput('');
  }

  //   function deleteTodo(todo, index, arrayOfTodos) {
  //     const copyTodoList = [...todoList];
  //     const copyDropdownArray = [...dropdownArray];

  //     const requiredListIndex = copyTodoList.findIndex(
  //       el => el.relatedTodos === arrayOfTodos,
  //     );
  //     const requiredListLabel = copyTodoList[requiredListIndex].label;
  //     const todosInRequiredList = copyTodoList[requiredListIndex].relatedTodos;

  //     todosInRequiredList.splice(index, 1);

  //     // u slučaju brisanja zadnjeg todoa iz dodane liste (ne defaultne) - briše se i lista
  //     if (!todosInRequiredList.length && requiredListLabel !== 'Default') {
  //       const requiredListInDropdown = copyDropdownArray.findIndex(
  //         el => el === requiredListLabel,
  //       );

  //       copyDropdownArray.splice(requiredListInDropdown, 1);
  //       copyTodoList.splice(requiredListIndex, 1);

  //       setDropdownArray(copyDropdownArray);
  //       setTodoList(copyTodoList);
  //     }

  //     setTodoList(copyTodoList);
  //   }

  //   function markTodoAsDone(todo, index, arrayOfTodos) {
  //     console.log('done');
  //     const copyTodoList = [...todoList];
  //     const requiredListIndex = copyTodoList.findIndex(
  //       el => el.relatedTodos === arrayOfTodos,
  //     );

  //     const requiredTodo = copyTodoList[requiredListIndex].relatedTodos[index];
  //     requiredTodo.completed = !requiredTodo.completed;

  //     setTodoList(copyTodoList);
  //   }

  return (
    <View>
      <InputsAndButtons
        onChangeTextTodo={handleTodoInputChange}
        valueTodo={todoInput}
        variantInputTypeTodo="secondaryType"
        placeholderTypeTodo="todo"
        onPressTodoButton={() => addTodo()}
        titleTodo="+"
        variantButtonStyleTodo="secondaryButton"
        onChangeTextList={handleListInputChange}
        valueList={listInput}
        placeholderTypeListe="listToDropdown"
        onPressListButton={() => addList()}
        titleList="+"
        variantButtonStyleList="tertiaryButton"
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

export default InputsAndButtons;

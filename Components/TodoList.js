import React from 'react';
import {View, Text} from 'react-native';
import Todo from './Todo';
import List from './List';

const TodoList = ({wholeList, handleWholeList, dropdown, handleDropdown}) => {
  //   const [todoList, setTodoList] = useState([
  //     {label: 'Default', relatedTodos: []},
  //   ]);

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
      {wholeList.map((list, index) => (
        <List
          list={list}
          index={index}
          wholeList={wholeList}
          handleWholeList={handleWholeList}
          dropdown={dropdown}
          handleDropdown={handleDropdown}
        />
      ))}
      {/* return (
          <View>
            <Text key={index + list.label}>{list.label}</Text>
            {list.relatedTodos.map((todo, index, arrayOfTodos) => {
              return (
                <Todo
                  todo={todo}
                  index={index}
                  onPressDelete={onPressDelete}
                  onPressComplete={onPressComplete}
                />
              );
            })}
          </View>
        ); */}
    </View>
  );
};

export default TodoList;

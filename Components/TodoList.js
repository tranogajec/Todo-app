import React from 'react';
import {View} from 'react-native';
import List from './List';

const TodoList = ({wholeList, handleWholeList, dropdown, handleDropdown}) => {
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
    </View>
  );
};

export default TodoList;

import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({inputType, placeholderType, onChangeText, value}) => {
  const type = () => {
    if (inputType === 'typeList') {
      return styles.typeList;
    } else {
      return styles.typeTodo;
    }
  };

  const placeholder = () => {
    if (placeholderType === 'todo') {
      return 'Add todo';
    } else if (placeholderType === 'listToDropdown') {
      return 'Add list to dropdown';
    } else return 'Add list';
  };

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        maxLength={22}
        style={type()}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingVertical: 10,
  },
  typeTodo: {
    backgroundColor: '#FFD24C',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: 240,
    borderRadius: 30,
    paddingLeft: 16,
  },
  typeList: {
    backgroundColor: '#FFF7BC',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: 240,
    borderRadius: 30,
    paddingLeft: 16,
  },
});

export default Input;

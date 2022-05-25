import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const InputType = {
  typeA: 'typeA',
  typeB: 'typeB',
};

const InputPlaceholderType = {
  typeA: 'Add todo',
  typeB: 'Add list to dropdown',
  typeC: 'Add list',
};

const Input = ({inputType, placeholderType, onChangeText, value}) => {
  const selectType = () => {
    if (inputType === InputType.typeA) {
      return styles.typeA;
    } else if (inputType === InputType.typeB) {
      return styles.typeB;
    }
  };

  const selectPlaceholder = () => {
    if (placeholderType === InputPlaceholderType.typeA) {
      return InputPlaceholderType.typeA;
    } else if (placeholderType === InputPlaceholderType.typeB) {
      return InputPlaceholderType.typeB;
    } else if (placeholderType === InputPlaceholderType.typeC) {
      return InputPlaceholderType.typeC;
    }
  };

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        maxLength={22}
        onChangeText={onChangeText}
        placeholder={selectPlaceholder()}
        style={selectType()}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingVertical: 10,
  },
  typeA: {
    alignSelf: 'center',
    backgroundColor: '#FFD24C',
    borderColor: 'black',
    borderRadius: 30,
    borderStyle: 'solid',
    paddingLeft: 16,
    width: 240,
  },
  typeB: {
    alignSelf: 'center',
    backgroundColor: '#FFF7BC',
    borderColor: 'black',
    borderRadius: 30,
    borderStyle: 'solid',
    paddingLeft: 16,
    width: 240,
  },
});

export {InputType, InputPlaceholderType, Input};

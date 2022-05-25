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
        style={selectType()}
        onChangeText={onChangeText}
        value={value}
        placeholder={selectPlaceholder()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingVertical: 10,
  },
  typeA: {
    backgroundColor: '#FFD24C',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: 240,
    borderRadius: 30,
    paddingLeft: 16,
  },
  typeB: {
    backgroundColor: '#FFF7BC',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: 240,
    borderRadius: 30,
    paddingLeft: 16,
  },
});

export {InputType, InputPlaceholderType, Input};

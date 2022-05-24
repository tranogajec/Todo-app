import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({inputType, placeholderType, onChangeText, value}) => {
  const appointType = () => {
    if (inputType === 'typeB') {
      return styles.typeB;
    } else {
      return styles.typeA;
    }
  };

  const appointPlaceholder = () => {
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
        style={appointType()}
        onChangeText={onChangeText}
        value={value}
        placeholder={appointPlaceholder()}
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

export default Input;

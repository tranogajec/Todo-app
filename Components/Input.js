import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const Input = ({variantInputType, placeholderType, onChangeText, value}) => {
  const variantInput = () => {
    if (variantInputType === 'secondaryType') {
      return styles.secondaryType;
    } else {
      return styles.primaryType;
    }
  };

  const variantPlaceholder = () => {
    if (placeholderType === 'todo') {
      return 'Add todo';
    } else if (placeholderType === 'listToDropdown') {
      return 'Add list to dropdown';
    } else return 'Add list';
  };

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        style={variantInput()}
        onChangeText={onChangeText}
        value={value}
        placeholder={variantPlaceholder()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    paddingVertical: 10,
  },
  secondaryType: {
    backgroundColor: '#FFD24C',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: 220,
    borderRadius: 30,
    paddingLeft: 16,
  },
  primaryType: {
    backgroundColor: '#FFF7BC',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: 220,
    borderRadius: 30,
    paddingLeft: 16,
  },
});

export default Input;

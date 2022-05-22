import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = ({variant, placeholder, onChangeText, value}) => {
  function variantInput() {
    if (variant === 'secondaryType') {
      return styles.secondaryType;
    } else {
      return styles.primaryType;
    }
  }

  return (
    <TextInput
      style={variantInput()}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};

const styles = StyleSheet.create({
  secondaryType: {
    backgroundColor: '#FFD24C',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: '40%',
    borderRadius: 30,
    paddingLeft: 16,
  },
  primaryType: {
    backgroundColor: '#FFF7BC',
    borderStyle: 'solid',
    borderColor: 'black',
    alignSelf: 'center',
    width: '40%',
    borderRadius: 30,
    paddingLeft: 16,
  },
});

export default Input;

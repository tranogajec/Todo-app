import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';
import Input from './Input';

const InputSection = ({
  onChangeText,
  value,
  inputType,
  placeholderType,
  onPress,
  buttonType,
}) => {
  return (
    <View style={styles.inputSection}>
      <Input
        onChangeText={onChangeText}
        value={value}
        inputType={inputType}
        placeholderType={placeholderType}
      />
      <Button onPress={onPress} title="+" type={buttonType} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default InputSection;

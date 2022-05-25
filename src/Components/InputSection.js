import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ButtonTitle} from './Button';
import {InputType, InputPlaceholderType, Input} from './Input';

const InputSection = ({
  onChangeText,
  value,
  inputType,
  placeholderType,
  onPress,
  type,
}) => {
  return (
    <View style={styles.inputSection}>
      <Input
        inputType={inputType}
        onChangeText={onChangeText}
        placeholderType={placeholderType}
        value={value}
      />
      <Button onPress={onPress} title={ButtonTitle.typeA} type={type} />
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

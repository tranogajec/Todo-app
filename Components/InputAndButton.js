import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from './Button';
import Input from './Input';

const InputAndButton = ({
  onChangeText,
  value,
  variantInputType,
  placeholderType,
  onPress,
  type,
}) => {
  return (
    <View style={styles.inputSection}>
      <Input
        onChangeText={onChangeText}
        value={value}
        variantInputType={variantInputType}
        placeholderType={placeholderType}
      />
      <Button onPress={onPress} title="+" type={type} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputSection: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default InputAndButton;

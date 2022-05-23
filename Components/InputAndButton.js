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
  title,
  variantButtonStyle,
}) => {
  return (
    <View style={styles.inputAndButtonSection}>
      <Input
        onChangeText={onChangeText}
        value={value}
        variantInputType={variantInputType}
        placeholderType={placeholderType}
      />
      <Button
        onPress={onPress}
        title={title}
        variantButtonStyle={variantButtonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputAndButtonSection: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default InputAndButton;

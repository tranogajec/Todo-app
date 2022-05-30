import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, ButtonTitle} from './Button';
import {Input} from './Input';

const SingleInputForm = ({
  inputType,
  onChangeText,
  onPress,
  placeholderType,
  type,
  value,
}) => {
  return (
    <View style={styles.singleInputForm}>
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
  singleInputForm: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default SingleInputForm;

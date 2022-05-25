import React from 'react';
import {View} from 'react-native';
import InputSection from './InputSection';
import {ButtonType} from './Button';
import {InputType, InputPlaceholderType} from './Input';

const TwoInputs = ({
  onChangeTextTodo,
  valueTodo,
  onPressTodoButton,
  titleTodo,
  onChangeTextList,
  valueList,
  onPressListButton,
  titleList,
}) => {
  return (
    <View>
      <InputSection
        inputType={InputType.typeA}
        onChangeText={onChangeTextTodo}
        value={valueTodo}
        placeholderType={InputPlaceholderType.typeA}
        onPress={onPressTodoButton}
        title={titleTodo}
        type={ButtonType.typeB}
      />
      <InputSection
        inputType={InputType.typeB}
        onChangeText={onChangeTextList}
        value={valueList}
        placeholderType={InputPlaceholderType.typeB}
        title={titleList}
        onPress={onPressListButton}
        type={ButtonType.typeC}
      />
    </View>
  );
};

export default TwoInputs;

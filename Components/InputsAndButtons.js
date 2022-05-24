import React from 'react';
import {View} from 'react-native';
import InputAndButton from '../Components/InputAndButton';

variantButtonStyle = 'secondaryButton';
const InputsAndButtons = ({
  onChangeTextTodo,
  valueTodo,
  variantInputTypeTodo,
  placeholderTypeTodo,
  onPressTodoButton,
  titleTodo,
  onChangeTextList,
  valueList,
  placeholderTypeList,
  onPressListButton,
  titleList,
}) => {
  return (
    <View>
      <InputAndButton
        onChangeText={onChangeTextTodo}
        value={valueTodo}
        variantInputType={variantInputTypeTodo}
        placeholderType={placeholderTypeTodo}
        onPress={onPressTodoButton}
        title={titleTodo}
        type="typeB"
      />
      <InputAndButton
        onChangeText={onChangeTextList}
        value={valueList}
        placeholderType={placeholderTypeList}
        title={titleList}
        onPress={onPressListButton}
        type="typeC"
      />
    </View>
  );
};

export default InputsAndButtons;

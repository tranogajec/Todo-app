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
  variantButtonStyleTodo,
  onChangeTextList,
  valueList,
  placeholderTypeList,
  onPressListButton,
  titleList,
  variantButtonStyleList,
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
        variantButtonStyle={variantButtonStyleTodo}
      />
      <InputAndButton
        onChangeText={onChangeTextList}
        value={valueList}
        placeholderType={placeholderTypeList}
        title={titleList}
        onPress={onPressListButton}
        variantButtonStyle={variantButtonStyleList}
      />
    </View>
  );
};

export default InputsAndButtons;

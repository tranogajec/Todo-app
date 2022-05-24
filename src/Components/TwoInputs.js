import React from 'react';
import {View} from 'react-native';
import InputSection from './InputSection';
import {button} from './Button';

variantButtonStyle = 'secondaryButton';
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
        onChangeText={onChangeTextTodo}
        value={valueTodo}
        placeholderType="todo"
        onPress={onPressTodoButton}
        title={titleTodo}
        type={button.typeB}
      />
      <InputSection
        inputType="typeList"
        onChangeText={onChangeTextList}
        value={valueList}
        placeholderType="listToDropdown"
        title={titleList}
        onPress={onPressListButton}
        type={button.typeC}
      />
    </View>
  );
};

export default TwoInputs;

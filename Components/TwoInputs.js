import React from 'react';
import {View} from 'react-native';
import InputSection from './InputSection';

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
        type="typeB"
      />
      <InputSection
        inputType="typeList"
        onChangeText={onChangeTextList}
        value={valueList}
        placeholderType="listToDropdown"
        title={titleList}
        onPress={onPressListButton}
        type="typeC"
      />
    </View>
  );
};

export default TwoInputs;

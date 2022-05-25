import React from 'react';
import {View} from 'react-native';
import SingleInputForm from './SingleInputForm';
import {ButtonType} from './Button';
import {InputType, InputPlaceholderType} from './Input';

const InputsForm = ({
  onChangeTextList,
  onChangeTextTodo,
  onPressAddListButton,
  onPressAddTodoButton,
  titleList,
  titleTodo,
  valueList,
  valueTodo,
}) => {
  return (
    <>
      <SingleInputForm
        inputType={InputType.typeA}
        onChangeText={onChangeTextTodo}
        onPress={onPressAddTodoButton}
        placeholderType={InputPlaceholderType.typeA}
        title={titleTodo}
        type={ButtonType.typeB}
        value={valueTodo}
      />
      <SingleInputForm
        inputType={InputType.typeB}
        onChangeText={onChangeTextList}
        onPress={onPressAddListButton}
        placeholderType={InputPlaceholderType.typeB}
        title={titleList}
        type={ButtonType.typeC}
        value={valueList}
      />
    </>
  );
};

export default InputsForm;

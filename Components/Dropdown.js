import React from 'react';
import {Text} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  searchPlaceholder,
  searchTextInputStyle,
  labelProps,
  listMode,
}) => {
  return (
    <View>
      <Text>{label}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        searchable={searchable}
        searchPlaceholder={searchPlaceholder}
        searchTextInputStyle={searchTextInputStyle}
        labelProps={labelProps}
        listMode={listMode}
      />
    </View>
  );
};

export default Dropdown;

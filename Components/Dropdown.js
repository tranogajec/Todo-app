import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({
  label,
  open,
  value,
  items,
  setOpen,
  setValue,
  setItems,
  searchable,
  searchPlaceholder,
  labelProps,
  listMode,
  variantContent,
}) => {
  function variantContentStyle() {
    if (variantContent === 'secondaryContent') {
      return styles.secondaryContent;
    } else return styles.primaryContent;
  }

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
        labelProps={labelProps}
        listMode={listMode}
        modalContentContainerStyle={variantContentStyle()}
        modalProps={{
          animationType: 'fade',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  secondaryContent: {
    backgroundColor: '#FFD24C',
    fontFamily: 'Times New Roman',
    padding: 30,
    borderWidth: 20,
    borderColor: '#069A8E',
  },
  primaryContent: {
    backgroundColor: '#FFD9C0',
    padding: 20,
    borderWidth: 10,
    borderColor: '#069A8E',
  },
});

export default Dropdown;

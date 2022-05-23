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
  closeAfterSelecting,
}) => {
  function variantContentStyle() {
    if (variantContent === 'secondaryContent') {
      return styles.secondaryContent;
    } else return styles.primaryContent;
  }

  return (
    <View style={styles.dropdownContainer}>
      <Text>{label}</Text>
      <View style={styles.dropdownInput}>
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
          closeAfterSelecting={closeAfterSelecting}
          modalContentContainerStyle={variantContentStyle()}
          modalProps={{
            animationType: 'fade',
          }}
        />
      </View>
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
  dropdownContainer: {
    paddingTop: 10,
    width: 300,
  },
  dropdownInput: {
    paddingVertical: 10,
  },
});

export default Dropdown;

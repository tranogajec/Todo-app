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
  searchPlaceholder,
  labelProps,
  contentType,
}) => {
  function appointContent() {
    if (contentType === 'typeA') {
      return styles.typeA;
    } else return styles.typeB;
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
          searchPlaceholder={searchPlaceholder}
          labelProps={labelProps}
          closeAfterSelecting={true}
          searchable={true}
          modalContentContainerStyle={appointContent()}
          modalProps={{
            animationType: 'fade',
          }}
          listMode="MODAL"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeB: {
    backgroundColor: '#FFD24C',
    fontFamily: 'Times New Roman',
    padding: 30,
    borderWidth: 20,
    borderColor: '#069A8E',
  },
  typeA: {
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

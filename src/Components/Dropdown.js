import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({
  label,
  isOpen,
  value,
  items,
  onChangeIsOpen,
  placeValue,
  placeItems,
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <Text>{label}</Text>
      <View style={styles.dropdownInput}>
        <DropDownPicker
          closeAfterSelecting={true}
          items={items}
          labelProps={{
            numberOfLines: 1,
          }}
          listItemLabelStyle={styles.listItem}
          listMode="MODAL"
          modalContentContainerStyle={styles.dropdownContent}
          modalProps={{
            animationType: 'fade',
          }}
          open={isOpen}
          searchable={true}
          searchPlaceholder="Search..."
          selectedItemLabelStyle={styles.selectedItem}
          setItems={placeItems}
          setOpen={onChangeIsOpen}
          setValue={placeValue}
          value={value}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdownContent: {
    backgroundColor: '#FFD24C',
    fontFamily: 'Times New Roman',
    padding: 30,
    borderWidth: 20,
    borderColor: '#069A8E',
  },
  dropdownContainer: {
    paddingTop: 10,
    width: 300,
  },
  dropdownInput: {
    paddingVertical: 10,
  },
  listItem: {
    color: '#069A8E',
    fontSize: 18,
  },
  selectedItem: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});

export default Dropdown;

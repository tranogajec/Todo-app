import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const Dropdown = ({
  isOpen,
  items,
  onChangeIsOpen,
  placeItems,
  placeValue,
  value,
}) => {
  return (
    <View style={styles.dropdownContainer}>
      <Text style={styles.title}>Select a list * (optional)</Text>
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
  dropdownContainer: {
    paddingTop: 10,
    width: 300,
  },
  dropdownContent: {
    backgroundColor: '#FFD24C',
    borderColor: '#069A8E',
    borderWidth: 20,
    fontFamily: 'Times New Roman',
    padding: 30,
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
  title: {
    fontWeight: '700',
    fontStyle: 'italic',
  },
});

export default Dropdown;

import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const ButtonType = {
  typeA: 'typeA',
  typeB: 'typeB',
  typeC: 'typeC',
  typeD: 'typeD',
};

const ButtonTitle = {
  typeA: '+',
  typeB: '🗑️',
  typeC: '✔️',
};

const Button = ({type, onPress, title}) => {
  const selectType = () => {
    if (type === ButtonType.typeA) {
      return styles.typeA;
    } else if (type === ButtonType.typeB) {
      return styles.typeB;
    } else if (type === ButtonType.typeC) {
      return styles.typeC;
    } else if (type === ButtonType.typeD) {
      return styles.typeD;
    }
  };

  const selectTitle = () => {
    if (title === ButtonTitle.typeA) {
      return ButtonTitle.typeA;
    } else if (title === ButtonTitle.typeB) {
      return ButtonTitle.typeB;
    } else if (title === ButtonTitle.typeC) {
      return ButtonTitle.typeC;
    }
  };

  return (
    <Pressable style={selectType()} onPress={onPress}>
      <Text style={styles.text}>{selectTitle()}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  typeA: {
    borderRadius: 10,
    color: 'black',
  },
  typeB: {
    alignItems: 'center',
    backgroundColor: '#9A86A4',
    borderRadius: 30,
    elevation: 3,
    height: 46,
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 12,
    width: 46,
  },
  typeC: {
    alignItems: 'center',
    backgroundColor: '#7D1E6A',
    borderRadius: 30,
    elevation: 3,
    height: 46,
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 12,
    width: 46,
  },
  typeD: {
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 3,
    height: 36,
    justifyContent: 'center',
    marginLeft: 10,
    width: 36,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    lineHeight: 21,
  },
});

export {ButtonType, ButtonTitle, Button};

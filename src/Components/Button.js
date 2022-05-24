import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const button = {
  typeA: 'typeA',
  typeB: 'typeB',
  typeC: 'typeC',
  typeD: 'typeD',
};

const Button = ({type, onPress, title}) => {
  const appointType = () => {
    if (type === 'typeA') {
      return styles.typeA;
    } else if (type === 'typeB') {
      return styles.typeB;
    } else if (type === 'typeC') {
      return styles.typeC;
    } else if (type === 'typeD') {
      return styles.typeD;
    }
  };

  return (
    <Pressable style={appointType()} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  typeA: {
    color: 'black',
    borderRadius: 10,
  },
  typeB: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#9A86A4',
    height: 46,
    width: 46,
    marginLeft: 10,
  },
  typeC: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: '#7D1E6A',
    height: 46,
    width: 46,
    marginLeft: 10,
  },
  typeD: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    height: 36,
    width: 36,
    marginLeft: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export {button, Button};

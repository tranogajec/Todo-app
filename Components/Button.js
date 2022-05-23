import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const Button = ({variantButtonStyle, onPress, title}) => {
  function variantButton() {
    if (variantButtonStyle === 'secondaryButton') {
      return styles.secondaryButton;
    } else if (variantButtonStyle === 'tertiaryButton') {
      return styles.tertiaryButton;
    } else if (variantButtonStyle === 'quaternaryButton') {
      return styles.quaternaryButton;
    } else if (variantButtonStyle === 'quinaryButton') {
      return styles.quinaryButton;
    } else {
      return styles.primaryButton;
    }
  }

  return (
    <Pressable style={variantButton()} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  primaryButton: {
    color: 'black',
    borderRadius: 10,
  },
  secondaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'red',
    height: 46,
    width: 46,
    marginLeft: 10,
  },
  tertiaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
    borderRadius: 30,
    elevation: 3,
    backgroundColor: 'blue',
    height: 46,
    width: 46,
    marginLeft: 10,
  },
  quaternaryButton: {},
  quinaryButton: {},
  text: {
    color: 'red',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});

export default Button;

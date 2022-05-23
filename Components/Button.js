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
    } else if (variantButtonStyle === 'completeButton') {
      return styles.completeButton;
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
    backgroundColor: '#9A86A4',
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
    backgroundColor: '#7D1E6A',
    height: 46,
    width: 46,
    marginLeft: 10,
  },
  quaternaryButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
    height: 36,
    width: 36,
    marginLeft: 10,
  },
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

import React from 'react';
import {Text, StyleSheet, Pressable} from 'react-native';

const Button = ({variant, onPress, title}) => {
  function variantButton() {
    if (variant === 'secondaryButton') {
      return styles.secondaryButton;
    } else if (variant === 'tertiaryButton') {
      return styles.tertiaryButton;
    } else if (variant === 'quaternaryButton') {
      return styles.quaternaryButton;
    } else if (variant === 'quinaryButton') {
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
    paddingVertical: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  tertiaryButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 2,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  quaternaryButton: {},
  quinaryButton: {},
  text: {
    color: 'reds',
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

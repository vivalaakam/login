/**
 * Created by vivalaakam on 22.09.2019.
 *
 * @flow
 */
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'rgb(246,208,0)',
    borderRadius: 7,
    fontWeight: '600',
    textAlign: 'center',
    textTransform: 'uppercase',
    padding: 10,
    transform: [{ translateX: 25 }],
  },
  last: {
    transform: [{ translateX: -25 }],
  },
});

export default function Button({ children, onPress, style, isLast }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Text style={[styles.text, style, isLast ? styles.last : null]}>{children}</Text>
    </TouchableWithoutFeedback>
  );
}

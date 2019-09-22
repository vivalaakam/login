/**
 * Created by vivalaakam on 21.09.2019.
 *
 * @flow
 */
import React from 'react';
import { Animated, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default function TabButton({ label, opacity, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.button, {
        opacity,
      }]}>
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

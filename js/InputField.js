/**
 * Created by vivalaakam on 22.09.2019.
 *
 * @flow
 */
import React from 'react';

import { StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    overflow: 'hidden',
    marginBottom: 35,
  },
  title: {
    fontWeight: '600',
    marginLeft: 25,
    marginBottom: 10,
    color: '#a7a7a7',
  },
  input: {
    height: 40,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'rgba(221,221,221,0.8)',
    transform: [{ translateX: 25 }],
    paddingLeft: 10,
    paddingRight: 35,
  },
  last: {
    transform: [{ translateX: -25 }],
    paddingLeft: 35,
    paddingRight: 10,
  },
});

export default function Input({ label, value, onChange, isLast, secureTextEntry }) {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{label}</Text>
      <TextInput
        style={[styles.input, isLast ? styles.last : null]}
        value={value}
        onChange={onChange}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

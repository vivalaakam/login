/**
 * Created by vivalaakam on 22.09.2019.
 *
 * @flow
 */
import React from 'react'

import { StyleSheet, Text, TextInput, View } from 'react-native'

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
    borderWidth: 1,
    marginLeft: 25,
    borderColor: 'rgba(221,221,221,0.8)',
    paddingHorizontal: 10,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0
  },
  last: {
    marginLeft: 0,
    marginRight: 25,
    borderTopRightRadius: 7,
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0
  },
})

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
  )
}

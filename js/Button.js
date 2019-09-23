/**
 * Created by vivalaakam on 22.09.2019.
 *
 * @flow
 */
import React from 'react'
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'

const styles = StyleSheet.create({
  text: {
    backgroundColor: 'rgb(246,208,0)',

    padding: 10,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
    marginLeft: 25,

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

export default function Button({ children, onPress, style, isLast }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.text, style, isLast ? styles.last : null]}>
        <Text style={{
          fontWeight: '600',
          textAlign: 'center',
          textTransform: 'uppercase',
        }}>{children}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

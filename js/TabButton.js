/**
 * Created by vivalaakam on 21.09.2019.
 *
 * @flow
 */
import React from 'react'
import { Animated, Image, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native'

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontWeight: '600',
  },
})

export default function TabButton({ icon, label, opacity, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Animated.View style={[styles.button, {
        opacity,
      }]}>
        <Image source={{ uri: icon }} style={{ width: 24, height: 24 }} />
        <Text style={styles.text}>{label}</Text>
      </Animated.View>
    </TouchableWithoutFeedback>
  )
}

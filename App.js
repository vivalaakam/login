/**
 * @format
 * @flow
 */

import React, { useCallback, useRef } from 'react'
import { Animated, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native'
import TabButton from './js/TabButton'
import Title from './js/Title'
import Login from './js/Login'
import Register from './js/Register'

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
  scrollView: {
    width: width * 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(233,233,233,0.5)',
  },
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: width * 2 - 100,
    marginHorizontal: 100,
    backgroundColor: 'rgba(255,255,255,.95)',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 35,
    borderColor: 'rgba(221,221,221,0.8)',
    borderWidth: 1,
    flexDirection: 'row',
  },
  bottom: {
    backgroundColor: 'rgba(255,255,255,.95)',
    width: width,
  },
  title: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 25
  },
  back: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: height,
    height
  }
})

export default function App() {
  const position = useRef(new Animated.Value(0))
  const scroll = useRef()

  const onPressLogin = useCallback(() => {
    scroll.current.getNode().scrollTo({
      x: 0,
    })
  })

  const onPressRegistration = useCallback(() => {
    scroll.current.getNode().scrollTo({
      x: width,
    })
  })

  return (
    <>
      <Animated.Image style={[styles.back, {
        transform: [{
          translateX: position.current.interpolate({
            inputRange: [0, width],
            outputRange: [0, (height - width) * -1],
            extrapolate: 'clamp'
          })
        }]
      }]}
                      source={{ uri: 'back' }} />
      <Animated.ScrollView
        horizontal
        bounces={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        ref={scroll}
        onScroll={Animated.event([
          { nativeEvent: { contentOffset: { x: position.current } } },
        ], { useNativeDriver: true })}
      >
        <View style={styles.wrapper}>
          <View style={styles.title}>
            <Title>Login to continue...</Title>
            <Title>Registration</Title>
          </View>

          <View style={styles.form}>
            <Login />
            <Register />
          </View>
        </View>
      </Animated.ScrollView>
      <View style={styles.bottom}>
        <SafeAreaView style={{ flexDirection: 'row' }}>
          <TabButton
            label="Login"
            icon="user"
            onPress={onPressLogin}
            opacity={position.current.interpolate({
              inputRange: [0, width],
              outputRange: [1, 0.4],
              extrapolate: 'clamp',
            })}
          />
          <TabButton
            label="Registration"
            icon="plus"
            onPress={onPressRegistration}
            opacity={position.current.interpolate({
              inputRange: [0, width],
              outputRange: [0.4, 1],
              extrapolate: 'clamp',
            })}
          />
        </SafeAreaView>
      </View>
    </>
  )
};

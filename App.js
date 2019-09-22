/**
 * @format
 * @flow
 */

import React, { useCallback, useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';
import TabButton from './js/TabButton';
import Title from './js/Title';
import Login from './js/Login';
import Register from './js/Register';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  scrollView: {
    width: width * 2,
    height: height - 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(233,233,233,0.5)',
  },
  wrapper: {},
  form: {
    minHeight: height * 0.5,
    width: width * 2 - 100,
    marginHorizontal: 100,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom: 35,
    borderColor: 'rgba(221,221,221,0.8)',
    borderWidth: 1,
    flexDirection: 'row',
  },
  bottom: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 50,
    width: width,
  },
  title: {
    flexDirection: 'row',
    height: 50,
    marginBottom: 25
  },
});

export default function App() {
  const position = useRef(new Animated.Value(0));
  const scroll = useRef();

  const onPressLogin = useCallback(() => {
    scroll.current.getNode().scrollTo({
      x: 0,
    });
  });

  const onPressRegistration = useCallback(() => {
    scroll.current.getNode().scrollTo({
      x: width,
    });
  });

  return (
    <>
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
            <Login/>
            <Register/>
          </View>
        </View>
      </Animated.ScrollView>
      <View style={styles.bottom}>
        <TabButton
          label="Login"
          onPress={onPressLogin}
          opacity={position.current.interpolate({
            inputRange: [0, width],
            outputRange: [1, 0.4],
            extrapolate: 'clamp',
          })}
        />
        <TabButton
          label="Registration"
          onPress={onPressRegistration}
          opacity={position.current.interpolate({
            inputRange: [0, width],
            outputRange: [0.4, 1],
            extrapolate: 'clamp',
          })}
        />
      </View>
    </>
  );
};

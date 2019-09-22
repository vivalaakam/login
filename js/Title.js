/**
 * Created by vivalaakam on 22.09.2019.
 *
 * @flow
 */
import React from 'react';

import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  title: {
    flex: 1,
    paddingLeft: 50,
    fontSize: 28,
  },
});

export default function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

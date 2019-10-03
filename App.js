import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloWorld from './components/HelloWorld/HelloWorld';

export default function App() {
  return (
    <HelloWorld />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

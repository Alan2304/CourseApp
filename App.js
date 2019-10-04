import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HelloWorld from './components/HelloWorld/HelloWorld';
import ResolvedTodosScreen from './screens/ResolvedTodosScreen/ResolvedTodosScreen'
import StackNavigator from './navigators/StackNavigator';
import TabNavigator from './navigators/TabNavigator';
export default function App() {
  return (
        <StackNavigator />
        // <TabNavigator />
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

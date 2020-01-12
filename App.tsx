import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homepage from './src/features/Homepage/Homepage';

export default function App() {
  return (
    <View style={styles.container}>
      <Homepage></Homepage>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

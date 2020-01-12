import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => {
              alert('You tapped the button!');
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>
              Make a call
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <Text>body</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    borderRadius: 30,
    padding: 5,
    backgroundColor: '#E0E0E0',
    marginBottom: -30
  },
  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: 150,
    padding: 15,
    backgroundColor: '#F9AA33',
    borderWidth: 0
  },
  buttonText: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16
  },
  header: {
    zIndex: 200,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingTop: 30,
    width: '100%',
    flex: 1,
    backgroundColor: '#344955'
  },
  body: {
    width: '100%',
    flex: 6,
    backgroundColor: '#E0E0E0'
  }
});

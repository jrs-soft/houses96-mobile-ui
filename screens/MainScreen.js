import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MainScreen({ navigation }) {  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Main</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  }
});


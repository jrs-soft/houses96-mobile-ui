import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HostingScreenStep2 = () => {  
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>Step 2</Text>
      <Text>Welcome to step 22 of the wizard!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stepContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  }
});

export default HostingScreenStep2;

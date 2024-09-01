import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HostingScreenStep3 = () => {  
  return (
    <View style={styles.stepContainer}>
      <Text style={styles.title}>Step 3</Text>
      <Text>Welcome to step 33 of the wizard!</Text>
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

export default HostingScreenStep3;

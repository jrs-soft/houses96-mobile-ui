import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep7 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [title, setTitle] = useState('');
  const maxLength = 32; // Maximum character limit for the textarea

  const handleTitle = (value) => {
    setTitle(value);
    setHostingData({ ...hostingData, title: title});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Agora, vamos dar um título à sua propriedade</Text>
      
      <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={4}
        value={title}
        onChangeText={(text) => handleTitle(text)}
        placeholder="Digite o título aqui..."
        maxLength={maxLength}
      />

      <Text style={styles.counter}>
        {title.length}/{maxLength} caracteres
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textarea: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    height: 120, // Height for the textarea
    marginBottom: 10,
  },
  counter: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
});

export default HostingScreenStep7;

import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep9 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [description, setDescription] = useState(null);
  const maxLength = 500; // Maximum character limit for the textarea

  const handleDescription = (value) => {
    setDescription(value);
    setHostingData({ ...hostingData, description: value});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Crie a sua descrição</Text>

      <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={4}
        value={description}
        onChangeText={(text) => handleDescription(text)}
        placeholder="Digite a descrição aqui..."
        maxLength={maxLength}
      />

      <Text style={styles.counter}>
        {description && description.length}/{maxLength} caracteres
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  textarea: {
    width: Dimensions.get('window').width - 40, // Full width minus padding
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

export default HostingScreenStep9;

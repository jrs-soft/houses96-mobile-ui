import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, Dimensions } from 'react-native';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep11 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [price, setPrice] = useState(''); // State to manage price input
  const screenWidth = Dimensions.get('window').width;

  // Function to handle price input change
  const handlePriceChange = (text) => {
    // Optionally, format the input value if needed
    setPrice(text);
    setHostingData({ ...hostingData, pricePerNight: text});
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Defina seu preço</Text>

      {/* Editable Price Input */}
      <TextInput
        style={[styles.priceInput, { width: screenWidth * 0.8 }]}
        value={price}
        onChangeText={handlePriceChange}
        keyboardType="numeric" // Opens the numeric keyboard for input
      />

      {/* Price Breakdown Box */}
      <View style={[styles.priceBox, { width: screenWidth * 0.9 }]}>
        <View style={styles.row}>
          <Text style={styles.column1}>Preço base</Text>
          <Text style={styles.column2}>{price}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.column1}>Taxa de serviço ao hóspede</Text>
          <Text style={styles.column2}>R$ 18</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.column1}>Preço antes dos impostos</Text>
          <Text style={styles.column2}>R$ 144</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.column1}>Seu ganho</Text>
          <Text style={styles.column2}>R$ 122</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Align content from the top
    alignItems: 'center', // Center align horizontally
    paddingHorizontal: 20,
    paddingTop: 50, // Added padding to position title near top
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30, // Added more space between title and input
  },
  priceInput: {
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 10,
    width: '100%', // Set input to take 100% width of container
  },
  priceBox: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    width: '100%', // Rectangle will fit 100% of the screen width
    maxWidth: '90%', // Ensure it doesn’t overflow
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
  column1: {
    fontSize: 16,
    fontWeight: '400',
  },
  column2: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default HostingScreenStep11;

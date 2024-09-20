import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import Zocial from '@expo/vector-icons/Zocial';
import Fontisto from '@expo/vector-icons/Fontisto';
import Colors from '../constants/colors';

const HostingScreenStep1 = () => {
  // Replace this with your context
  // const { hostingData, setHostingData } = useContext(HostingContext);

  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const items = [
    { id: 1, name: 'Casa', icon: <AntDesign name="home" size={24} color="black" /> },
    { id: 2, name: 'Apartamento', icon: <MaterialIcons name="apartment" size={24} color="black" /> },
    { id: 3, name: 'Cama & Café da manhã', icon: <MaterialIcons name="free-breakfast" size={24} color="black" /> },
    { id: 4, name: 'Barco', icon: <Ionicons name="boat-outline" size={24} color="black" /> },
    { id: 5, name: 'Cabine', icon: <MaterialIcons name="cabin" size={24} color="black" /> },
    { id: 6, name: 'Campista', icon: <FontAwesome6 name="caravan" size={24} color="black" /> },
    { id: 7, name: 'Casa particular', icon: <MaterialIcons name="house" size={24} color="black" /> },
    { id: 8, name: 'Container', icon: <Octicons name="container" size={24} color="black" /> },
    { id: 9, name: 'Fazenda', icon: <FontAwesome6 name="warehouse" size={24} color="black" /> },
    { id: 10, name: 'Casa de hóspedes', icon: <Zocial name="guest" size={24} color="black" /> },
    { id: 11, name: 'Hotel', icon: <Fontisto name="hotel" size={24} color="black" /> },
    { id: 12, name: 'Casa flutuante', icon: <MaterialIcons name="houseboat" size={24} color="black" /> },
  ];

  const handleSelect = (id) => {
    alert(id);
    setSelectedItem(id);
    // Update shared data or perform any other actions
    // setHostingData({ ...hostingData, selectedPropertyType: id });
  };

  // Function to split items into chunks of specified size
  const chunkItems = (arr, size) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const itemChunks = chunkItems(items, 2); // Split items into rows of 2

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Selecione o tipo de sua propriedade</Text>
      {itemChunks.map((chunk, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {chunk.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.rectangle,
                selectedItem === item.id && styles.selectedRectangle,
                hoveredItem === item.id && styles.hoveredRectangle
              ]}
              onPress={() => handleSelect(item.id)}
              onPressIn={() => setHoveredItem(item.id)}
              onPressOut={() => setHoveredItem(null)}
            >
              {item.icon}
              <Text style={styles.rectangleText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%', // Ensure the row takes full width
    marginBottom: 10, // Add some space between rows
  },
  rectangle: {
    flex: 1, // Take equal space within the row
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10, // Space between rectangles
    backgroundColor: '#fff',
  },
  rectangleText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center', // Center text for long names
  },
  selectedRectangle: {
    backgroundColor: '#ceecd9', // Light blue background
    borderColor: Colors.primary500,
  },
  hoveredRectangle: {
    borderColor: Colors.primary500,
    borderWidth: 2,
  },
});

export default HostingScreenStep1;

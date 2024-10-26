import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Assuming you are using Expo
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep8 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    if (hostingData.descriptionTypes && hostingData.descriptionTypes.length > 0) {
      setSelectedItems(hostingData.descriptionTypes);
    }
  }, [hostingData.descriptionTypes]);

  useEffect(() => {
    setHostingData({ ...hostingData, descriptionTypes: selectedItems });
  }, [selectedItems]);

  const options = [
    { id: 1, name: 'Pacífico', icon: 'beach-access' },
    { id: 2, name: 'Exclusivo', icon: 'lock' },
    { id: 3, name: 'Ideal para famílias', icon: 'family-restroom' },
    { id: 4, name: 'Elegante', icon: 'warehouse' },
    { id: 5, name: 'Central', icon: 'center-focus-strong' },
    { id: 6, name: 'Espaçoso', icon: 'panorama-wide-angle' }
  ];

  const handleSelect = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter(item => item !== id));
    } else if (selectedItems.length < 2) {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Function to create rows with two items each
  const renderOptionsInRows = () => {
    const rows = [];
    for (let i = 0; i < options.length; i += 2) {
      const rowItems = options.slice(i, i + 2);
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems.map(option => (
            <TouchableOpacity
              key={option.id}
              style={[
                styles.option,
                selectedItems.includes(option.id) && styles.selected
              ]}
              onPress={() => handleSelect(option.id)}
              onPressIn={() => console.log(`Mouse over: ${option.name}`)} // Simulate hover
              onPressOut={() => console.log(`Mouse out: ${option.name}`)} // Simulate hover
            >
              <MaterialIcons name={option.icon} size={24} color="black" style={styles.icon} />
              <Text style={styles.optionText}>{option.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      );
    }
    return rows;
  };

  return (
    <View style={styles.container}>
      {/* Title */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Descreva sua propriedade</Text>
      </View>

      {/* Space */}
      <View style={styles.space} />

      {/* Option Rectangles - Two per row */}
      {renderOptionsInRows()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10, // optional margin for spacing
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  space: {
    height: 20,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ccc',
    width: '45%',
    backgroundColor: '#f2f2f2',
  },
  selected: {
    borderColor: Colors.primary500,
    backgroundColor: '#ceecd9',
  },
  icon: {
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
  }
});

export default HostingScreenStep8;

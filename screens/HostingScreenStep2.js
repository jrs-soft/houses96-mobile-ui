import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HostingScreenStep2 = () => {
  // Array of options with unique codes
  const options = [
    {
      code: '1',
      title: 'Um lugar inteiro',
      description: 'Os hóspedes têm o espaço todo só para eles.',
    },
    {
      code: '2',
      title: 'Um quarto',
      description: 'Os hóspedes têm seu próprio quarto em uma casa, além de acesso a espaços compartilhados.',
    },
    {
      code: '3',
      title: 'Um quarto compartilhado',
      description: 'Os hóspedes dormem em um quarto ou área comum que pode ser compartilhada com você ou outras pessoas.',
    },
  ];

  // State for selected option
  const [selectedOption, setSelectedOption] = useState(null);
  const [hoveredOption, setHoveredOption] = useState(null);

  // Function to handle selection by code
  const handleSelect = (code) => {
    alert(code);
    setSelectedOption(code);
  };

  // Function to handle mouse over effect
  const handleMouseOver = (code) => {
    setHoveredOption(code);
  };

  return (
    <View style={styles.container}>
      {/* Row with the main question */}
      <View style={styles.row}>
        <Text style={styles.mainText}>Que tipo de lugar os hóspedes terão?</Text>
      </View>

      {/* Iterate through options to create clickable rectangles */}
      {options.map((option) => (
        <TouchableOpacity
          key={option.code}
          style={[
            styles.clickableRectangle,
            selectedOption === option.code && styles.selectedRectangle,
            hoveredOption === option.code && styles.hoveredRectangle,
          ]}
          onPress={() => handleSelect(option.code)}
          onPressIn={() => handleMouseOver(option.code)}
          onPressOut={() => setHoveredOption(null)}
        >
          <Text style={styles.subtitle}>{option.title}</Text>
          <Text style={styles.description}>{option.description}</Text>
        </TouchableOpacity>
      ))}

      {/* Row as space */}
      <View style={styles.spaceRow} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  row: {
    marginBottom: 24,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  clickableRectangle: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    marginBottom: 12, // Adjust the margin to separate rectangles
  },
  selectedRectangle: {
    backgroundColor: '#ceecd9', // Color for the selected state
  },
  hoveredRectangle: {
    backgroundColor: '#e0f7fa', // Color for the mouse-over (hover) state
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  spaceRow: {
    height: 20, // Adjust the height for the space row as needed
  },
});

export default HostingScreenStep2;

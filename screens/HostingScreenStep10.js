import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep10 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (hostingData.firstBookingType) {
      setSelectedOption(hostingData.firstBookingType);
    }
  }, [hostingData.firstBookingType]);

  const options = [
    { id: '1', label: 'Qualquer hóspede', icon: 'group' },
    { id: '2', label: 'Hóspede experiente', icon: 'person' },
  ];

  const selectOption = (id) => {
    setSelectedOption(id);
    setHostingData({ ...hostingData, firstBookingType: id});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha quem receberá na sua primeira reserva</Text>

      {options.map((option) => (
        <TouchableOpacity 
          key={option.id} 
          style={[
            styles.optionContainer, 
            selectedOption === option.id ? styles.selectedOption : null
          ]} 
          onPress={() => selectOption(option.id)}
        >
          <View style={styles.optionContent}>
            <Icon name={option.icon} size={24} color={Colors.primary500} />
            <Text style={styles.optionText}>{option.label}</Text>
          </View>
          <RadioButton
            value={option.id}
            status={selectedOption === option.id ? 'checked' : 'unchecked'}
            onPress={() => selectOption(option.id)}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 16,
    marginBottom: 10,
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedOption: {
    borderColor: Colors.primary500,
    backgroundColor: '#ceecd9',
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default HostingScreenStep10;

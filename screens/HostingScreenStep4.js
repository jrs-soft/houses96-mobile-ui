import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';

const CounterRow = ({ label, count, setCount }) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.counterContainer}>
      <TouchableOpacity
        style={styles.counterCircle}
        onPress={() => setCount(count > 0 ? count - 1 : 0)}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity
        style={styles.counterCircle}
        onPress={() => setCount(count + 1)}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const HostingScreenStep4 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context

  const updateHostingData = (key, value) => {
    setHostingData(prev => ({ ...prev, [key]: value })); // Update context
  };

  const [guests, setGuests] = useState(hostingData.guests || 0);
  const [rooms, setRooms] = useState(hostingData.rooms || 0);
  const [beds, setBeds] = useState(hostingData.beds || 0);
  const [bathrooms, setBathrooms] = useState(hostingData.bathrooms || 0);

  const handleSetGuests = (value) => {
    setGuests(value);
    updateHostingData('maximumNumberOfGuests', value);
  };

  const handleSetRooms = (value) => {
    setRooms(value);
    updateHostingData('numberOfBedrooms', value);
  };

  const handleSetBeds = (value) => {
    setBeds(value);
    updateHostingData('numberOfBeds', value);
  };

  const handleSetBathrooms = (value) => {
    setBathrooms(value);
    updateHostingData('numberOfBathrooms', value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compartilhe algumas informações sobre sua propriedade</Text>

      <CounterRow label="Hóspedes" count={guests} setCount={handleSetGuests} />
      <CounterRow label="Quartos" count={rooms} setCount={handleSetRooms} />
      <CounterRow label="Camas" count={beds} setCount={handleSetBeds} />
      <CounterRow label="Banheiros" count={bathrooms} setCount={handleSetBathrooms} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  counterCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary500,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary500,
  },
  countText: {
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10
  },
});

export default HostingScreenStep4;

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

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
  const [guests, setGuests] = useState(0);
  const [rooms, setRooms] = useState(0);
  const [beds, setBeds] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Compartilhe algumas informações sobre sua propriedade</Text>

      <CounterRow label="Hóspedes" count={guests} setCount={setGuests} />
      <CounterRow label="Quartos" count={rooms} setCount={setRooms} />
      <CounterRow label="Camas" count={beds} setCount={setBeds} />
      <CounterRow label="Banheiros" count={bathrooms} setCount={setBathrooms} />
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

import React, { useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';

const GOOGLE_MAPS_API_KEY = 'AIzaSyBxYF0PbSFXvVuytvVgqxGwy72KQpApsLk';

const HostingScreenStep3 = () => {
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const { hostingData, setHostingData } = useContext(HostingContext);

  const searchAddress = async () => {
    if (!address) {
      alert('Por favor, insira um endereço');
      return;
    }

    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${GOOGLE_MAPS_API_KEY}`
      );

      const result = response.data.results[0];

      if (result) {
        const components = result.address_components;
        const streetComponent = components.find(component =>
          component.types.includes('route')
        );
        const streetNumberComponent = components.find(component => 
          component.types.includes("street_number")
        );
        const cityComponent = components.find(component =>
          component.types.includes('administrative_area_level_2')
        );
        const stateComponent = components.find(component =>
          component.types.includes('administrative_area_level_1')
        );
        const postalCodeComponent = components.find(component =>
          component.types.includes('postal_code')
        );

        setStreet(streetComponent ? streetComponent.long_name : 'Desconhecido');
        setStreetNumber(streetNumberComponent ? streetNumberComponent.long_name : 'Desconhecido');
        setCity(cityComponent ? cityComponent.long_name : 'Desconhecido');
        setState(stateComponent ? stateComponent.long_name : 'Desconhecido');
        setCep(postalCodeComponent ? postalCodeComponent.long_name : 'Desconhecido');

        const address = street + ', ' + streetNumber; 
        setHostingData({ ...hostingData, address: address, cityName: city, stateName: state, zipCode: cep});

      } else {
        alert('Endereço não encontrado');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao pesquisar o endereço');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Onde fica sua propriedade?</Text>
      </View>

      <View style={styles.row}>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
          placeholder="Digite seu endereço"
        />
        <TouchableOpacity style={styles.footerButton} onPress={searchAddress}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <Text style={styles.title}>Confirme seu endereço</Text>
      </View>

      {/* Table for Street, City, and State Inputs */}
      <View style={styles.table}>
        <View style={styles.tableRow}>
          <Text style={styles.label}>Rua: </Text>
          <TextInput
            style={styles.tableInput}
            value={street}
            onChangeText={setStreet}
            placeholder="Digite a rua"
          />
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.label}>Número: </Text>
          <TextInput
            style={styles.tableInput}
            value={streetNumber}
            onChangeText={setStreetNumber}
            placeholder="Digite o número"
          />
        </View>
        
        <View style={styles.tableRow}>
          <Text style={styles.label}>Cidade: </Text>
          <TextInput
            style={styles.tableInput}
            value={city}
            onChangeText={setCity}
            placeholder="Digite a cidade"
          />
        </View>

        <View style={styles.tableRow}>
          <Text style={styles.label}>Estado: </Text>
          <TextInput
            style={styles.tableInput}
            value={state}
            onChangeText={setState}
            placeholder="Digite o estado"
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.label}>CEP: </Text>
          <TextInput
            style={styles.tableInput}
            value={cep}
            onChangeText={setCep}
            placeholder="Digite o CEP"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    width: '100%',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginRight: 8,
    width: 65
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginRight: 8,
  },
  footerButton: {
    backgroundColor: Colors.primary500,
    padding: 10,
    borderRadius: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  table: {
    marginTop: 16,
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  tableInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
  },
});

export default HostingScreenStep3;

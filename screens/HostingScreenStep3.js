import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';
import MessageAlert from '../components/ui/MessageAlert'; // Import MessageAlert

const GOOGLE_MAPS_API_KEY = 'AIzaSyBxYF0PbSFXvVuytvVgqxGwy72KQpApsLk';

const HostingScreenStep3 = () => {
  const [address, setAddress] = useState('');
  const [street, setStreet] = useState('');
  const [streetNumber, setStreetNumber] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [cep, setCep] = useState('');
  const [latitude, setLatitude] = useState(null); // Track latitude
  const [longitude, setLongitude] = useState(null); // Track longitude
  const [alertVisible, setAlertVisible] = useState(false); // Track alert visibility
  const [alertMessage, setAlertMessage] = useState(''); // Track alert message
  const { hostingData, setHostingData } = useContext(HostingContext);

  useEffect(() => {
    if (hostingData.address && hostingData.cityName && hostingData.stateName && hostingData.zipCode && hostingData.latitude && hostingData.longitude) {
      const addressArr = hostingData.address.split(',');
      const street = addressArr[0];
      const streetNumber = addressArr[1];
      setAddress(hostingData.address);
      setStreet(street);
      setStreetNumber(streetNumber);
      setCity(hostingData.cityName);
      setState(hostingData.stateName);
      setCep(hostingData.zipCode);
      setLatitude(hostingData.latitude); // Set initial latitude
      setLongitude(hostingData.longitude); // Set initial longitude
    }
  }, [hostingData]);

  const searchAddress = async () => {
    if (!address) {
      setAlertMessage('Por favor, insira um endereço');
      setAlertVisible(true);
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

        const updatedStreet = streetComponent ? streetComponent.long_name : 'Desconhecido';
        const updatedStreetNumber = streetNumberComponent ? streetNumberComponent.long_name : 'Desconhecido';
        const updatedCity = cityComponent ? cityComponent.long_name : 'Desconhecido';
        const updatedState = stateComponent ? stateComponent.long_name : 'Desconhecido';
        const updatedCep = postalCodeComponent ? postalCodeComponent.long_name : 'Desconhecido';

        const updatedLatitude = result.geometry.location.lat;
        const updatedLongitude = result.geometry.location.lng;

        setStreet(updatedStreet);
        setStreetNumber(updatedStreetNumber);
        setCity(updatedCity);
        setState(updatedState);
        setCep(updatedCep);
        setLatitude(updatedLatitude);
        setLongitude(updatedLongitude);

        setHostingData({ 
          ...hostingData, 
          address: `${updatedStreet}, ${updatedStreetNumber}`, 
          cityName: updatedCity, 
          stateName: updatedState,
          zipCode: updatedCep,
          latitude: updatedLatitude,
          longitude: updatedLongitude 
        });
      } else {
        setAlertMessage('Endereço não encontrado');
        setAlertVisible(true);
      }
    } catch (error) {
      console.error(error);
      setAlertMessage('Erro ao pesquisar o endereço');
      setAlertVisible(true);
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

      {/* Table for Street, City, State, and Coordinates */}
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
        <View style={styles.tableRow}>
          <Text style={styles.label}>Latitude: </Text>
          <TextInput
            style={styles.tableInput}
            value={latitude ? latitude.toString() : ''}
            editable={false}
            placeholder="Latitude"
          />
        </View>
        <View style={styles.tableRow}>
          <Text style={styles.label}>Longitude: </Text>
          <TextInput
            style={styles.tableInput}
            value={longitude ? longitude.toString() : ''}
            editable={false}
            placeholder="Longitude"
          />
        </View>
      </View>

      {/* MessageAlert Modal */}
      <MessageAlert
        visible={alertVisible}
        message={alertMessage}
        onClose={() => setAlertVisible(false)}
      />
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
    width: 80
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

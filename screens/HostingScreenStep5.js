import React, { useState, useContext, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Zocial from '@expo/vector-icons/Zocial';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';

const amenities = [
  { code: 1, name: 'Wifi', icon: <MaterialIcons name="wifi" size={24} color="black" /> },
  { code: 2, name: 'TV', icon: <MaterialIcons name="tv" size={24} color="black" /> },
  { code: 3, name: 'Cozinha', icon: <MaterialIcons name="kitchen" size={24} color="black" /> },
  { code: 4, name: 'Lavadora', icon: <MaterialCommunityIcons name="dishwasher" size={24} color="black" /> },
  { code: 5, name: 'Estacionamento gratuito no local', icon: <MaterialCommunityIcons name="parking" size={24} color="black" /> },
  { code: 6, name: 'Estacionamento pago no local', icon: <MaterialCommunityIcons name="car-brake-parking" size={24} color="black" /> },
  { code: 7, name: 'Ar condicionado', icon: <MaterialCommunityIcons name="air-conditioner" size={24} color="black" /> },
  { code: 8, name: 'Espaço de trabalho dedicado', icon: <MaterialIcons name="workspaces" size={24} color="black" /> },
  { code: 9, name: 'Piscina', icon: <MaterialIcons name="pool" size={24} color="black" /> },
  { code: 10, name: 'Banheira de hidromassagem', icon: <FontAwesome5 name="hot-tub" size={24} color="black" /> },
  { code: 11, name: 'Pátio', icon: <MaterialCommunityIcons name="patio-heater" size={24} color="black" /> },
  { code: 12, name: 'Churrasqueira', icon: <MaterialCommunityIcons name="grill" size={24} color="black" /> },
  { code: 13, name: 'Área de jantar ao ar livre', icon: <MaterialIcons name="dining" size={24} color="black" /> },
  { code: 14, name: 'Fogueira', icon: <MaterialCommunityIcons name="campfire" size={24} color="black" /> },
  { code: 15, name: 'Mesa de sinuca', icon: <Zocial name="opentable" size={24} color="black" /> },
  { code: 16, name: 'Lareira interna', icon: <MaterialCommunityIcons name="fireplace" size={24} color="black" /> },
  { code: 17, name: 'Piano', icon: <MaterialCommunityIcons name="piano" size={24} color="black" /> },
  { code: 18, name: 'Equipamento de exercício', icon: <MaterialIcons name="fitness-center" size={24} color="black" /> },
  { code: 19, name: 'Acesso ao lago', icon: <MaterialIcons name="water" size={24} color="black" /> },
  { code: 20, name: 'Acesso à praia', icon: <MaterialCommunityIcons name="beach" size={24} color="black" /> },
  { code: 21, name: 'Chuveiro ao ar livre', icon: <FontAwesome name="shower" size={24} color="black" /> },
  { code: 22, name: 'Alarme de fumaça', icon: <MaterialCommunityIcons name="smoke-detector-alert-outline" size={24} color="black" /> },
  { code: 23, name: 'Kit de primeiros socorros', icon: <Fontisto name="first-aid-alt" size={24} color="black" /> },
  { code: 24, name: 'Extintor de incêndio', icon: <FontAwesome name="fire-extinguisher" size={24} color="black" /> },
  { code: 25, name: 'Alarme de monóxido de carbono', icon: <MaterialCommunityIcons name="alarm-light-outline" size={24} color="black" /> }
];

const HostingScreenStep5 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [hoveredCode, setHoveredCode] = useState(null);

  // This effect will update hostingData whenever selectedAmenities changes
  useEffect(() => {
    setHostingData({ ...hostingData, amenityIds: selectedAmenities });
  }, [selectedAmenities]);

  const toggleAmenity = (code) => {
    setSelectedAmenities((prevSelected) =>
      prevSelected.includes(code)
        ? prevSelected.filter((c) => c !== code)
        : [...prevSelected, code]
    );
  };

  const isHovered = (code) => hoveredCode === code;
  const isSelected = (code) => selectedAmenities.includes(code);

  const renderAmenitiesInRows = () => {
    const rows = [];
    for (let i = 0; i < amenities.length; i += 2) {
      const rowItems = amenities.slice(i, i + 2);
      rows.push(
        <View key={i} style={styles.row}>
          {rowItems.map((amenity) => (
            <TouchableOpacity
              key={amenity.code}
              style={[
                styles.rectangle,
                isSelected(amenity.code) && styles.selected,
                isHovered(amenity.code) && styles.hovered
              ]}
              onPress={() => toggleAmenity(amenity.code)}
              onPressIn={() => setHoveredCode(amenity.code)}
              onPressOut={() => setHoveredCode(null)}
            >
              {amenity.icon}
              <Text style={styles.rectangleText}>{amenity.name}</Text>
            </TouchableOpacity>
          ))}
          {/* Add an empty view to fill the space if there is only one item in the row */}
          {rowItems.length < 2 && <View style={styles.rectangle} />}
        </View>
      );
    }
    return rows;
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Diga aos hóspedes o que seu lugar tem a oferecer</Text>
      {renderAmenitiesInRows()}
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
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  rectangle: {
    width: 150,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  rectangleText: {
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  selected: {
    borderColor: Colors.primary500,
    backgroundColor: '#ceecd9',
  },
  hovered: {
    backgroundColor: '#f5f5f5',
  },
});

export default HostingScreenStep5;

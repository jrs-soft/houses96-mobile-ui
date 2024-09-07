import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Octicons from '@expo/vector-icons/Octicons';
import Zocial from '@expo/vector-icons/Zocial';
import Fontisto from '@expo/vector-icons/Fontisto';

const HostingScreenStep5 = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Diga aos hóspedes o que seu lugar tem a oferecer</Text>
      
      {/* Spacer */}
      {/* <View style={styles.spacer} /> */}

      {/* Rectangle Buttons */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <AntDesign name="home" size={24} color="black" />
          <Text style={styles.rectangleText}>Casa</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="apartment" size={24} color="#000" />
          <Text style={styles.rectangleText}>Apartamento</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="free-breakfast" size={24} color="black" />
          <Text style={styles.rectangleText}>Cama & Café da manhã</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <Ionicons name="boat-outline" size={24} color="black" />
          <Text style={styles.rectangleText}>Barco</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="cabin" size={24} color="black" />
          <Text style={styles.rectangleText}>Cabine</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <FontAwesome6 name="caravan" size={24} color="black" />
          <Text style={styles.rectangleText}>Campista</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="house" size={24} color="black" />
          <Text style={styles.rectangleText}>Casa particular</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <Octicons name="container" size={24} color="black" />
          <Text style={styles.rectangleText}>Container</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <FontAwesome6 name="warehouse" size={24} color="black" />
          <Text style={styles.rectangleText}>Fazenda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <Zocial name="guest" size={24} color="black" />
          <Text style={styles.rectangleText}>Casa de hóspedes</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <Fontisto name="hotel" size={24} color="black" />
          <Text style={styles.rectangleText}>Hotel</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="houseboat" size={24} color="black" />
          <Text style={styles.rectangleText}>Casa flutuante</Text>
        </TouchableOpacity>
      </View>

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
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  spacer: {
    height: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rectangle: {
    width: 150,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  rectangleText: {
    marginTop: 10,
    fontSize: 16,
  },
});

export default HostingScreenStep5;

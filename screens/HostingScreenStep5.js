import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Zocial from '@expo/vector-icons/Zocial';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const HostingScreenStep5 = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>Diga aos hóspedes o que seu lugar tem a oferecer</Text>
      
      {/* Rectangle Buttons */}
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="wifi" size={24} color="black" />
          <Text style={styles.rectangleText}>Wifi</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="tv" size={24} color="black" />
          <Text style={styles.rectangleText}>TV</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="kitchen" size={24} color="black" />
          <Text style={styles.rectangleText}>Cozinha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="dishwasher" size={24} color="black" />
          <Text style={styles.rectangleText}>Lavadora</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="parking" size={24} color="black" />
          <Text style={styles.rectangleText}>Estacionamento gratuito no local</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="car-brake-parking" size={24} color="black" />
          <Text style={styles.rectangleText}>Estacionamento pago no local</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="air-conditioner" size={24} color="black" />
          <Text style={styles.rectangleText}>Ar condicionado</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="workspaces" size={24} color="black" />
          <Text style={styles.rectangleText}>Espaço de trabalho dedicado</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="pool" size={24} color="black" />
          <Text style={styles.rectangleText}>Piscina</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <FontAwesome5 name="hot-tub" size={24} color="black" />
          <Text style={styles.rectangleText}>Banheira de hidromassagem</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="patio-heater" size={24} color="black" />
          <Text style={styles.rectangleText}>Pátio</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="grill" size={24} color="black" />
          <Text style={styles.rectangleText}>Churrasqueira</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="dining" size={24} color="black" />
          <Text style={styles.rectangleText}>Área de jantar ao ar livre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="campfire" size={24} color="black" />
          <Text style={styles.rectangleText}>Fogueira</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <Zocial name="opentable" size={24} color="black" />
          <Text style={styles.rectangleText}>Mesa de sinuca</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="fireplace" size={24} color="black" />
          <Text style={styles.rectangleText}>Lareira interna</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="piano" size={24} color="black" />
          <Text style={styles.rectangleText}>Piano</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="fitness-center" size={24} color="black" />
          <Text style={styles.rectangleText}>Equipamento de exercício</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialIcons name="water" size={24} color="black" />
          <Text style={styles.rectangleText}>Acesso ao lago</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="beach" size={24} color="black" />
          <Text style={styles.rectangleText}>Acesso à praia</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <FontAwesome name="shower" size={24} color="black" />
          <Text style={styles.rectangleText}>Chuveiro ao ar livre</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="smoke-detector-alert-outline" size={24} color="black" />
          <Text style={styles.rectangleText}>Alarme de fumaça</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <Fontisto name="first-aid-alt" size={24} color="black" />
          <Text style={styles.rectangleText}>Kit de primeiros socorros</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.rectangle}>
          <FontAwesome name="fire-extinguisher" size={24} color="black" />
          <Text style={styles.rectangleText}>Extintor de incêndio</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.rectangle}>
          <MaterialCommunityIcons name="alarm-light-outline" size={24} color="black" />
          <Text style={styles.rectangleText}>Alarme de monóxido de carbono</Text>
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

import React from 'react';
import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Text>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Houses96</Text>
        <TouchableOpacity>
          <Text>Filtro</Text>
        </TouchableOpacity>
      </View>

      {/* Search Input */}
      <TextInput 
        style={styles.input}
        placeholder="Para onde?"
      />

      {/* Image */}
      <Image 
        source={{ uri: 'https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg?t=st=1719274856~exp=1719278456~hmac=6ce826dc6a1c352eb8adcbb01bffa1c2d1c5e0ce0308b6e83027b539c79247c0&w=1800' }}
        style={styles.image}
      />

      {/* Info Container */}
      <View style={styles.infoContainer}>
        <View style={styles.infoText}>
          <Text style={styles.title}>Quarto em Santarém, Brasil</Text>
          <Text>1 quarto - Banheiro compartilhado</Text>
          <Text>13 - 18 de Maio</Text>
          <Text>R$ 876,00 - Noite</Text>
        </View>
        <View style={styles.rating}>
          <Ionicons name="star" size={24} color="black" />
          <Text>4.8</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="home" size={24} color="black" />
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="search" size={24} color="black" />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="notifications" size={24} color="black" />
          <Text>Alerts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerButton}>
          <Ionicons name="person" size={24} color="black" />
          <Text>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 20,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 400,
    borderRadius: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  infoText: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderColor: 'gray',
    paddingVertical: 10,
  },
  footerButton: {
    alignItems: 'center',
  }
});

export default MainScreen;

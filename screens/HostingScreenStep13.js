import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const HostingScreenStep13 = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      {/* Title Row */}
      <Text style={styles.title}>Revise sua inclusão</Text>

      {/* Outer Rounded Rectangle */}
      <View style={[styles.outerRectangle, { width: screenWidth - 32 }]}>
        {/* Inner Rounded Rectangle with Image */}
        <View style={styles.innerRectangle}>
          <Image
            style={styles.image}
            source={{ uri: 'https://static.ffx.io/images/$zoom_0.7%2C$multiply_2.709%2C$ratio_1.5%2C$width_756%2C$x_25%2C$y_1/t_crop_custom/q_62%2Cf_auto/386db6fc83fdc5fa8448609acf6fee156420533c' }} // Replace with your image URL
          />
        </View>

        {/* Labels and "New" label with star in the same row */}
        <View style={styles.rowContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>teste</Text>
            <Text style={styles.priceText}>
              <Text style={styles.strikethrough}>R$ 126</Text> R$ 101 noite
            </Text>
          </View>

          {/* "New" label with star */}
          <View style={styles.newLabelContainer}>
            <Text style={styles.newLabel}>New</Text>
            <Ionicons name="star" size={24} color="black" />
          </View>
        </View>
      </View>

      {/* Space Row */}
      <View style={styles.spaceRow} />

      {/* Section with "O que vem a seguir?" and icons with text */}
      <Text style={styles.sectionTitle}>O que vem a seguir?</Text>

      {/* Row with icon and text */}
      <View style={styles.iconRow}>
        <Ionicons name="checkmark-circle" size={24} color="black" />
        <Text style={styles.iconText}>Confirme alguns detalhes e publique</Text>
      </View>

      <View style={styles.iconRow}>
        <Ionicons name="calendar" size={24} color="black" />
        <Text style={styles.iconText}>Configure seu calendário</Text>
      </View>

      <View style={styles.iconRow}>
        <Ionicons name="settings" size={24} color="black" />
        <Text style={styles.iconText}>Ajuste suas configurações</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  outerRectangle: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  innerRectangle: {
    borderRadius: 10,
    overflow: 'hidden',
    width: '100%',
    height: 250, // Increased height
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  labelText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  priceText: {
    fontSize: 16,
  },
  strikethrough: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  newLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  newLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 5,
  },
  spaceRow: {
    height: 20, // Adjust the space height as needed
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default HostingScreenStep13;

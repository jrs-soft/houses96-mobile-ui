import React, { useContext } from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { HostingContext } from '../context/HostingContext';
import Colors from '../constants/colors';

const HostingScreenStep13 = () => {
  const { hostingData } = useContext(HostingContext); // Access context
  const screenWidth = Dimensions.get('window').width;

  // Calculate discount
  const discountPercentage = parseFloat(hostingData.promotionDiscount.replace('%', ''));
  const originalPrice = parseFloat(hostingData.pricePerNight);
  const discountedPrice = (originalPrice * (1 - discountPercentage / 100)).toFixed(2);

  // Format prices with comma as decimal separator
  const formattedOriginalPrice = originalPrice.toFixed(2).replace('.', ',');
  const formattedDiscountedPrice = discountedPrice.toString().replace('.', ',');

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
            source={{ uri: hostingData.pictures[0].uri }} // Replace with your image URL
          />
        </View>

        {/* Labels and "New" label with star in the same row */}
        <View style={styles.rowContainer}>
          <View style={styles.labelContainer}>
            <Text style={styles.labelText}>{hostingData.title}</Text>
            <Text style={styles.priceText}>
              <Text style={styles.strikethrough}>R$ {formattedOriginalPrice}</Text> R$ {formattedDiscountedPrice} noite
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
    height: 250,
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
    color: Colors.primary500,
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
    height: 20,
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

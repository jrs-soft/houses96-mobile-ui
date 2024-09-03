import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HostingScreenStep2 = () => {
  return (
    <View style={styles.container}>
      {/* Row with the main question */}
      <View style={styles.row}>
        <Text style={styles.mainText}>Que tipo de lugar os hóspedes terão?</Text>
      </View>

      {/* Row with the clickable rectangle */}
      <TouchableOpacity style={styles.clickableRectangle}>
        <Text style={styles.subtitle}>Um lugar inteiro</Text>
        <Text style={styles.description}>Os hóspedes têm o espaço todo só para eles.</Text>
      </TouchableOpacity>
      {/* Row as space */}
      <View style={styles.spaceRow} />
      <TouchableOpacity style={styles.clickableRectangle}>
        <Text style={styles.subtitle}>Um quarto</Text>
        <Text style={styles.description}>Os hóspedes têm seu próprio quarto em uma casa, além de acesso a espaços compartilhados.</Text>
      </TouchableOpacity>
      {/* Row as space */}
      <View style={styles.spaceRow} />
      <TouchableOpacity style={styles.clickableRectangle}>
        <Text style={styles.subtitle}>Um quarto compartilhado</Text>
        <Text style={styles.description}>Os hóspedes dormem em um quarto ou área comum que pode ser compartilhada com você ou outras pessoas.</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  row: {
    marginBottom: 24,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  clickableRectangle: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
    color: '#000',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  spaceRow: {
    height: 20, // Adjust the height for the space row as needed
  },
});

export default HostingScreenStep2;

import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep14 = ({ navigation }) => {

  const { hostingData, setHostingData } = useContext(HostingContext);
  alert(JSON.stringify(hostingData));

  return (
    <View style={styles.container}>
      {/* Title Row */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>Parabéns, Josivan!</Text>
      </View>

      {/* Message Row */}
      <View style={styles.messageRow}>
        <Text style={styles.message}>
          De um anfitrião para outro – bem-vindo a bordo. Obrigado por compartilhar sua casa e ajudar a criar experiências incríveis para nossos hóspedes.
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  titleRow: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  messageRow: {
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 24,
  },
  buttonRow: {
    alignItems: 'center',
  },
});

export default HostingScreenStep14;

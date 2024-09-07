import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HostingScreenStep1 from './HostingScreenStep1';
import HostingScreenStep2 from './HostingScreenStep2';
import HostingScreenStep3 from './HostingScreenStep3';
import Colors from '../constants/colors';
import HostingScreenStep4 from './HostingScreenStep4';
import HostingScreenStep5 from './HostingScreenStep5';

const HostingScreen = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <HostingScreenStep1 />;
      case 2:
        return <HostingScreenStep2 />;
      case 3:
        return <HostingScreenStep3 />;
      case 4:
        return <HostingScreenStep4 />;
      case 5:
        return <HostingScreenStep5 />;    
      default:
        return <HostingScreenStep1 />;
    }
  };

  return (
    <View style={styles.container}>
      {renderStep()}

      <View style={styles.buttonContainer}>
        {currentStep > 1 && (
          <TouchableOpacity style={styles.footerButton} onPress={() => setCurrentStep(currentStep - 1)}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        )}
        {currentStep < 5 && (
          <TouchableOpacity style={styles.footerButton} onPress={() => setCurrentStep(currentStep + 1)}>
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        )}
        {currentStep === 5 && (
          <TouchableOpacity style={styles.footerButton} onPress={() => setCurrentStep(1)}>
            <Text style={styles.buttonText}>Finalizar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
    marginTop: 20
  },
  footerButton: {
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  footerButton: {
    backgroundColor: Colors.primary500,
    padding: 10,
    borderRadius: 15,
  },
});

export default HostingScreen;

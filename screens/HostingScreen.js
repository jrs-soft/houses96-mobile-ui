import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HostingScreenStep1 from './HostingScreenStep1';
import HostingScreenStep2 from './HostingScreenStep2';
import HostingScreenStep3 from './HostingScreenStep3';
import Colors from '../constants/colors';
import HostingScreenStep4 from './HostingScreenStep4';
import HostingScreenStep5 from './HostingScreenStep5';
import { HostingContext } from '../context/HostingContext';
import HostingScreenStep6 from './HostingScreenStep6';
import HostingScreenStep7 from './HostingScreenStep7';
import HostingScreenStep8 from './HostingScreenStep8';
import HostingScreenStep9 from './HostingScreenStep9';
import HostingScreenStep10 from './HostingScreenStep10';
import HostingScreenStep11 from './HostingScreenStep11';
import HostingScreenStep12 from './HostingScreenStep12';
import HostingScreenStep13 from './HostingScreenStep13';
import HostingScreenStep14 from './HostingScreenStep14';
import MessageAlert from '../components/ui/MessageAlert';

const HostingScreen = () => {
  const { hostingData, setHostingData } = useContext(HostingContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [alertMessage, setAlertMessage] = useState(null);

  const validateStep = () => {
    switch (currentStep) {
      case 1:
        return validateStep1();
      case 2:
        return validateStep2();
      case 3:
        return validateStep3();
      case 4:
        return validateStep4();
      case 5:
        return validateStep5();
      case 6:
        return validateStep6();
      case 7:
        return validateStep7();
      case 8:
        return validateStep8();
      case 9:
        return validateStep9();
      case 10:
        return validateStep10();
      case 11:
        return validateStep11();
      case 12:
        return validateStep12();                    
      default:
        return true;
    }
  };

  const validateStep1 = () => {
    return hostingData.typeId !== null;
  };

  const validateStep2 = () => {
    return hostingData.typeOfPlace !== null;
  };

  const validateStep3 = () => {
    return hostingData.address !== null 
              && hostingData.cityName !== null 
              && hostingData.stateName !== null 
              && hostingData.zipCode !== null;
  };

  const validateStep4 = () => {
    return hostingData.maximumNumberOfGuests !== null
              && hostingData.maximumNumberOfGuests > 0
              && hostingData.numberOfBedrooms !== null
              && hostingData.numberOfBedrooms > 0 
              && hostingData.numberOfBeds !== null
              && hostingData.numberOfBeds > 0 
              && hostingData.numberOfBathrooms !== null
              && hostingData.numberOfBathrooms > 0;
  };

  const validateStep5 = () => {
    return hostingData.amenityIds.length > 0;
  };

  const validateStep6 = () => {
    return hostingData.pictures.length > 4;
  };

  const validateStep7 = () => {
    return hostingData.title !== null;
  };

  const validateStep8 = () => {
    return hostingData.descriptionTypes.length > 0;
  };

  const validateStep9 = () => {
    return hostingData.description !== null;
  };

  const validateStep10 = () => {
    return hostingData.firstBookingType !== null;
  };

  const validateStep11 = () => {

    // Step 1: Replace comma with dot
    const formattedValue = hostingData.pricePerNight.replace(',', '.');

    // Step 2: Convert to number
    const numberValue = parseFloat(formattedValue);

    return hostingData.pricePerNight !== null && numberValue > 0;
  };

  const validateStep12 = () => {
    return (hostingData.promotionDiscount !== null && hostingData.isPromoChecked === true)
              || (hostingData.weeklyDiscount !== null && hostingData.isWeeklyChecked === true) 
              || (hostingData.monthlyDiscount !== null && hostingData.isMonthlyChecked === true)
  };

  const handleNextStep = () => {
    if (validateStep()) {
      setAlertMessage(null); // Clear alert when validation passes
      setCurrentStep(currentStep + 1);
    } else {
      setAlertMessage("Por favor, preencha ou selecione o(s) campo(s) obrigatório(s)."); // Set alert when validation fails
    }
  };

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
      case 6:
        return <HostingScreenStep6 />;
      case 7:
        return <HostingScreenStep7 />;
      case 8:
        return <HostingScreenStep8 />;
      case 9:
        return <HostingScreenStep9 />;
      case 10:
        return <HostingScreenStep10 />;
      case 11:
        return <HostingScreenStep11 />;
      case 12:
        return <HostingScreenStep12 />;
      case 13:
        return <HostingScreenStep13 />;
      case 14:
        return <HostingScreenStep14 />;                      
      default:
        return <HostingScreenStep1 />;
    }
  };

  return (
  
      <View style={styles.container}>
        {renderStep()}

        {/* Conditionally render the MessageAlert if there's an alertMessage */}
        {alertMessage && (
          <MessageAlert type="warning" message={alertMessage} />
        )}

        <View style={styles.buttonContainer}>
          {currentStep > 1 && (
            <TouchableOpacity style={styles.footerButton} onPress={() => setCurrentStep(currentStep - 1)}>
              <Text style={styles.buttonText}>Voltar</Text>
            </TouchableOpacity>
          )}
          {currentStep < 14 && (
            <TouchableOpacity style={styles.footerButton} onPress={handleNextStep}>
              <Text style={styles.buttonText}>Próximo</Text>
            </TouchableOpacity>
          )}
          {currentStep === 14 && (
            <TouchableOpacity style={styles.footerButton} onPress={() => setCurrentStep(1)}>
              <Text style={styles.buttonText}>Vamos começar</Text>
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

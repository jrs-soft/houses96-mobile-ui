import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Dimensions } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Colors from '../constants/colors';
import { HostingContext } from '../context/HostingContext';

const HostingScreenStep12 = () => {
  const { hostingData, setHostingData } = useContext(HostingContext); // Access context
  const [promotionDiscount, setPromotionDiscount] = useState('20%');
  const [weeklyDiscount, setWeeklyDiscount] = useState('10%');
  const [monthlyDiscount, setMonthlyDiscount] = useState('20%');
  const [isPromoChecked, setPromoChecked] = useState(false);
  const [isWeeklyChecked, setWeeklyChecked] = useState(false);
  const [isMonthlyChecked, setMonthlyChecked] = useState(false);

  const handlePromotionDiscount = (value) => {
    setPromotionDiscount(value);
    setHostingData({ ...hostingData, promotionDiscount: value});
  };

  const handlePromoChecked = (value) => {
    setPromoChecked(value);
    setHostingData({ ...hostingData, isPromoChecked: value});
  };

  const handleWeeklyDiscount = (value) => {
    setWeeklyDiscount(value);
    setHostingData({ ...hostingData, weeklyDiscount: value});
  };

  const handleWeeklyChecked = (value) => {
    setWeeklyChecked(value);
    setHostingData({ ...hostingData, isWeeklyChecked: value});
  };

  const handleMonthlyDiscount = (value) => {
    setMonthlyDiscount(value);
    setHostingData({ ...hostingData, monthlyDiscount: value});
  };

  const handleMonthlyChecked = (value) => {
    setMonthlyChecked(value);
    setHostingData({ ...hostingData, isMonthlyChecked: value});
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title Row */}
      <View style={styles.titleRow}>
        <Text style={styles.title}>Adicionar descontos</Text>
      </View>

      {/* Promo Discount Row */}
      <View style={styles.discountRow}>
        <TextInput
          style={styles.input}
          value={promotionDiscount}
          onChangeText={handlePromotionDiscount}
        />
        <Text style={styles.label}>Nova promoção de inclusão</Text>
        <CheckBox
          value={isPromoChecked}
          onValueChange={handlePromoChecked}
          onCheckColor={Colors.primary500}  // Custom check color
          onTintColor={Colors.primary500}   // Custom border color when checked
          tintColor={Colors.primary500}     // Custom border color when unchecked
        />
      </View>

      {/* Weekly Discount Row */}
      <View style={styles.discountRow}>
        <TextInput
          style={styles.input}
          value={weeklyDiscount}
          onChangeText={handleWeeklyDiscount}
        />
        <Text style={styles.label}>Desconto semanal</Text>
        <CheckBox
          value={isWeeklyChecked}
          onValueChange={handleWeeklyChecked}
          onCheckColor={Colors.primary500}  // Custom check color
          onTintColor={Colors.primary500}   // Custom border color when checked
          tintColor={Colors.primary500}     // Custom border color when unchecked
        />
      </View>

      {/* Monthly Discount Row */}
      <View style={styles.discountRow}>
        <TextInput
          style={styles.input}
          value={monthlyDiscount}
          onChangeText={handleMonthlyDiscount}
        />
        <Text style={styles.label}>Desconto mensal</Text>
        <CheckBox
          value={isMonthlyChecked}
          onValueChange={handleMonthlyChecked}
          onCheckColor={Colors.primary500}  // Custom check color
          onTintColor={Colors.primary500}   // Custom border color when checked
          tintColor={Colors.primary500}     // Custom border color when unchecked
        />
      </View>
    </ScrollView>
  );
};

const { width } = Dimensions.get('window'); // Get device screen width

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    width: '100%', // Ensure container spans the full width
  },
  titleRow: {
    width: '100%', // Ensure the title row spans the full width
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  discountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    width: width - 32, // Make sure the row takes up full screen width, minus padding
    borderWidth: 1, // Added border for clarity
    borderColor: '#ccc',
  },
  input: {
    width: '25%', // Set the width of the input to 25% of the row
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    textAlign: 'center',
    marginRight: 10,
  },
  label: {
    flex: 2,
    fontSize: 16,
    marginRight: 10,
  },
});

export default HostingScreenStep12;

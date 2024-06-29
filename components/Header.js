import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Ionicons for icons

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left side: User profile icon */}
      <TouchableOpacity style={styles.leftIconContainer}>
        <Ionicons name="person-circle-outline" size={24} color="#000" />
      </TouchableOpacity>
      
      {/* Right side icons: Search and Messages */}
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Ionicons name="mail-outline" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        backgroundColor: '#fff',
        width: '100%'
    },
    leftIconContainer: {
        paddingHorizontal: 2,
      },
    rightIconsContainer: {
        flexDirection: 'row'
    },
    iconContainer: {
        paddingLeft: 8,
    }
});

export default Header;

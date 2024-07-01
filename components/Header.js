import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      {/* Left side: User profile icon */}
      <TouchableOpacity style={styles.leftTextContainer}>
        <Text style={styles.title}>Houses96</Text>
      </TouchableOpacity>
      
      {/* Right side icons: Search and Messages */}
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
        <Feather name="message-circle" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Entypo name="dots-three-vertical" size={24} color="black" />
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
        width: '100%',
    },
    title: {
      fontWeight: 'bold',
      fontSize: 20,
    },
    leftTextContainer: {
      paddingHorizontal: 2,
    },
    rightIconsContainer: {
        flexDirection: 'row',
    },
    iconContainer: {
      marginLeft: 20,
      right: -6
    }
});

export default Header;

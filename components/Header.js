import React, { useContext, useState, useRef } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Popover from 'react-native-popover-view';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../store/auth-context';

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const touchableRef = useRef();
  const navigation = useNavigation();
  const authCtx = useContext(AuthContext);

  const togglePopover = () => {
    setIsVisible(!isVisible);
  };

  const navigateToProfile = () => {
    setIsVisible(false);
    navigation.navigate('Profile');
  };

  const navigateToSettings = () => {
    setIsVisible(false);
    navigation.navigate('Configurações');
  };

  const navigateToHosting = () => {
    setIsVisible(false);
    navigation.navigate('Hosting');
  };

  return (
    <View style={styles.container}>
      {/* Left side: User profile icon */}
      <TouchableOpacity style={styles.leftTextContainer}>
        <Text style={styles.title}>Houses96</Text>
      </TouchableOpacity>
      
      {/* Right side icons: Search, Messages, and Menu */}
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="search1" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <Feather name="message-circle" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          ref={touchableRef}
          onPress={togglePopover}
        >
          <Entypo name="dots-three-vertical" size={24} color="white" />
        </TouchableOpacity>
        <Popover
          isVisible={isVisible}
          from={touchableRef}
          onRequestClose={togglePopover}
        >
          <View style={styles.popoverContent}>
            <TouchableOpacity onPress={navigateToProfile} style={styles.menuItem}>
              <Text>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToHosting} style={styles.menuItem}>
              <Text>Hospedagem</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={navigateToSettings} style={styles.menuItem}>
              <Text>Configurações</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={authCtx.logout} style={styles.menuItem}>
              <Text>Logout</Text>
            </TouchableOpacity>
          </View>
        </Popover>
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
    width: '97%',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff'
  },
  leftTextContainer: {
    right: 3
  },
  rightIconsContainer: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 20,
    right: Platform.OS === 'ios' ? 9 : -4,
  },
  popoverContent: {
    width: 200, // Adjust the width for Android
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Header;

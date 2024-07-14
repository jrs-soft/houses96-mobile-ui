import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const HeaderDetail = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rightIconsContainer}>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="like2" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
          <AntDesign name="dislike2" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainerLast}>
          <AntDesign name="sharealt" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    width: '90%',
    paddingHorizontal: 10,
  },
  rightIconsContainer: {
    flexDirection: 'row',
    marginLeft: 'auto',
  },
  iconContainer: {
    marginLeft: 20,
  },
  iconContainerLast: {
    marginLeft: 7,
    right: -8
  },
});

export default HeaderDetail;

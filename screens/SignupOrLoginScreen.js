import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/colors';
import Constants from 'expo-constants';

export default function SignupOrLoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se ou realize Login</Text>
      
      <TouchableOpacity style={styles.button}>
        <Icon name="google" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Continue com Google</Text>
      </TouchableOpacity>
      
      <Text style={styles.label}>ou</Text>
      
      <TextInput style={styles.input} placeholder="Nome" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#888" />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#888" secureTextEntry={true} />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Criar conta</Text>
      </TouchableOpacity>
      
      <Text style={styles.label}>Já possui uma conta?  
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: Colors.primary500,
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row', // Add flexDirection: 'row' to align icon and text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    
    //marginLeft: 10, // Add margin to separate icon and text
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    color: '#888',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    borderColor: '#E8E8E8',
    padding: 10,
    marginBottom: 20,
    width: '100%',
    height: 50,
    backgroundColor: '#F6F6F6'
  },
  link: {
    color: Colors.primary500,
    textDecorationLine: 'underline',
    paddingLeft: 5
  },
  icon: {
    marginRight: 10, // Add margin to the right of the icon
  },
});

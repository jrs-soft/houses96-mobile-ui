import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupOrLoginScreen from './screens/SignupOrLoginScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupOrLogin">
        <Stack.Screen name="SignupOrLogin" component={SignupOrLoginScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Main" component={MainScreen} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};

export default App;

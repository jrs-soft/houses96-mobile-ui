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
        <Stack.Screen
          name="SignupOrLogin"
          component={SignupOrLoginScreen}
          options={{
            title: 'Realize Login ou Cadastre-se',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center'
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{
            title: 'Login',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center'
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="Main" 
          component={MainScreen} 
          options={{
            title: 'Houses96',
            headerTintColor: '#000',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign: 'center',
              alignSelf: 'center'
            },
            headerTitleAlign: 'center'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

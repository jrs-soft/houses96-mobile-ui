/*import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupOrLoginScreen from './screens/SignupOrLoginScreen';
import LoginScreen from './screens/LoginScreen';
import MainScreen from './screens/MainScreen';
import Header from './components/Header';
import HeaderDetail from './components/HeaderDetail';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import HostingScreen from './screens/HostingScreen';
import 'react-native-gesture-handler';


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
            headerTitleStyle: {borderWidth: 1},
            headerTitle: () => <Header/>,
            headerLeft: null
          }}
        />
        <Stack.Screen 
          name="Detail" 
          component={DetailScreen}
          options={{
            headerTitleStyle: {borderWidth: 1},
            headerTitle: () => <HeaderDetail/>
          }}
          />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Configurações" component={SettingsScreen} />
        <Stack.Screen name="Hosting" component={HostingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
*/
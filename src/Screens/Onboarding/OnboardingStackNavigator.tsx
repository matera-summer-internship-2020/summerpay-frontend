import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import Address from './Address';
import Document from './Document';
import MaritalStatus from './MaritalStatus';
import Finish from './Finish';
import Name from './Name';
import Password from './Password';
import Phone from './Phone';

import { OnboardingStackParamList } from './types';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => (
  <Stack.Navigator initialRouteName="Name">
    <Stack.Screen
      name="Name"
      component={Name}
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true
      }}
    />
    <Stack.Screen
      name="Document"
      component={Document}
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true
      }}
    />
    <Stack.Screen
      name="Phone"
      component={Phone}
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true
      }}
    />
    <Stack.Screen
      name="Address"
      component={Address}
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true,
      }}
    />
    <Stack.Screen name="MaritalStatus" component={MaritalStatus} 
      options={{
      headerTitle: 'Criar conta',
      headerStyle: {
        backgroundColor: '#002D80',
      },
      headerTintColor: '#FFF',
      headerHideShadow: true,
    }}/>
    <Stack.Screen
      name="Password"
      component={Password}
      options={{
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true
      }}
    />
    <Stack.Screen
      name="Finish"
      component={Finish}
      options={{
        headerHideBackButton: true,
        headerTitle: 'Criar conta',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true
      }}
    />
  </Stack.Navigator>
);

export default OnboardingNavigator;

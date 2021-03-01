import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ConfigurationNavigator from './Screens/Configuration/ConfigurationStackNavigator';
import Home from './Screens/Home';
import Login from './Screens/Login';
import OnboardingNavigator from './Screens/Onboarding/OnboardingStackNavigator';

import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => (
  <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Configuration" component={ConfigurationNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;

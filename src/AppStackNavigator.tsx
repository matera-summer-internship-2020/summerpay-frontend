import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Login from './Screens/Login';
import OnboardingNavigator from './Screens/Onboarding/OnboardingStackNavigator';

import { AppStackParamList } from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Onboarding" component={OnboardingNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

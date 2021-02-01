import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Name from './Name';
import Document from './Document';
import Phone from './Phone';

import { OnboardingStackParamList } from './types';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Name" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Name" component={Name} />
      <Stack.Screen name="Document" component={Document} />
      <Stack.Screen name="Phone" component={Phone} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;

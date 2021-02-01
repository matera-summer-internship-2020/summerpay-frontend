import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import Name from './Name';
import Document from './Document';
import Phone from './Phone';

import { OnboardingStackParamList } from './types';

const Stack = createNativeStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Name">
      <Stack.Screen
        name="Name"
        component={Name}
        options={{
          headerTitle: 'Nome',
          headerStyle: {
            backgroundColor: 'pink'
          },
          headerTintColor: '#FFF'
        }}
      />
      <Stack.Screen name="Document" component={Document} />
      <Stack.Screen name="Phone" component={Phone} />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;

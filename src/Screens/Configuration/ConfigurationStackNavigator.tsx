import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import ConfigurationScreen from './ConfigurationScreen';

import { ConfigurationStackParamList } from './types';

const Stack = createNativeStackNavigator<ConfigurationStackParamList>();

const ConfigurationNavigator = () => (
  <Stack.Navigator initialRouteName="ConfigurationScreen">
    <Stack.Screen
      name="ConfigurationScreen"
      component={ConfigurationScreen}
      options={{
        headerTitle: 'Configurações',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true
      }}
    />
  </Stack.Navigator>
);

export default ConfigurationNavigator;

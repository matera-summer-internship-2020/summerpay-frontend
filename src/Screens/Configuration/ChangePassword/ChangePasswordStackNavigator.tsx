import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';

import EnterOlderAndNewPwd from './EnterOlderAndNewPwd';
import FinishChangePwd from './FinishChangePwd';

import { ChangePasswordStackParamList } from './types';

const Stack = createNativeStackNavigator<ChangePasswordStackParamList>();

const ChangePasswordNavigator = () => (
  <Stack.Navigator initialRouteName="EnterOlderAndNewPwd">
    <Stack.Screen
      name="EnterOlderAndNewPwd"
      component={EnterOlderAndNewPwd}
      options={{
        headerTitle: 'Alterar senha',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true,
        headerHideBackButton: true
      }}
    />
    <Stack.Screen
      name="FinishChangePwd"
      component={FinishChangePwd}
      options={{
        headerTitle: 'Alterar senha',
        headerStyle: {
          backgroundColor: '#002D80'
        },
        headerTintColor: '#FFF',
        headerHideShadow: true,
        headerHideBackButton: true
      }}
    />
  </Stack.Navigator>
);

export default ChangePasswordNavigator;

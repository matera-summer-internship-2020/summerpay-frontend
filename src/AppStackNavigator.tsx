import React from 'react';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import Login from './Screens/Login';

import {AppStackParamList} from './types';

const Stack = createNativeStackNavigator<AppStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigator;

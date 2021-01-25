import {StackNavigationProp} from '@react-navigation/stack';

export type AppStackParamList = {
  Login: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<
  AppStackParamList,
  'Login'
>;

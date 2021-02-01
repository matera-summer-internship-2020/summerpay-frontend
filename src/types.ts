import { StackNavigationProp } from '@react-navigation/stack';

export type AppStackParamList = {
  Login: undefined;
  Onboarding: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Login'>;

export type ValueType = string | number;

export type SelectionData = {
  label: string;
  value: ValueType;
};

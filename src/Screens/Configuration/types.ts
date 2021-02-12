import { StackNavigationProp } from '@react-navigation/stack';

export type ConfigurationStackParamList = {
  ConfigurationScreen: undefined;
  ChangeData: undefined;
  ChangePassword: undefined;
  DeleteAccount: undefined;
};

export type ConfigurationScreenNavigationProp = StackNavigationProp<ConfigurationStackParamList, 'ConfigurationScreen'>;

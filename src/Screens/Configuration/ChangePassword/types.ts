import { StackNavigationProp } from '@react-navigation/stack';

export type ChangePasswordStackParamList = {
  EnterOlderAndNewPwd: undefined;
  FinishChangePwd: undefined;
};

export type ConfigurationScreenNavigationProp = StackNavigationProp<
  ChangePasswordStackParamList,
  'EnterOlderAndNewPwd'
>;

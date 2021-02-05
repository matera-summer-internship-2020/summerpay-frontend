import { StackNavigationProp } from '@react-navigation/stack';

export type OnboardingStackParamList = {
  Document: undefined;
  Name: undefined;
  Phone: undefined;
  Address: undefined;
};

export type OnboardingScreenNavigationProp = StackNavigationProp<OnboardingStackParamList, 'Document'>;

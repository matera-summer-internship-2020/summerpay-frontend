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
}

export type Telephone = {
  "telephoneType": {
  "telephoneTypeId": number
  },
  "number": string,
  "ddd": string 
}

export type identityDocumentEntity = {
  identityDocumentTypeEntity: {
    identityDocumentTypeId: number
  },
  identityDocument: string
}

export type AddressEntity = {
  streetName: string;
  state: ValueType;
  zipCode: string;
  complement: string;
  number: number;
  city: string;
};

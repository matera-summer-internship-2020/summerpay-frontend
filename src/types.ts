import { StackNavigationProp } from '@react-navigation/stack';

export type AppStackParamList = {
  Login: undefined;
  Onboarding: undefined;
  Home: undefined;
  Configuration: undefined;
};

export type LoginScreenNavigationProp = StackNavigationProp<AppStackParamList, 'Login'>;

export type ValueType = string | number;

export type SelectionData = {
  label: string;
  value: ValueType;
};

export type Telephone = {
  telephoneType: {
    telephoneTypeId: number;
  };
  number: string;
  ddd: string;
  telephoneId?: string;
};

export type MaritalStatusEntity = {
  maritalStatus: string;
  maritalStatusId: number;
};

export type identityDocumentEntity = {
  identityDocumentTypeEntity: {
    identityDocumentTypeId: number;
  };
  identityDocument: string;
  identityDocumentId?: string;
};

export type AddressEntity = {
  addressId?: string;
  streetName: string;
  state: ValueType;
  zipCode: string;
  complement: string;
  number: number;
  city: string;
};

export type Client = {
  addressList: AddressEntity[];
  clientId: string;
  identityDocumentEntityList: identityDocumentEntity[];
  maritalStatusEntity: MaritalStatusEntity;
  name: string;
  telephoneList: Telephone[];
};

export type Account = {
  accountId: string;
  accountNumber: string;
  agency: string;
  balance: number;
};

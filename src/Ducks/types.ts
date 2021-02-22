import { Telephone, identityDocumentEntity, MaritalStatusEntity, AddressEntity, Client, Account } from '../types';

export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
  phone: Telephone;
  identityDocumentEntityList: identityDocumentEntity[];
  maritalStatus: MaritalStatusEntity;
  address: AddressEntity;
  password: string;
};

export type clientReducerType = {
  clientData: Client;
  accountData: Account;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
  client: clientReducerType;
};

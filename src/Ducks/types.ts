import { Telephone } from '../types'
import { identityDocumentEntity } from '../types'

export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
  phone: Telephone;
  identityDocumentEntityList: identityDocumentEntity[];
};

export type loginReducerType = {
  clientCPF: string;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
  login: loginReducerType;
};

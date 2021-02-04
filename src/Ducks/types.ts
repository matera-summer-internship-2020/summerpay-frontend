import { Telephone } from '../types'

export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
  phone: Telephone;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
};

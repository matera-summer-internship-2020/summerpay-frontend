import { TelephoneType } from '../types'

export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
  phone: TelephoneType;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
};

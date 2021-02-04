export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
  phone: string;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
};

export type appStatusReducerType = {
  appState: string;
  stackState: string;
};

export type onboardingReducerType = {
  name: string;
};

export type loginReducerType = {
  clientCPF: string;
};

export type root = {
  appStatus: appStatusReducerType;
  onboarding: onboardingReducerType;
  login: loginReducerType;
};

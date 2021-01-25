export as namespace reducers;

export type appStatusReducer = {
  appState: string;
  stackState: string;
};

export type root = {
  appStatus: appStatusReducer;
};

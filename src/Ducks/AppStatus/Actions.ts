import { AppStatusActionTypes } from './types';

export const changeAppStateAction = (payload: string) => ({
  payload,
  type: AppStatusActionTypes.CHANGE_APP_STATE
});

export const changeStackStateAction = (payload: string) => ({
  payload,
  type: AppStatusActionTypes.CHANGE_STACK_STATE
});

import { OnboardingActionTypes } from './types';

export const changeNameAction = (payload: string) => ({
  payload,
  type: OnboardingActionTypes.CHANGE_NAME
});

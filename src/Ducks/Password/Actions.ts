import { PasswordActionTypes } from './types';

export const passwordValidationAction = (payload: string) => ({
  payload,
  type: PasswordActionTypes.VALIDATE_PASSWORD
});

export const passwordChangeAction = (payload: string) => ({
  payload,
  type: PasswordActionTypes.PASSWORD_CHANGE
});

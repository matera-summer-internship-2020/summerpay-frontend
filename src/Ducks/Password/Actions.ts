import { PasswordActionTypes } from './types';

export const passwordValidationAction = (payload: string) => ({
  payload,
  type: PasswordActionTypes.VALIDATE_PASSWORD
});

export const changePasswordAction = (payload: string) => ({
  payload,
  type: PasswordActionTypes.CHANGE_PASSWORD
});

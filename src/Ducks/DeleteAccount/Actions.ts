import { DeleteAccountActionTypes } from './types';

export const deleteAccountAction = (payload: { password: string }) => ({
  payload,
  type: DeleteAccountActionTypes.DELETE_ACCOUNT
});

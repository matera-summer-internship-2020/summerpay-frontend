import { DeleteAccountActionTypes } from './types';

export const deleteAccountAction = (payload: string) => ({
  payload,
  type: DeleteAccountActionTypes.DELETE_ACCOUNT
});

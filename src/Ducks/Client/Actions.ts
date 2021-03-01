import { Client, Account } from '../../types';

import { ClientActionTypes } from './types';

export const saveClientIdAction = (payload: { clientData: Client; accountData: Account }) => ({
  payload,
  type: ClientActionTypes.SAVE_CLIENT_INFO
});

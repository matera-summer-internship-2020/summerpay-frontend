import { ClientActionTypes } from './types';

import { Client, Account } from '../../types';

export const saveClientIdAction = (payload: { clientData: Client; accountData: Account }) => ({
  payload,
  type: ClientActionTypes.SAVE_CLIENT_INFO
});

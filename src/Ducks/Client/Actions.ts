import { ClientActionTypes } from './types';

import { Client } from '../../types';

export const saveClientIdAction = (payload: Client) => ({
  payload,
  type: ClientActionTypes.SAVE_CLIENT
});

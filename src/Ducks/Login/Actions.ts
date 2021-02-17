import { LoginActionTypes } from './types';

export const loginAction = (payload: { clientCPF: string; clientPassword: string }) => ({
  payload,
  type: LoginActionTypes.LOGIN
});

export const saveClientIdAction = (payload: { clientId: string }) => ({
  payload,
  type: LoginActionTypes.SAVE_CLIENTID
});

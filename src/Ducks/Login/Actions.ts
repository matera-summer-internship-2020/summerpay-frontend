import { LoginActionTypes } from './types';

export const loginAction = (payload: { clientCPF: string; clientPassword: string }) => ({
  payload,
  type: LoginActionTypes.LOGIN
});

export enum LoginActionTypes {
  LOGIN = 'LOGIN',
  CHANGE_CLIENT_CPF = 'CHANGE_CLIENT_CPF' // TODO: remover Action Type não utilizada
}

export type ErrorResponse = {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  path: string;
};

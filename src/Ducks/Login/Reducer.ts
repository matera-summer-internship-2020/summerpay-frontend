import { loginReducerType } from '../types';

import { LoginActionTypes } from './types';

export const initialState: loginReducerType = {
  clientCPF: ''
};

export const loginReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case LoginActionTypes.CHANGE_CLIENT_CPF:
      return {
        ...state,
        clientCPF: payload
      };

    default:
      return state;
  }
};

export default loginReducer;

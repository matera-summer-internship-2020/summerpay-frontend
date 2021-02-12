import { loginReducerType } from '../types';

import { LoginActionTypes } from './types';

export const initialState: loginReducerType = {
  clientId: ''
};

export const loginReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case LoginActionTypes.SAVE_CLIENTID:
      return {
        ...state,
        clientId: payload
      };

    default:
      return state;
  }
};

export default loginReducer;

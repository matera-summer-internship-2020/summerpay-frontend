import { passwordReducerType } from '../types';

import { PasswordActionTypes } from './types';

export const initialState: passwordReducerType = {
  passwordValidated: false
};

export const passwordReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case PasswordActionTypes.CHANGE_VALIDATED_PASSWORD:
      return {
        ...state,
        passwordValidated: payload
      };

    default:
      return state;
  }
};

export default passwordReducer;

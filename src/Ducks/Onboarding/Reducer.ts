import { OnboardingActionTypes } from './types';
import { onboardingReducerType } from '../types';

export const initialState: onboardingReducerType = {
  name: ''
};

export const onboardingReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case OnboardingActionTypes.CHANGE_NAME:
      return {
        ...state,
        name: payload
      };

    default:
      return state;
  }
};

export default onboardingReducer;

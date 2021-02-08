import { onboardingReducerType } from '../types';

import { OnboardingActionTypes } from './types';

export const initialState: onboardingReducerType = {
  name: '',
  phone: {
    telephoneType: {
      telephoneTypeId: 0
    },
    number: '',
    ddd: ''
  },
  identityDocumentEntityList: [],
  address: {
    streetName: '',
    state: '',
    zipCode: '',
    complement: '',
    number: 0,
    city: ''
  },
  password: ''
};

export const onboardingReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case OnboardingActionTypes.CHANGE_NAME:
      return {
        ...state,
        name: payload
      };

    case OnboardingActionTypes.CHANGE_PHONE:
      return {
        ...state,
        phone: payload
      };

    case OnboardingActionTypes.CHANGE_IDENTITY_DOCUMENT_ENTITY_LIST:
      return {
        ...state,
        identityDocumentEntityList: payload
      };

    case OnboardingActionTypes.CHANGE_ADDRESS:
      return {
        ...state,
        address: payload
      };

    case OnboardingActionTypes.CHANGE_PASSWORD:
      return {
        ...state,
        password: payload
      };

    default:
      return state;
  }
};

export default onboardingReducer;

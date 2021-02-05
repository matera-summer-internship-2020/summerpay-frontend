import { OnboardingActionTypes } from './types';
import { onboardingReducerType } from '../types';

export const initialState: onboardingReducerType = {
  name: '',
  phone: {
    telephoneType: {
      telephoneTypeId: 0
    },
    number: '',
    ddd: '',
  },
  identityDocumentEntityList: [],
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
      return{
        ...state,
        phone: payload
      }
      
    case OnboardingActionTypes.CHANGE_IDENTITY_DOCUMENT_ENTITY_LIST:
      return {
        ...state,
        identityDocumentEntityList: payload
      };

    default:
      return state;
  }
};

export default onboardingReducer;

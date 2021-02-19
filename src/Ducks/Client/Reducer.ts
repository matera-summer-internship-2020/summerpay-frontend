import { clientReducerType } from '../types';

import { ClientActionTypes } from './types';

export const initialState: clientReducerType = {
  addressList: [],
  clientId: '',
  identityDocumentEntityList: [],
  maritalStatusEntity: {
    maritalStatusId: 0,
    maritalStatus: ''
  },
  name: '',
  telephoneList: []
};

export const clientReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case ClientActionTypes.SAVE_CLIENT:
      return {
        addressList: payload.addressList,
        clientId: payload.clientId,
        identityDocumentEntityList: payload.identityDocumentEntityList,
        maritalStatusEntity: payload.maritalStatusEntity,
        name: payload.name,
        telephoneList: payload.telephoneList
      };

    default:
      return state;
  }
};

export default clientReducer;

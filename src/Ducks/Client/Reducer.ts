import { clientReducerType } from '../types';

import { ClientActionTypes } from './types';

export const initialState: clientReducerType = {
  clientData: {
    addressList: [],
    clientId: '',
    identityDocumentEntityList: [],
    maritalStatusEntity: {
      maritalStatusId: 0,
      maritalStatus: ''
    },
    name: '',
    telephoneList: []
  },
  accountData: {
    accountId: '',
    accountNumber: '',
    agency: '',
    balance: 0
  }
};

export const clientReducer = (state = initialState, action: any) => {
  const { payload } = action;

  switch (action.type) {
    case ClientActionTypes.SAVE_CLIENT_INFO:
      return {
        clientData: {
          addressList: payload.clientData.addressList,
          clientId: payload.clientData.clientId,
          identityDocumentEntityList: payload.clientData.identityDocumentEntityList,
          maritalStatusEntity: payload.clientData.maritalStatusEntity,
          name: payload.clientData.name,
          telephoneList: payload.clientData.telephoneList
        },
        accountData: {
          accountId: payload.accountData.accountId,
          accountNumber: payload.accountData.accountNumber,
          agency: payload.accountData.agency,
          balance: payload.accountData.balance
        }
      };
    default:
      return state;
  }
};

export default clientReducer;

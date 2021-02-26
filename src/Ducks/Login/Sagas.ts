import { Toast } from 'native-base';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { storeData } from '../../Services/Storage';
import { AppStackParamList } from '../../types';

import { Client, Account } from '../../types';
import { ClientActionTypes } from '../Client/types';

import { LoginActionTypes } from './types';

export function* login(action: any) {
  const { clientCPF, clientPassword } = action.payload;

  try {
    yield call(api().post, '/authentication/login', {
      clientCPF,
      clientPassword
    });
    const client = yield call(api().get, `/clients/transfer/clientReceiver/${clientCPF}`);
    const clientData: Client = client.data;
    const account = yield call(api('8082').get, `/clients/${client.data.clientId}/accounts`);
    const accountData: Account = account.data[0];
    yield call(saveAndStoreClientData, clientData, accountData);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export function* saveAndStoreClientData(clientData: Client, accountData: Account) {
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  yield put({
    payload: { clientData, accountData },
    type: ClientActionTypes.SAVE_CLIENT_INFO
  });
  void storeData('CPF', clientData.identityDocumentEntityList[0].identityDocument);
  void storeData('NAME', clientData.name);
  void storeData('AGENCY', accountData.agency);
  void storeData('ACCOUNT', accountData.accountNumber);
  centralNavigationService.navigate('Home');
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);

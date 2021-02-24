import { Toast } from 'native-base';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import { LoginActionTypes } from './types';

import { Client, Account } from '../../types';
import { ClientActionTypes } from '../Client/types';

import { storeData } from '../../Services/Storage';

export function* login(action: any) {
  const { clientCPF, clientPassword } = action.payload;
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  try {
    yield call(api().post, '/authentication/login', {
      clientCPF,
      clientPassword
    });
    const client = yield call(api().get, `/clients/transfer/clientReceiver/${clientCPF}`);
    const clientData: Client = client.data;
    const account = yield call(api('8082').get, `/clients/${client.data.clientId}/accounts`);
    const accountData: Account = account.data[0];
    yield put({
      payload: { clientData, accountData },
      type: ClientActionTypes.SAVE_CLIENT_INFO
    });
    storeData('CPF', clientData.identityDocumentEntityList[0].identityDocument);
    storeData('NAME', clientData.name);
    storeData('AGENCY', accountData.agency);
    storeData('ACCOUNT', accountData.accountNumber);
    centralNavigationService.navigate('Home');
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);

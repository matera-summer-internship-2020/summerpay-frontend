import { Toast } from 'native-base';
import { all, takeLatest, call } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import { DeleteAccountActionTypes } from './types';

export function* deleteAccount(action: any) {
  const clientId: string = action.payload;
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  try {
    const client = yield call(api().get, `/clients/${clientId}`);
    console.log(client);
    // centralNavigationService.navigate('Login');
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export const deleteAccountSagas = all([takeLatest(DeleteAccountActionTypes.DELETE_ACCOUNT, deleteAccount)]);

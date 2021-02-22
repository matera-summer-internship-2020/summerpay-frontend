import { Toast } from 'native-base';
import { all, takeLatest, call, select } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';
import { root } from '../types';

import { DeleteAccountActionTypes } from './types';

export const getClientId = (state: root): string => state.login.clientId;

export function* validatePassword(action: any) {
  const clientId: string = yield select(getClientId);
  const password: string = action.payload;

  try {
    yield call(api().post, `authentication/${clientId}/validate-password`, password);
    yield call(deleteAccount, clientId);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export function* deleteAccount(clientId: string) {
  try {
    const accountPost = yield call(api('8082').get, `/clients/${clientId}/accounts`);
    const accountId: string = accountPost.data[0].accountId;
    yield call(api('8082').delete, `/clients/${clientId}/accounts/${accountId}`);
    yield call(deleteAddress, clientId);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao deletar a conta'
    });
  }
}

export function* deleteAddress(clientId: string) {
  try {
    const addressPost = yield call(api().get, `/clients/${clientId}/addresses`);
    const addressId: string = addressPost.data[0].addressId;
    yield call(api().delete, `/addresses/${addressId}`);
    yield call(deleteTelephone, clientId);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao deletar endereço'
    });
  }
}

export function* deleteTelephone(clientId: string) {
  try {
    const telephonePost = yield call(api().get, `/clients/${clientId}/telephones`);
    const telephoneId: string = telephonePost.data[0].telephoneId;
    yield call(api().delete, `/clients/${clientId}/telephones/${telephoneId}`);
    yield call(deleteClient, clientId);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao deletar telefone'
    });
  }
}

export function* deleteClient(clientId: string) {
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  try {
    yield call(api().delete, `/clients/${clientId}`);
    centralNavigationService.navigate('Login');
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao deletar cliente'
    });
  }
}

export const deleteAccountSagas = all([takeLatest(DeleteAccountActionTypes.DELETE_ACCOUNT, validatePassword)]);

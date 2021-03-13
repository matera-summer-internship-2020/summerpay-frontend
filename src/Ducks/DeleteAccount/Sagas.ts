import { Toast } from 'native-base';
import { all, takeLatest, call, select } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';
import { root } from '../types';

import { DeleteAccountActionTypes } from './types';

export const getClientId = (state: root): string => state.client.clientData.clientId;
export const getAccountId = (state: root): string => state.client.accountData.accountId;
export const getAddressId = (state: root): string | undefined => state.client.clientData.addressList[0].addressId;
export const getTelephoneId = (state: root): string | undefined => state.client.clientData.telephoneList[0].telephoneId;

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
  const accountId: string = yield select(getAccountId);
  
  try {
    yield call(api('8082').delete, `/clients/${clientId}/accounts/${accountId}`);
    yield call(deleteAddress, clientId);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao deletar a conta'
    });
  }
}

export function* deleteAddress(clientId: string) {
  const addressId: string = yield select(getAddressId);
  
  try {
    yield call(api().delete, `/addresses/${addressId}`);
    yield call(deleteTelephone, clientId);
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao deletar endereço'
    });
  }
}

export function* deleteTelephone(clientId: string) {
  const telephoneId: string = yield select(getTelephoneId);
  
  try {
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

import { Toast } from 'native-base';
import { all, takeLatest, call } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import { LoginActionTypes } from './types';

export function* login(action: any) {
  const { clientCPF, clientPassword } = action.payload;
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  try {
    yield call(api().post, '/authentication/login', {
      clientCPF,
      clientPassword
    });
    // centralNavigationService.navigate('Home');
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);

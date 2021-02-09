import { Toast } from 'native-base';
import { all, takeLatest, call } from 'redux-saga/effects';

import api from '../../Services/Api';

import { CentralNavigationService } from '../../Services/Navigation';
import { AppStackParamList } from '../../types';

import { LoginActionTypes, ErrorResponse } from './types';

export function* login(action: any) {
  // TODO: recuperar usuário (do Reducer) e senha (da Action)
  const { clientCPF, clientPassword } = action.payload;
  const centralNavigationService = CentralNavigationService<AppStackParamList>();

  try {
    const response: null | ErrorResponse = yield call(api.post, 'http://localhost:8080/authentication/login', {
      clientCPF,
      clientPassword
    });

    if (response?.error) {
      // TODO: remover console.log()
      console.log('Erro');
      Toast.show({
        text: response.message
      });
    } else {
      // TODO: remover console.log()
      console.log('Sucesso');
      // centralNavigationService.navigate('Home');
    }
  } catch (error) {
    Toast.show({
      text: error?.message ?? 'Erro genérico!'
    });
  }
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);

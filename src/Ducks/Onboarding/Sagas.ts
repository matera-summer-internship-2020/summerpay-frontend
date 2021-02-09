import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '../../Services/Api';

import { OnboardingActionTypes } from './types';

/*
* Exemplo de uso da "Api":
1) GET: yield call(api.get, '/profile');
2) POST: yield call(api.post, '/login', objetoComUsuarioSenha);
*/

export function* createAccount(action: any) {
  // TODO: recuperar dados de cadastro do Reducer

  try {
    // Tratar resposta da API
  } catch (error) {
    // TODO: Tratar erro genério não dependente da API
  }
}

export const onboardingSagas = all([takeLatest(OnboardingActionTypes.CREATE_ACCOUNT, createAccount)]);

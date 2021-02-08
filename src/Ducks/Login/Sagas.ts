import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import api from '../../Services/Api';

import { LoginActionTypes } from './types';

/*
* Exemplo de uso da "Api":
1) GET: yield call(api.get, '/profile');
2) POST: yield call(api.post, '/login', objetoComUsuarioSenha);
*/

export function* login(action: any) {
  // TODO: recuperar usuário (do Reducer) e senha (da Action)

  try {
    // Tratar resposta da API
  } catch (error) {
    // TODO: Tratar erro genério não dependente da API
  }
}

export const loginSagas = all([takeLatest(LoginActionTypes.LOGIN, login)]);

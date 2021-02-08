import { all, takeLatest, call, put, select } from 'redux-saga/effects';

import { OnboardingActionTypes } from './types';

export function* createAccount(action: any) {
  // TODO: recuperar dados de cadastro do Reducer

  try {
    // Tratar resposta da API
  } catch (error) {
    // TODO: Tratar erro genério não dependente da API
  }
}

export const onboardingSagas = all([takeLatest(OnboardingActionTypes.CREATE_ACCOUNT, createAccount)]);

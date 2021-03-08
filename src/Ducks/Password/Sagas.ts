import { Toast } from 'native-base';
import { all, takeLatest, call, select, put } from 'redux-saga/effects';

import { ChangePasswordStackParamList } from '../../Screens/Configuration/ChangePassword/types';

import api from '../../Services/Api';
import { CentralNavigationService } from '../../Services/Navigation';
import { root } from '../types';

import { PasswordActionTypes } from './types';

export const getClientId = (state: root): string => state.client.clientData.clientId;

export function* validatePassword(action: any) {
  const password = action.payload;
  const clientId: string = yield select(getClientId);

  try {
    yield call(api().post, `/authentication/${clientId}/validate-password`, {
      password
    });
    yield put({ payload: true, type: PasswordActionTypes.CHANGE_VALIDATED_PASSWORD });
  } catch (error) {
    yield put({ payload: false, type: PasswordActionTypes.CHANGE_VALIDATED_PASSWORD });
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export function* changePassword(action: any) {
  const password = action.payload;
  const clientId: string = yield select(getClientId);
  const changePasswordNavigationService = CentralNavigationService<ChangePasswordStackParamList>();

  try {
    yield call(api().patch, `/authentication/${clientId}/change-password`, {
      password
    });
    yield put({ payload: false, type: PasswordActionTypes.CHANGE_VALIDATED_PASSWORD });
    changePasswordNavigationService.navigate('FinishChangePwd');
  } catch (error) {
    yield put({ payload: false, type: PasswordActionTypes.CHANGE_VALIDATED_PASSWORD });
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro genérico!'
    });
  }
}

export const passwordSagas = all([
  takeLatest(PasswordActionTypes.VALIDATE_PASSWORD, validatePassword),
  takeLatest(PasswordActionTypes.CHANGE_PASSWORD, changePassword)
]);

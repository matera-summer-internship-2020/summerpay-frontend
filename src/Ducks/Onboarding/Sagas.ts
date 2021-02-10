import { Toast } from 'native-base';
import { all, takeLatest, call, select } from 'redux-saga/effects';

import { OnboardingStackParamList } from '../../Screens/Onboarding/types';

import api from '../../Services/Api';
import { CentralNavigationService } from '../../Services/Navigation';
import { AddressEntity, identityDocumentEntity, MaritalStatusEntity, Telephone } from '../../types';

import { OnboardingActionTypes } from './types';

export const getName = (state: any): string => state.onboarding.name;
export const getIdentityDocumentList = (state: any): identityDocumentEntity[] =>
  state.onboarding.identityDocumentEntityList;
export const getPhone = (state: any): Telephone => state.onboarding.phone;
export const getMaritalStatus = (state: any): MaritalStatusEntity => state.onboarding.maritalStatus;
export const getAddress = (state: any): AddressEntity => state.onboarding.address;
export const getPassword = (state: any): string => state.onboarding.password;

export function* createClient(action: any) {
  const name: string = yield select(getName);
  const maritalStatus: MaritalStatusEntity = yield select(getMaritalStatus);
  const document: identityDocumentEntity[] = yield select(getIdentityDocumentList);
  const password: string = yield select(getPassword);

  const clientBody = {
    name: name,
    maritalStatusEntity: {
      maritalStatusId: maritalStatus.maritalStatusId
    },
    identityDocumentEntityList: document,
    password: password
  };

  try {
    const response = yield call(api.post, 'http://10.0.2.2:8080/clients', clientBody);
    yield call(() => createAddress(response.data.clientId));
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao cadastrar cliente!'
    });
  }
}

export function* createAddress(clientId: string) {
  const address: AddressEntity = yield select(getAddress);

  const addressBody = {
    streetName: address.streetName,
    district: '',
    state: address.state,
    zipCode: address.zipCode,
    complement: address.complement,
    number: address.number,
    city: address.city
  };

  try {
    yield call(api.post, `http://10.0.2.2:8080/clients/${clientId}/addresses`, addressBody);
    yield call(() => createTelephone(clientId));
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao cadastrar endereço!'
    });
  }
}

export function* createTelephone(clientId: string) {
  const phone: Telephone = yield select(getPhone);

  const telephoneBody = {
    telephoneType: {
      telephoneTypeId: phone.telephoneType.telephoneTypeId
    },
    number: phone.number,
    ddd: phone.ddd
  };

  try {
    yield call(api.post, `http://10.0.2.2:8080/clients/${clientId}/telephones`, telephoneBody);
    yield call(() => createAccount(clientId));
  } catch (error) {
    Toast.show({
      text: error?.response?.data?.message ?? 'Erro ao cadastrar celular!'
    });
  }
}

export function* createAccount(clientId: string) {
  const centralNavigationService = CentralNavigationService<OnboardingStackParamList>();

  try {
    const accountBody = {
      accountType: {
        accountTypeId: 1
      },
      agency: '000-1',
      accountNumber: String(Math.floor(Math.random() * 89999) + 10000) + '-1',
      balance: Math.floor(Math.random() * 1000) + 1
    };

    yield call(api.post, `http://10.0.2.2:8082/clients/${clientId}/accounts`, accountBody);
    centralNavigationService.navigate('Finish');
  } catch (error) {
    Toast.show({
      text: 'Erro ao criar conta!'
    });
  }
}

export const onboardingSagas = all([takeLatest(OnboardingActionTypes.CREATE_ACCOUNT, createClient)]);

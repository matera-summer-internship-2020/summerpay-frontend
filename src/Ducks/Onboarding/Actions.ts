import { Telephone } from '../../types';
import { MaritalStatusEntity } from '../../types';
import { identityDocumentEntity } from '../../types';
import { OnboardingActionTypes } from './types';
import { AddressEntity } from '../../types';

export const changeNameAction = (payload: string) => ({
  payload,
  type: OnboardingActionTypes.CHANGE_NAME
});

export const changePhoneAction = (
  payload: Telephone) => ({
    payload,
    type: OnboardingActionTypes.CHANGE_PHONE
});

export const changeIdentityDocumentEntityListAction = (
  payload: identityDocumentEntity[]) => ({
    payload,
    type: OnboardingActionTypes.CHANGE_IDENTITY_DOCUMENT_ENTITY_LIST

  });

export const changeMaritalStatusAction = (
  payload: MaritalStatusEntity) => ({
    payload,
    type: OnboardingActionTypes.CHANGE_MARITAL_STATUS
  });



export const changeAddressAction = (payload: AddressEntity) => ({
  payload,
  type: OnboardingActionTypes.CHANGE_ADDRESS
});


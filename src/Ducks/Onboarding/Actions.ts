import { Telephone } from '../../types';
import { MaritalStatus } from '../../types';
import { identityDocumentEntity } from '../../types';
import { OnboardingActionTypes } from './types';

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
  payload: MaritalStatus) => ({
    payload,
    type: OnboardingActionTypes.CHANGE_MARITAL_STATUS
  });


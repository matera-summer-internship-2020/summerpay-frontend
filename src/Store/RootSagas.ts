import { all } from 'redux-saga/effects';

import { deleteAccountSagas } from '../Ducks/DeleteAccount/Sagas';
import { loginSagas } from '../Ducks/Login/Sagas';
import { onboardingSagas } from '../Ducks/Onboarding/Sagas';

export default function* rootSaga() {
  yield all([loginSagas, onboardingSagas, deleteAccountSagas]);
}

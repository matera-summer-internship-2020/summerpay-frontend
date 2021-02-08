import { all } from 'redux-saga/effects';

import { loginSagas } from '../Ducks/Login/Sagas';
import { onboardingSagas } from '../Ducks/Onboarding/Sagas';

export default function* rootSaga() {
  yield all([loginSagas, onboardingSagas]);
}

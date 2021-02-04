import { combineReducers } from 'redux';
import { appStatusReducer } from '../Ducks/AppStatus/Reducer';
import { onboardingReducer } from '../Ducks/Onboarding/Reducer';
import { loginReducer } from '../Ducks/Login/Reducer';

const appReducer = combineReducers({
  appStatus: appStatusReducer,
  onboarding: onboardingReducer,
  login: loginReducer
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;

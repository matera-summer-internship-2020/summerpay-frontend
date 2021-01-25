import {combineReducers} from 'redux';
import {appStatusReducer} from '../Ducks/AppStatus/Reducer';

const appReducer = combineReducers({
  appStatus: appStatusReducer
});

const rootReducer = (state: any, action: any) => {
  return appReducer(state, action);
};

export default rootReducer;

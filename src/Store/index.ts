import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './RootReducer';
import rootSaga from './RootSagas';

const create = (): any => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
  const middleWare: any = applyMiddleware(...middlewares);
  const compose = composeWithDevTools(middleWare);

  const storeCreator = createStore(rootReducer, compose as any);

  sagaMiddleware.run(rootSaga);

  return storeCreator;
};

const Store: any = create();

export default Store;

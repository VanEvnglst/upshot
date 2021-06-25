import {applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {persistReducer, persistStore} from 'redux-persist';

import persistConfig from '../config/redux-persist-config';

export default (mainReducer, rootSaga) => {
  const middleware = [];
  const enhancers = [];

  const sagaMiddleware = createSagaMiddleware({
    //onError: ErrorUtils.getGlobalHandler(),
  });

  // const networkMiddleware = createNetworkMiddleware();

  // middleware.push(networkMiddleware);
  middleware.push(sagaMiddleware);
  enhancers.push(applyMiddleware(...middleware));

  // Persist keys in local and secure storage
  const rootReducer = persistReducer(persistConfig, mainReducer);

  let store = null;
  if (window.__REDUX_DEVTOOLS_EXTENSION__) {
    // add redux devtools extension if present
    store = createStore(
      rootReducer,
      compose(...enhancers, window.__REDUX_DEVTOOLS_EXTENSION__()),
    );
  } else {
    store = createStore(rootReducer, compose(...enhancers));
  }

  // const { connectionChange } = offlineActionCreators;
  const persistor = persistStore(store, null, () => {
    // Detect initial connetion after rehydration
    // checkInternetConnection().then(isConnected => {
    // store.dispatch(connectionChange(isConnected));
    // });
  });

  sagaMiddleware.run(rootSaga);

  return {store, persistor};
};

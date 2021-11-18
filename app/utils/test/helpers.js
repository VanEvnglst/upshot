import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { render } from '@testing-library/react-native';
import { persistReducer } from 'redux-persist';

import rootSaga from 'app/sagas';
import { mainReducer } from 'app/redux';
import persistConfig from 'app/config/reduxPersistConfig';
import { upshotAPI } from 'app/config/apiConfig';


export const renderPage = (ui, initialState) => {
  const middleware = [];
  const enhancers = [];
  const sagaMiddleware = createSagaMiddleware();
  middleware.push(sagaMiddleware);
  const persistedReducer = persistReducer(persistConfig, mainReducer);
  const mockStore = createStore(
    persistedReducer,
    initialState,
    compose(...enhancers)
  );

  sagaMiddleware.run(rootSaga);

  const pageContainer = <Provider store={mockStore}>{ui}</Provider>;
  const page = render(pageContainer);

  const refresh = () => page.rerender(pageContainer);
  return { page, refresh, mockStore };
};

export const getEndpoint = (endpoint) => {
  let url = '';

  url = `${upshotAPI}${endpoint}`;

  return url;
};

export const serverStatus = {
  SERVER_ERROR: 500,
  OK: 200,
  NOT_FOUND: 404,
  GONE: 401, 
};
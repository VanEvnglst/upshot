import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import { reducer as authentication } from './authentication-redux';
import rootSaga from '../sagas';

import configureStore from './create-store';

export const mainReducer = combineReducers({
  network,
  authentication,
});

export default () => {
  const retainKeys = [];
  const rootReducer = (state, action) => {
    return mainReducer(state, action);
  };
  return configureStore(rootReducer, rootSaga);
};

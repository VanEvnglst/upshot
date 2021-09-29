import { combineReducers } from 'redux';
import { reducer as network } from 'react-native-offline';
import { reducer as authentication } from './authenticationRedux';
import { reducer as feedback } from './feedbackRedux';
import { userReducers } from './userRedux';
import rootSaga from '../sagas';

import configureStore from './createStore';

export const mainReducer = combineReducers({
  network,
  authentication,
  feedback,
  user: userReducers,
});

export default () => {
  const retainKeys = ['network'];
  const LOGOUT_USER = 'LOGOUT_USER';
  const rootReducer = (state, action) => {
    if (action.type === LOGOUT_USER) {
      const newState = Object.assign({}, state);
      // Delete other keys when logging out
      Object.keys(newState).forEach(key => {
        if (!retainKeys.includes(key)) {
          delete newState[key];
        }
      });
      state = newState;
    }
    return mainReducer(state, action);
  };
  return configureStore(rootReducer, rootSaga);
};

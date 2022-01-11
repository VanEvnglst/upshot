import { combineReducers, compose } from 'redux';
import { reducer as network } from 'react-native-offline';
import { reducer as authentication } from './authenticationRedux';
import { feedbackReducer as feedback } from './feedback/feedbackRedux';
import { reducer as feedbackHistory } from './feedback/feedbackHistoryRedux';
import { reducer as documenting } from './feedback/documentingRedux';
import { reducer as preparing } from './feedback/preparingRedux';
import { reducer as user } from './UserRedux';
import { reducer as onboarding } from './OnboardingRedux';
import { reducer as discussing } from './feedback/DiscussingRedux';
import rootSaga from '../sagas';

import configureStore from './createStore';

export const mainReducer = combineReducers({
  network,
  authentication,
  onboarding,
  feedback,
  feedbackHistory,
  documenting,
  preparing,
  discussing,
  user,
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

import { combineReducers, compose } from 'redux';
import { reducer as network } from 'react-native-offline';
import { reducer as authentication } from './AuthenticationRedux';
import { feedbackReducer as feedback } from './feedback/FeedbackRedux';
import { reducer as feedbackHistory } from './feedback/FeedbackHistoryRedux';
import { reducer as user } from './UserRedux';
import { reducer as onboarding } from './OnboardingRedux';
import { reducer as leadershipSkillArea } from './LSARedux';
import { reducer as captureMoment } from './feedback/CaptureFeedbackMomentRedux';
import { reducer as recordEntry } from './feedback/RecordEntryRedux';
import { reducer as frontlinerFeedback } from './frontliner/FLFeedbackRedux';
import rootSaga from '../sagas'; 

import configureStore from './createStore';

export const mainReducer = combineReducers({
  network,
  authentication,
  onboarding,
  feedback,
  feedbackHistory,
  user,
  leadershipSkillArea,
  captureMoment,
  recordEntry,
  frontlinerFeedback,
});

export default () => {
  const retainKeys = ['network'];
  const LOGOUT_USER = 'SIGN_OUT_USER';
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

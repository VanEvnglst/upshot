import { combineReducers, compose } from 'redux';
import { reducer as network } from 'react-native-offline';
import { reducer as authentication } from './AuthenticationRedux';
import { feedbackReducer as feedback } from './feedback/FeedbackRedux';
import { reducer as feedbackHistory } from './feedback/FeedbackHistoryRedux';
import { reducer as documenting } from './feedback/DocumentingRedux';
import { reducer as preparing } from './feedback/PreparingRedux';
import { reducer as user } from './UserRedux';
import { reducer as onboarding } from './OnboardingRedux';
import { reducer as discussing } from './feedback/DiscussingRedux';
import { reducer as reflecting } from './feedback/ReflectingRedux';
import { reducer as sharing } from './feedback/SharingRedux';
import { reducer as messages } from './MessagesRedux';
import { reducer as survey } from './frontliner/SurveyRedux';
import { reducer as leadershipSkillArea } from './LSARedux';
import { reducer as captureMoment } from './CaptureFeedbackMomentRedux';
import { reducer as frontlinerResponse } from './frontliner/ResponseRedux';
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
  reflecting,
  sharing,
  user,
  messages,
  survey,
  leadershipSkillArea,
  captureMoment,
  frontlinerResponse
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

import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import watchAuthenticationSaga from './AuthenticationSaga';
import watchOnboardingSaga from './OnboardingSaga';
import watchFeedbackSaga from './FeedbackSaga';
import watchFeedbackHistorySaga from './feedback/FeedbackHistorySaga';
import watchUserSaga from './UserSaga';
import watchLeadershipSkillAreaSaga from './LSASaga';
import watchCaptureMomentSaga from './CaptureMomentSaga';
import watchFrontlinerFeedbackSaga from './frontliner/FLFeedbackSaga';

function* watchNetwork() {
  try {
    yield fork(networkSaga, { pingInterval: 20000 });
  } catch (error) {}
}

export default function* root() {
  yield all([
    fork(watchAuthenticationSaga),
    fork(watchFeedbackSaga),
    fork(watchFeedbackHistorySaga),
    fork(watchOnboardingSaga),
    fork(watchUserSaga),
    fork(watchLeadershipSkillAreaSaga),
    fork(watchCaptureMomentSaga),
    fork(watchFrontlinerFeedbackSaga),
    watchNetwork,
  ]);
}

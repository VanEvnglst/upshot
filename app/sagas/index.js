import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import watchAuthenticationSaga from './AuthenticationSaga';
import watchOnboardingSaga from './OnboardingSaga';
import watchFeedbackSaga from './FeedbackSaga';
import watchFeedbackHistorySaga from './feedback/FeedbackHistorySaga';
import watchDocumentingSaga from './feedback/DocumentingSaga';
import watchPreparingSaga from './feedback/PreparingSaga';
import watchDiscussingSaga from './feedback/DiscussingSaga';
import watchReflectingSaga from './feedback/ReflectingSaga';
import watchSharingSaga from './feedback/SharingSaga';
import watchUserSaga from './UserSaga';
import watchMessagesSaga from './MessagesSaga';
import watchSurveySaga from './frontliner/SurveySaga';
import watchLeadershipSkillAreaSaga from './LSASaga';
import watchCaptureMomentSaga from './CaptureMomentSaga';

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
    fork(watchDocumentingSaga),
    fork(watchPreparingSaga),
    fork(watchDiscussingSaga),
    fork(watchReflectingSaga),
    fork(watchSharingSaga),
    fork(watchMessagesSaga),
    fork(watchSurveySaga),
    fork(watchLeadershipSkillAreaSaga),
    fork(watchCaptureMomentSaga),
    watchNetwork,
  ]);
}

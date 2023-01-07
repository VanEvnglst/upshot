import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import watchAuthenticationSaga from './AuthenticationSaga';
import watchFeedbackSaga from './feedback/FeedbackSaga';
import watchFeedbackHistorySaga from './feedback/FeedbackHistorySaga';
import watchCaptureMomentSaga from './feedback/CaptureMomentSaga';
import watchRecordEntrySaga from './feedback/RecordEntrySaga';
import watchUserSaga from './UserSaga';
import watchLeadershipSkillAreaSaga from './LSASaga';

import watchFrontlinerFeedbackSaga from './frontliner/FLFeedbackSaga';

function* watchNetwork() {
  try {
    yield fork(networkSaga, { pingInterval: 20000 });
  } catch (error) {}
}

export default function* root() {
  yield all([
    fork(watchAuthenticationSaga),
    fork(watchUserSaga),
    fork(watchLeadershipSkillAreaSaga),
    fork(watchFeedbackSaga),
    fork(watchFeedbackHistorySaga),
    fork(watchCaptureMomentSaga),
    fork(watchRecordEntrySaga),
    fork(watchFrontlinerFeedbackSaga),
    watchNetwork,
  ]);
}

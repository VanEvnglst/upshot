import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import watchAuthenticationSaga from './AuthenticationSaga';
import watchOnboardingSaga from './OnboardingSaga';
import watchFeedbackSaga from './FeedbackSaga';
import watchFeedbackHistorySaga from './feedback/FeedbackHistorySaga';
import watchDocumentingSaga from './feedback/DocumentingSaga';
import watchPreparingSaga from './feedback/PreparingSaga';
import watchDiscussingSaga from './feedback/DiscussingSaga';
import watchUserSaga from './UserSaga';

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
    watchNetwork,
  ]);
}

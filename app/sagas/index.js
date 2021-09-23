import { all, fork } from 'redux-saga/effects';
import { networkSaga } from 'react-native-offline';
import watchAuthenticationSaga from './authenticationSaga';
import watchFeedbackSaga from './feedbackSaga';
import watchUserSaga from './userSaga';

function* watchNetwork() {
  try {
    yield fork(networkSaga, { pingInterval: 20000 });
  } catch (error) {}
}

export default function* root() {
  yield all([
    fork(watchAuthenticationSaga),
    fork(watchFeedbackSaga),
    fork(watchUserSaga),
    watchNetwork,
  ]);
}

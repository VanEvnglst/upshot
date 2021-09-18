import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { FeedbackTypes } from '../store/feedback-redux';
import api from '../services/api-service';

export function* fetchFeedbackType() {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const typeResponse = yield call(api.getFeedbackType);
  console.log('res', typeResponse);
}

export function* fetchFeedbackFlow() {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const flowResponse = yield call(api.getFeedbackFlow);
  console.log('res', flowResponse);
}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
}

export default watchFeedbackSaga;

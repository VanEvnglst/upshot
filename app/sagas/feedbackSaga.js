import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import { FeedbackTypes } from '../store/feedbackRedux';
import api from '../services/apiService';

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

export function* fetchTeamMembers() {
  const response = yield call(api.getTeamMembers)
}

export function* fetchFeedbackTopics() {
  const response = yield call(api.getFeedbackTopics);
}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TOPICS, fetchFeedbackTopics);
  yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
}

export default watchFeedbackSaga;

import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackActions, { FeedbackTypes } from '../store/feedbackRedux';
import api from '../services/apiService';

export function* fetchFeedbackType() {
  const connected = yield checkInternetConnection();
  if (!connected) {
    return;
  }
  const response = yield call(api.getFeedbackType);
  if (response.ok) {
    const feedbackTypeList = response.data.details;
    yield put(FeedbackActions.fetchFeedbackTypeSucceess(feedbackTypeList));
  } else {
  }
}

export function* fetchFeedbackFlow() {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const flowResponse = yield call(api.getFeedbackFlow);
  if (flowResponse.ok) {
    console.log('res', flowResponse);
    const feedbackFlowList = flowResponse.data.details;
    yield put(FeedbackActions.fetchFeedbackFlowSuccess(feedbackFlowList));
  } else {
    console.log('error');
  }
}

export function* fetchTeamMembers() {
  const response = yield call(api.getTeamMembers);
}

export function* fetchFeedbackTopics() {
  const response = yield call(api.getFeedbackTopics);
}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
  // yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TOPICS, fetchFeedbackTopics);
  // yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
}

export default watchFeedbackSaga;

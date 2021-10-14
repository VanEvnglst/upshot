import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackActions, { FeedbackTypes } from 'app/store/feedback/feedbackRedux';
import api from 'app/services/apiService';

export function* fetchFeedbackType() {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const response = yield call(api.getFeedbackType);
  if (response.ok) {
    const feedbackTypeList = response.data.details;
    yield put(FeedbackActions.fetchFeedbackTypeSuccess(feedbackTypeList));
  } else {
    yield put(FeedbackActions.fetchFeedbackTypeFailure(response.data));
  }
}

export function* fetchFeedbackFlow() {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const flowResponse = yield call(api.getFeedbackFlow);
  if (flowResponse.ok) {
    const feedbackFlowList = flowResponse.data.details;
    yield put(FeedbackActions.fetchFeedbackFlowSuccess(feedbackFlowList));
  } else {
    yield put(FeedbackActions.fetchFeedbackFlowFailure(flowResponse.data));
  }
}

export function* fetchTeamMembers() {
  const response = yield call(api.getTeamMembers);
}

export function* fetchFeedbackTopics() {
  const response = yield call(api.getFeedbackTopics);
  if (response.ok) {
    const relatedTopicsList = response.data.details;
    yield put(FeedbackActions.fetchFeedbackTopicsSuccess(relatedTopicsList));
  } else {
    yield put(FeedbackActions.fetchFeedbackTopicsFailure(response.data));
  }
}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TOPICS, fetchFeedbackTopics);
  // yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
}

export default watchFeedbackSaga;

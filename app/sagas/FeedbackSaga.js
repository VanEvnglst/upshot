import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackActions, {
  FeedbackTypes,
} from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

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
  if (response.ok) {
    const staffList = response.data.staff;
    yield put(FeedbackActions.fetchTeamMembersSuccess(staffList));
  } else {
    yield put(FeedbackActions.fetchTeamMembersFailure(response.data));
  }
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

export function* postFeedbackJourney({ flow, teamMemberId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const response = yield call(api.postNewJourney, flow.id);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const journeyId = response.data.details.journey_id;
      yield put(FeedbackActions.postFeedbackJourneySuccess(journeyId));
      yield put(
        DocumentingActions.postFeedbackDocumenting({ journeyId, teamMemberId }),
      );
    }
    // save journey id to state using success action call
    // call create documenting with journey id and team member passed in
  }
}

export function* fetchCurrentFeedback({ journeyId }) {
  const response = yield call(api.getCurrentFeedbackJourney, journeyId);
  debugger;
  if (response.data.status === STATUS_OK) {
    const journeyData = response.data.Journey;
    const docuData = journeyData.Documenting;
    const prepData = journeyData.Preparing;
    const discussData = journeyData.Discussing;
    const reflectData = journeyData.Reflecting;
    if (docuData) retrieveDocumentingData(docuData);
    if (prepData) retrievePreparingData(prepData);
    // if ()
    yield put(FeedbackActions.setFeedbackFlow(journeyData.feedback_flow));
    yield put(FeedbackActions.fetchCurrentFeedbackSuccess(journeyData.id));
  } else {
    yield put(FeedbackActions.fetchCurrentFeedbackFailure(response.data));
  }
}

function* retrieveDocumentingData(documentingData) {
  yield put(DocumentingActions.setDocumentingData('id', documentingData.id));
  yield put(
    DocumentingActions.setDocumentingData('step1', documentingData.staff),
  );
  yield put(
    DocumentingActions.setDocumentingData('step2', documentingData.pos_or_cor),
  );
  yield put(
    DocumentingActions.setDocumentingData('step3', documentingData.topic),
  );
  yield put(
    DocumentingActions.setDocumentingData(
      'step4',
      documentingData.incident_date,
    ),
  );
  yield put(
    DocumentingActions.setDocumentingData('closed', documentingData.closed),
  );
}

function* retrievePreparingData(preparingData) {}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TOPICS, fetchFeedbackTopics);
  yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
  yield takeLatest(FeedbackTypes.POST_FEEDBACK_JOURNEY, postFeedbackJourney);
  yield takeLatest(FeedbackTypes.FETCH_CURRENT_FEEDBACK, fetchCurrentFeedback);
}

export default watchFeedbackSaga;

import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackActions, {
  FeedbackTypes,
} from 'app/store/feedback/feedbackRedux';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import PreparingActions from 'app/store/feedback/preparingRedux';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import * as NavigationService from 'app/services/NavigationService';
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

export function* postCloseFeedbackJourney({ journeyId }) {

  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  const response = yield call(api.postCloseJourney, params);
  if (response.ok) {
    if (response.data.status == 'ok') {
      yield put(FeedbackActions.postCloseFeedbackJourneySuccess())
      yield NavigationService.navigate('FeedbackJourneyList', {
        type: 'journeyEnd'
      });
    }
  } else {
    yield put(FeedbackActions.postCloseFeedbackJourneyFailure(response.data));
  }
}

export function* fetchCurrentFeedback({ journeyId }) {
  const response = yield call(api.getCurrentFeedbackJourney, journeyId);
  if (response.data.status === STATUS_OK) {
    const journeyData = response.data.Journey;
    const docuData = journeyData.Documenting;
    const prepData = journeyData.Preparing;
    const discussData = journeyData.Discussing;
    const reflectData = journeyData.Reflecting;

    if (docuData) {
      yield retrieveDocumentingData(docuData);
    }
    if (prepData) yield retrievePreparingData(prepData);
    if (reflectData) yield retrieveReflectingData(reflectData);
    if (discussData) yield retrieveDiscussingData(discussData);

    yield put(FeedbackActions.setFeedbackFlow(journeyData.feedback_flow));
    yield put(FeedbackActions.fetchCurrentFeedbackSuccess(journeyData.id));
  } else {
    yield put(FeedbackActions.fetchCurrentFeedbackFailure(response.data));
  }
}

function* retrieveDocumentingData(documentingData) {
  yield put(DocumentingActions.setDocumentingStatus('id', documentingData.id));
  yield put(
    DocumentingActions.setDocumentingStatus('closed', documentingData.closed),
  );
  yield put(
    DocumentingActions.setDocumentingStatus('started', !documentingData.closed),
  );
}

function* retrievePreparingData(preparingData) {
  yield put(PreparingActions.setPreparingStatus('id', preparingData.id));
  yield put(
    PreparingActions.setPreparingStatus('closed', preparingData.closed),
  );
  yield put(
    PreparingActions.setPreparingStatus('started', !preparingData.closed),
  );
}

function* retrieveReflectingData(reflectingData) {
  yield put(ReflectingActions.setReflectingStatus('id', reflectingData.id));
  yield put(
    ReflectingActions.setReflectingStatus('close', reflectingData.closed),
  );
  yield put(
    ReflectingActions.setReflectingStatus('started', !reflectingData.closed),
  );
}



function* retrieveDiscussingData(discussingData) {
  yield put(DiscussingActions.setDiscussingStatus('id', discussingData.id));
  yield put(DiscussingActions.setDiscussingStatus('closed', discussingData.closed));
  yield put(DiscussingActions.setDiscussingStatus('started', !discussingData.closed));
}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TOPICS, fetchFeedbackTopics);
  yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
  yield takeLatest(FeedbackTypes.POST_FEEDBACK_JOURNEY, postFeedbackJourney);
  yield takeLatest(FeedbackTypes.POST_CLOSE_FEEDBACK_JOURNEY, postCloseFeedbackJourney);
  yield takeLatest(FeedbackTypes.FETCH_CURRENT_FEEDBACK, fetchCurrentFeedback);
}

export default watchFeedbackSaga;

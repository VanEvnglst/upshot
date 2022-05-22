import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackActions, {
  FeedbackTypes,
} from 'app/store/feedback/FeedbackRedux';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import SharingActions from 'app/store/feedback/SharingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

const staffData = state => state.documenting.get('step1').data;
const typeData = state => state.feedback.get('chosenType');
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

export function* postFeedbackJourney({ data }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  const staff = yield select(staffData);
  const nameArr = staff.name.split(/[ ,]+/);
  const lastName = nameArr && nameArr[1].charAt(0);
  const type = yield select(typeData);
  const staffName = {
    firstName: nameArr[0],
    lastName: lastName,
  };

  const response = yield call(api.postNewJourney, data);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const journeyId = response.data.details.journey_id;
      const documentingData = {
        journey_id: journeyId,
        staff_id: staff.id,
        pos_or_cor: type.id
      };
      yield put(DocumentingActions.postFeedbackDocumenting(documentingData));
      yield put(FeedbackActions.setTeamMember(staffName))
      // yield put(FeedbackActions.postFeedbackJourneySuccess(journeyId));
    } else {
      yield put(FeedbackActions.postFeedbackJourneyFailure(response.data));
    }
  } else {
    yield put(FeedbackActions.postFeedbackJourneyFailure(response.data));
  }
}

export function* postCloseFeedbackJourney({ journeyId }) {
  const closeJourneyData = {
    journey_id: journeyId
  }

  const response = yield call(api.postCloseJourney, closeJourneyData);
  if (response.ok) {
    if (response.data.status == 'ok') {
      yield put(FeedbackActions.postCloseFeedbackJourneySuccess());
      yield NavigationService.navigate('FeedbackJourneyList', {
        type: 'journeyEnd',
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
    const shareData = journeyData.Sharing;

    if (docuData) yield retrieveDocumentingData(docuData);
    if (prepData) yield retrievePreparingData(prepData);
    if (reflectData) yield retrieveReflectingData(reflectData);
    if (discussData) yield retrieveDiscussingData(discussData);
    if (shareData) yield retrieveSharingData(shareData);

    yield put(FeedbackActions.setFeedbackFlow(journeyData.feedback_flow));
    yield put(FeedbackActions.setFeedbackType(journeyData.feedback_type));
    yield setPhaseSteps(journeyData.feedback_flow, journeyData.feedback_type)
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
    ReflectingActions.setReflectingStatus('closed', reflectingData.closed),
  );
  yield put(
    ReflectingActions.setReflectingStatus('started', !reflectingData.closed),
  );
}

function* retrieveDiscussingData(discussingData) {
  yield put(DiscussingActions.setDiscussingStatus('id', discussingData.id));
  yield put(
    DiscussingActions.setDiscussingStatus('closed', discussingData.closed),
  );
  yield put(
    DiscussingActions.setDiscussingStatus('started', !discussingData.closed),
  );
}

function* retrieveSharingData(sharingData) {
  yield put(SharingActions.setSharingStatus('id', sharingData.id));
  yield put(SharingActions.setSharingStatus('closed', sharingData.closed));
  yield put(SharingActions.setSharingStatus('started', !sharingData.closed));
}

function* setPhaseSteps(flow, type) {
  // set max step value for phase depending on flow and type
  if(flow.id === 1) {
    if (type.id === 1) {
      yield put(ReflectingActions.setReflectingStatus('maxStep', 4));
    }
  }

}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_FLOW, fetchFeedbackFlow);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TYPE, fetchFeedbackType);
  yield takeLatest(FeedbackTypes.FETCH_FEEDBACK_TOPICS, fetchFeedbackTopics);
  yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
  yield takeLatest(FeedbackTypes.POST_FEEDBACK_JOURNEY, postFeedbackJourney);
  yield takeLatest(
    FeedbackTypes.POST_CLOSE_FEEDBACK_JOURNEY,
    postCloseFeedbackJourney,
  );
  yield takeLatest(FeedbackTypes.FETCH_CURRENT_FEEDBACK, fetchCurrentFeedback);
}

export default watchFeedbackSaga;

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


export function* fetchTeamMembers() {
  const response = yield call(api.getTeamMembers);
  if (response.ok) {
    const staffList = response.data.staff;
    yield put(FeedbackActions.fetchTeamMembersSuccess(staffList));
  } else {
    yield put(FeedbackActions.fetchTeamMembersFailure(response.data));
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
  
  const data = {
    fb_id: journeyId
  }
  const response = yield call(api.getResponseFromFrontliner, data);
  debugger;
  if (response.data.status === STATUS_OK) {
yield put(FeedbackActions.fetchCurrentFeedbackSuccess(response.data.result));
    // const journeyData = response.data.Journey;
    // const docuData = journeyData.Documenting;
    // const prepData = journeyData.Preparing;
    // const discussData = journeyData.Discussing;
    // const reflectData = journeyData.Reflecting;
    // const shareData = journeyData.Sharing;
    // yield put(FeedbackActions.setFeedbackFlow(journeyData.feedback_flow));
    // yield put(FeedbackActions.setFeedbackType(journeyData.feedback_type));
    // yield setPhaseSteps(journeyData.feedback_flow, journeyData.feedback_type)
    
  } else {
    yield put(FeedbackActions.fetchCurrentFeedbackFailure(response.data));
  }
}

export function* postFeedbackExchange({ data }) {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  //   return;
  // }
  
  const payload = {
    capture_fb_id: '',
    event_clarification: '',
    impact_clarification: '',
    continue_clarification: '',
    do_less_clarification: '',
    stop_doing_clarification: '',
    additional_clarification: '',
    support: [],
  };
  
  const response = yield call(api.postFeedbackExchange, payload);
  if (response.ok) {
    if(response.data.status === STATUS_OK) {

    } else {
      yield put(FeedbackActions.postFeedbackExchangeFailure(response.data))
    }
  } else {
    yield put(FeedbackActions.postFeedbackExchangeFailure(response.data))
  }
}

function* watchFeedbackSaga() {
  yield takeLatest(FeedbackTypes.FETCH_TEAM_MEMBERS, fetchTeamMembers);
  yield takeLatest(FeedbackTypes.POST_FEEDBACK_JOURNEY, postFeedbackJourney);
  yield takeLatest(
    FeedbackTypes.POST_CLOSE_FEEDBACK_JOURNEY,
    postCloseFeedbackJourney,
  );
  yield takeLatest(FeedbackTypes.FETCH_CURRENT_FEEDBACK, fetchCurrentFeedback);
  yield takeLatest(FeedbackTypes.POST_FEEDBACK_EXCHANGE, postFeedbackExchange); 
}

export default watchFeedbackSaga;

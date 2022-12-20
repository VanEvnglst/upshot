import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';
import FeedbackActions, {
  FeedbackTypes,
} from 'app/store/feedback/FeedbackRedux';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';
import moment from 'moment';
import { DeviceUtil } from 'app/utils';
import { asyncProgressSteps, faceToFaceSteps } from 'app/models/ProgressStepsModel';

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
  const response = yield call(api.getCurrentFeedbackJourney, data);
  //getResponseFromFrontliner
  debugger;
  if (response.data.status === STATUS_OK) {
    const { requires_face_to_face, frontliner, feedback_type, status, meeting_date,
      meeting_time,
      meeting_location,
      progress, details } = response.data.data.journey;

    const progressArr = [];
    const feedbackResult = {
      id: journeyId,
      requires_face_to_face,
      frontliner,
      feedback_type,
      status,
      meeting_date,
      meeting_time,
      meeting_location,
      progress: [
        {
          id: progress[0].phase_id,
          title: progress[0].title,
          inProgress: progress[0].is_started,
          done: progress[0].is_done,
          shouldStart: !progress[0].is_started && !progress[0].is_done,
          dateFinished: progress[0].date_finished,
          description: asyncProgressSteps[0].description,
          doneDescription: asyncProgressSteps[0].doneDescription,
          inProgressDescription: asyncProgressSteps[0].inProgressDescription,
        },
        {
          id: progress[1].phase_id,
          title: progress[1].title,
          inProgress: progress[1].is_started,
          done: progress[1].is_done,
          shouldStart: !progress[1].is_started && progress[0].is_done,
          dateFinished: progress[1].date_finished,
          description: asyncProgressSteps[1].description,
          doneDescription: asyncProgressSteps[1].doneDescription,
          inProgressDescription: asyncProgressSteps[1].inProgressDescription,
        },
        {
          id: progress[2].phase_id,
          title: progress[2].title,
          inProgress: progress[2].is_started,
          done: progress[2].is_done,
          shouldStart: !progress[2].is_started && progress[1].is_done,
          dateFinished: progress[2].date_finished,
          description: asyncProgressSteps[2].description,
          doneDescription: asyncProgressSteps[2].doneDescription,
          inProgressDescription: asyncProgressSteps[2].inProgressDescription,
        },
        {
          id: progress[3].phase_id,
          title: progress[3].title,
          inProgress: progress[3].is_started,
          done: progress[3].is_done,
          shouldStart: !progress[3].is_started && progress[2].is_done,
          dateFinished: progress[3].date_finished,
          description: asyncProgressSteps[3].description,
          doneDescription: asyncProgressSteps[3].doneDescription,
          inProgressDescription: asyncProgressSteps[3].inProgressDescription,
        }
      ],
      details,
      // ...response.data.data.journey,
    //   managerInput: response.data.result['FB Entry'],
    //   frontlinerInput: response.data.result['FL Response'],
    //   frontliner: response.data.result.frontliner
    }
yield put(FeedbackActions.fetchCurrentFeedbackSuccess(feedbackResult));
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
    capture_fb_id: data.id,
    event_clarification: data.eventResponse,
    impact_clarification: data.impactResponse,
    continue_clarification: data.continueResponse,
    do_less_clarification: data.doLessResponse,
    stop_doing_clarification: data.stopDoingResponse,
    additional_clarification: data.additionalNotes,
    support: data.supportResponse,
  };

  const response = yield call(api.postFeedbackExchange, payload);
  debugger;
  if (response.ok) {
    // if(response.data.status === STATUS_OK) {
      yield put(FeedbackActions.postFeedbackExchangeSuccess());
      yield NavigationService.navigate('Exchange Confirmation');
    // } else {
      yield put(FeedbackActions.postFeedbackExchangeFailure(response.data))
    // }
  } else {
    yield put(FeedbackActions.postFeedbackExchangeFailure(response.data))
  }
}

export function* postFileUpload({ filePath, fileName }) {
  /** For audio recording in meeting discussion screen **/
  
  const data = new FormData();
  const dateToday = moment(new Date()).format('MMDDYYYYhhmma')
  data.append('file', {
    uri: filePath,
    name: dateToday + '_' + fileName,
    type: 'audio/mp4'
  });
  console.log("file path", filePath)
  console.log("data uploading", data)

  const response = yield call(api.postFileUpload, data);
  console.log('result api', response);
  console.log('status', response.status);

  if (response.ok) {
    yield put(FeedbackActions.postFileUploadSuccess(response.data));
  } else { 
    yield put(FeedbackActions.postFileUploadFailure(response.data));
  }

}

export function* postCaptureAttachment({ attachment }) {
  const data = new FormData();
  const path = DeviceUtil.isIos() ? 'sourceURL' : 'path';
  const dateToday = moment(new Date()).format('MMDDYYYYhhmma')
  
  data.append('fb_id', 298); //temporary fb_id
  for (let i = 0; i < attachment.length; i++) {
    const uriPath = attachment[i][path]
    const lastIndexMarker = uriPath.lastIndexOf('/');
    const fileName = uriPath.substring(lastIndexMarker + 1)
    data.append('file'+ i , {
      uri: uriPath,
      name: dateToday + '_' + i + fileName,
      type: attachment[i]['mime'],
    })

  }
  
  const response = yield call(api.postCaptureAttachment, data)
  console.log('data', data);
  console.log('result api', response);
 

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
  yield takeLatest(FeedbackTypes.POST_FILE_UPLOAD, postFileUpload);
  yield takeLatest(FeedbackTypes.POST_CAPTURE_ATTACHMENT, postCaptureAttachment);
}

export default watchFeedbackSaga;

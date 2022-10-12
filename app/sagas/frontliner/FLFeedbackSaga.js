import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, selct } from 'redux-saga/effects';
import FrontlinerFeedbackActions, { FrontlinerFeedbackTypes } from 'app/store/frontliner/FLFeedbackRedux';
import api from 'app/services/apiService';
import * as NavigationService from 'app/services/NavigationService';

const STATUS_OK = 'ok';

export function* fetchFLFeedbackList() {
  const connected = yield checkInternetConnection();

  const response = yield call(api.getFrontlinerFeedbackList);
  if(response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackListSuccess(response.data.all_feedback))
    } else {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackListFailure(response.data))
    }
  } else {
    yield put(FrontlinerFeedbackActions.fetchFLFeedbackListFailure(response.data))
  }

} 

export function* fetchFLFeedback(feedbackId) {
  const connected = yield checkInternetConnection();

  const payload = { 
    fb_id: feedbackId.id
  };
  const response = yield call(api.getFrontlinerFeedback, payload);
  if(response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackSuccess(response.data.feedback));
      if(response.data.feedback.requires_face_to_face)
        yield put(FrontlinerFeedbackActions.setResponseStatus('maxStep',8))
      else
        yield put(FrontlinerFeedbackActions.setResponseStatus('maxStep',7))
    } else {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackFailure(response.data))
    }
  } else {
    yield put(FrontlinerFeedbackActions.fetchFLFeedbackFailure(response.data))
  }
}

export function* postFLFeedbackResponse({data}) {
  const connected = yield checkInternetConnection();
  const supportList = data.supportClarification.map(obj => obj.suggestion);

  const payload = {
    capture_fb_id: data.id,
    event_clarification: data.eventClarification,
    impact_clarification: data.impactClarification,
    continue_clarification: data.continueClarification,
    do_less_clarification: data.doLessClarification,
    stop_doing_clarification: data.stopDoingClarification,
    additional_clarification: data.additionalClarification,
    support: supportList,
  };
  const response = yield call(api.postFrontlinerFeedbackResponse, payload);
  if(response.ok) {
    if(response.data.status === STATUS_OK) {
      yield put(FrontlinerFeedbackActions.postFLFeedbackResponseSuccess());
      yield NavigationService.navigate('FL Response Confirmation');
    } else {
      yield put(FrontlinerFeedbackActions.postFLFeedbackResponseFailure(response.data))
    }
  } else {
    yield put(FrontlinerFeedbackActions.postFLFeedbackResponseFailure(response.data));
  }
}

export function* postFLAssessment({ data }) { 
  const connected = yield checkInternetConnection();
  const dataValues = Object.values(data);
  let dataArr = [];
  for (let i = 0; i < dataValues.length; i++) {
    let ratingDetails = {
      question: dataValues[i].question,
      answer: dataValues[i].answer
    };
    dataArr = [...dataArr, ratingDetails];
  };

  const payload = {
    fb_id: 237, //sample only still don't know where the Assessment will come from
    ratings: dataArr,
  }
  const response = yield call(api.postRecordingFLAssessment, payload);
  if (response.ok) {
    yield put(FrontlinerFeedbackActions.setResponseStatus('assessmentRating', null));
    yield put(FrontlinerFeedbackActions.setResponseStatus('activeStep', 1));
    yield put(FrontlinerFeedbackActions.postFLAssessmentSuccess(response.data));
    yield NavigationService.navigate('Home');
  } else { 
    yield put(FrontlinerFeedbackActions.postFLAssessmentFailure(response.data));
  }
  debugger;

}


function* watchFrontlinerFeedbackSaga() {
  yield takeLatest(FrontlinerFeedbackTypes.FETCH_FL_FEEDBACK_LIST, fetchFLFeedbackList);
  yield takeLatest(FrontlinerFeedbackTypes.FETCH_FL_FEEDBACK, fetchFLFeedback);
  yield takeLatest(FrontlinerFeedbackTypes.POST_FL_FEEDBACK_RESPONSE, postFLFeedbackResponse);
  yield takeLatest(FrontlinerFeedbackTypes.POST_FL_ASSESSMENT, postFLAssessment);
} 

export default watchFrontlinerFeedbackSaga;
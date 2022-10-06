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



function* watchFrontlinerFeedbackSaga() {
  yield takeLatest(FrontlinerFeedbackTypes.FETCH_FL_FEEDBACK_LIST, fetchFLFeedbackList);
  yield takeLatest(FrontlinerFeedbackTypes.FETCH_FL_FEEDBACK, fetchFLFeedback);
  yield takeLatest(FrontlinerFeedbackTypes.POST_FL_FEEDBACK_RESPONSE, postFLFeedbackResponse);
} 

export default watchFrontlinerFeedbackSaga;
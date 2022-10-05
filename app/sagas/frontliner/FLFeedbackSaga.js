import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, selct } from 'redux-saga/effects';
import FrontlinerFeedbackActions, { FrontlinerFeedbackTypes } from 'app/store/frontliner/FLFeedbackRedux';
import api from 'app/services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  debugger;
  if(response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackSuccess(response.data.feedback));
    } else {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackFailure(response.data))
    }
  } else {
    yield put(FrontlinerFeedbackActions.fetchFLFeedbackFailure(response.data))
  }
}

export function* postFLFeedbackResponse(data) {
  const connected = yield checkInternetConnection();

  const payload = {
    capture_fb_id: '',
    event_clarification: '',
    impact_clarification: '',
    continue_clarification: '',
    do_less_clarification: '',
    stop_doing_clarification: '',
    additional_clarification: '',
    support: [
      '',
    ]
  };
  const response = yield call(api.postFrontlinerFeedbackResponse, payload);
  debugger;
  if(response.ok) {
    if(response.data.status === STATUS_OK) {
      yield put(FrontlinerFeedbackActions.postFLFeedbackResponseSuccess());
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
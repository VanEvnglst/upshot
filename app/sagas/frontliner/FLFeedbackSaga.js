import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, selct } from 'redux-saga/effects';
import FrontlinerFeedbackActions, { FrontlinerFeedbackTypes } from 'app/store/frontliner/FLFeedbackRedux';
import api from 'app/services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const STATUS_OK = 'ok';

export function* fetchFLFeedbackList() {
  const connected = yield checkInternetConnection();

  const response = yield call(api.getFrontlinerFeedbackList);
  debugger;
  if(response.ok) {
    if (response.data.status === STATUS_OK) {

    } else {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackListFailure(response.data))
    }
  } else {
    yield put(FrontlinerFeedbackActions.fetchFLFeedbackListFailure(response.data))
  }

} 

export function* fetchFLFeedback({ feedbackId}) {
  const connected = yield checkInternetConnection();

  const payload = { 
    fb_id: feedbackId
  };
  const response = yield call(api.getFrontlinerFeedback, payload);
  if(response.ok) {
    if (response.data.status === STATUS_OK) {

    } else {
      yield put(FrontlinerFeedbackActions.fetchFLFeedbackFailure(response.data))
    }
  } else {
    yield put(FrontlinerFeedbackActions.fetchFLFeedbackFailure(response.data))
  }
}



function* watchFrontlinerFeedbackSaga() {
  yield takeLatest(FrontlinerFeedbackTypes.FETCH_FL_FEEDBACK_LIST, fetchFLFeedbackList);
  yield takeLatest(FrontlinerFeedbackTypes.FETCH_FL_FEEDBACK, fetchFLFeedback);
} 

export default watchFrontlinerFeedbackSaga;
import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import ReflectingActions, { ReflectingTypes } from 'app/store/feedback/ReflectingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';


export function* postFeedbackReflecting({ journeyId }) {
  // const connected = yield
  // checkInternetConnection();
  // if(!connected) {
   // return; 
 // }

 const params = new URLSearchParams();
 params.append('journey_id', journeyId);

 const response = yield call(api.postFeedbackReflecting, params);
 debugger;
 if (response.ok) {
   if(response.data.status == 'ok') {
     const reflectingId = response.data.details.id;
     yield put(ReflectingActions.postFeedbackReflectingSuccess(reflectingId));
     yield NavigationService.navigate('FeedbackReflecting');
   }
 } else { 
   yield put(ReflectingActions.postFeedbackReflectingFailure(response.data));
 }
}


export function* updateFeedbackReflecting({ data }) {
   //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;

  const params = new URLSearchParams();

  const response = yield call(api.updateFeedbackReflecting, params);
  debugger;
  if (response.ok) {
    if(response.data.status == 'ok') {
      yield put(ReflectingActions.updateFeedbackReflectingSuccess());
    }
  } else {
    yield put(ReflectingActions.updateFeedbackReflectingFailure(response.data));
  }
}

export function* fetchCurrentReflecting({ reflectingId}) {
  const params = new URLSearchParams();

  const response = yield call(api.getCurrentReflecting, params);
  if(response.ok) {
    if(response.data.status === 'ok') {

    }
  } else {

  }
}

export function* closeFeedbackReflecting({ reflectingId }) {
  const params = new URLSearchParams();
  
  const response = yield call(api.closeFeedbackReflecting, params);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {

    }
  }
}

function* watchReflectingSaga() {
  yield takeLatest(ReflectingTypes.POST_FEEDBACK_REFLECTING, postFeedbackReflecting);
  yield takeLatest(ReflectingTypes.UPDATE_FEEDBACK_REFLECTING, updateFeedbackReflecting);
  yield takeLatest(ReflectingTypes.FETCH_CURRENT_REFLECTING, fetchCurrentReflecting);
  yield takeLatest(ReflectingTypes.CLOSE_FEEDBACK_REFLECTING, closeFeedbackReflecting);
}

export default watchReflectingSaga;
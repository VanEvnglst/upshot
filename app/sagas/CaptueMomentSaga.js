import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux/saga/effects';
import CaptureMomentActions, { CaptureMomentTypes } from 'app/store/CaptureFeedbackMomentRedux';
import api from 'app/services/apiService';


const feedbackType = state => state.captureMoment.get('step2').data;
export function* fetchLayerOneTopics() {
  /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */

  const type = yield select(feedbackType);
  console.warn(type);
  const payload ={
      Corrective: '',
      Positive: '',
    }
  
  const response = yield call(api.getLayerOneTopics, payload);
  if (response.ok) {

  }
}

export function* fetchLayerTwoTopics() {
  /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */
  const payload ={
    gen_topic_id: '',
  }
  
  const response = yield call(api.getLayerTwoTopics, payload);
  if (response.ok) {

  }
}

export function* postCaptureFeedbackMoment() {
  /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */
  const payload ={
    staff_id: '',
    gen_topic_id: '',
    sub_topic_id: '',
    reminder_hours: '',
  };
  
  const response = yield call(api.postCaptureFeedbackMoment, payload);
  if (response.ok) {

  }
}


function* watchCaptureMomentSaga() {
  yield takeLatest(CaptureMomentTypes.FETCH_LAYER_ONE_TOPICS, fetchLayerOneTopics);
  yield takeLatest(CaptureMomentTypes.FETCH_LAYER_TWO_TOPICS, fetchLayerTwoTopics);
}


export default watchCaptureMomentSaga;
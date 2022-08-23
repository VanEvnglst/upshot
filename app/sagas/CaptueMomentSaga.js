import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
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
  const payloadType = type.title === 'Corrective' ? true : false;
  const payload ={
      Corrective: payloadType,
      Positive: !payloadType,
    }

  debugger;
  
  const response = yield call(api.getLayerOneTopics, payload);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      const topicList = response.data.topics;
      yield put(CaptureMomentActions.fetchLayerOneTopicsSuccess(topicList))
    } else {
      yield put(CaptureMomentActions.fetchLayerOneTopicsFailure(response.data));
    }
  } else {
    yield put(CaptureMomentActions.fetchLayerOneTopicsFailure(response.data));
  }
}

export function* fetchLayerTwoTopics( { data }) {
  /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */
    console.warn('saga', data);
  const payload ={
    gen_topic_id: data.id,
  }
  
  const response = yield call(api.getLayerTwoTopics, payload);
  if (response.ok) {
    console.warn('res', response.data.subtopics);
    if (response.data.status == 'ok') {
      const layerTwo = response.data.subtopics;
      yield put(CaptureMomentActions.fetchLayerTwoTopicsSuccess(layerTwo))
    }
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
import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import CaptureMomentActions, { CaptureMomentTypes } from 'app/store/CaptureFeedbackMomentRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';


const feedbackType = state => state.captureMoment.get('data').step2;
export function* fetchLayerOneTopics() {
  /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */

  const type = yield select(feedbackType);

  const payloadType = type.title === 'Corrective' ? true : false;
  const payload ={
      Corrective: payloadType,
      Positive: !payloadType,
    }
  
  const response = yield call(api.getLayerOneTopics, payload);
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
  const payload ={
    gen_topic_id: data.id,
  }
  
  const response = yield call(api.getLayerTwoTopics, payload);
  if (response.ok) {
    if (response.data.status == 'ok') {
      const layerTwo = response.data.subtopics;
      yield put(CaptureMomentActions.fetchLayerTwoTopicsSuccess(layerTwo))
    } else {
      yield put(CaptureMomentActions.fetchLayerTwoTopicsFailure(response.data))
    }
  } else {
    yield put(CaptureMomentActions.fetchLayerTwoTopicsFailure(response.data))
  }
}

export function* postCaptureFeedbackMoment(type) {
   const connected = yield checkInternetConnection();
   /* if (!connected) {
      return;
    } */
    const moment = state => state.captureMoment.get('data');
    const momentData = yield select(moment);
    
    const { step1, step3, step4 } = momentData;
  const payload ={
    staff_id: step1.user_id,
    gen_topic_id: step3.selectedLayerOne.id,
    sub_topic_id: step3.selectedLayerTwo.id,
    reminder_hours: step4.value,
  };
  
  const response = yield call(api.postCaptureFeedbackMoment, payload);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(CaptureMomentActions.postCaptureMomentSuccess(response.data.id));
      yield put(CaptureMomentActions.resetCaptureStep());
      if(type.data === 'continueFB') {
          yield NavigationService.navigate('Record Feedback Entry')
      } else {
        yield NavigationService.navigate('Home');
      }
    } else {
      yield put(CaptureMomentActions.postCaptureMomentFailure(response.data))
    }
  } else {
    yield put(CaptureMomentActions.postCaptureMomentFailure(response.data))
  }
}

export function* fetchStaffMembers() {
  /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */

    const response = yield call(api.getTeamMembers);    
    if (response.ok) {
      if (response.data.status === 'ok') {
        yield put(CaptureMomentActions.fetchStaffMembersSuccess(response.data.reports));
      } else {
        yield put(CaptureMomentActions.fetchStaffMembersFailure(response.data));
      }
    } else {
      yield put(CaptureMomentActions.fetchStaffMembersFailure(response.data))
    }
}


function* watchCaptureMomentSaga() {
  yield takeLatest(CaptureMomentTypes.FETCH_LAYER_ONE_TOPICS, fetchLayerOneTopics);
  yield takeLatest(CaptureMomentTypes.FETCH_LAYER_TWO_TOPICS, fetchLayerTwoTopics);
  yield takeLatest(CaptureMomentTypes.FETCH_STAFF_MEMBERS, fetchStaffMembers);
  yield takeLatest(CaptureMomentTypes.POST_CAPTURE_MOMENT, postCaptureFeedbackMoment);
}


export default watchCaptureMomentSaga;
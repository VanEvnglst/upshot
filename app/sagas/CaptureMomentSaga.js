import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select, take } from 'redux-saga/effects';
import moment from 'moment';
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
    const feedbackMoment = state => state.captureMoment.get('data');
    const momentData = yield select(feedbackMoment);
    
    const { step1, step3, step4 } = momentData;
    const payload ={
      staff_id: step1.user_id,
      gen_topic_id: step3.selectedLayerOne.id,
      sub_topic_id: step3.selectedLayerTwo.id,
      reminder_hours: step4.value,
    };
  
  const response = yield call(api.postCaptureFeedbackMoment, payload);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      const dateLogged = moment(new Date()).format('llll');
      yield put (CaptureMomentActions.setCaptureData('dateLogged', dateLogged));
      yield put(CaptureMomentActions.postCaptureMomentSuccess(response.data.id));
      debugger;
      yield put(CaptureMomentActions.resetCaptureStep());
      console.warn('resp', response);
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

export function* postRecordEMEntry(type) {
  const recordEntry = state => state.captureMoment.get('entryDetails');
  const journeyID = state => state.captureMoment.get('journeyId');
  
  const entry = yield select(recordEntry);
  
  const payload = {
    capture_fb_id: yield select(journeyID),
    employee_do: entry.catchAttention,
    impact: entry.impactBehavior,
    do_more: entry.doMore,
    continue_doing: '',
    do_less: entry.doLess,
    stop_doing: entry.stopDoing,
    additional_notes: entry.additionalNotes,
  }
  
  const response = yield call(api.postRecordEMEntry, payload);
  console.warn('journeyID', entry.doMore)
  console.warn('RecordEM', response)
  if (response.ok) {
    yield put(CaptureMomentActions.postRecordEMEntrySuccess(response.data));
    yield put(CaptureMomentActions.resetEntryStep());
    console.warn('recordEM', response.ok)
  }
  else {
    yield put(CaptureMomentActions.postRecordEMEntryFailure(response.data))
  }
}

export function* postEditEMEntry(type) {
  const recordEntry = state => state.captureMoment.get('entryDetails');
  const journeyID = state => state.captureMoment.get('journeyId');
  const lastStep = state => state.captureMoment.get('entryActiveStep');
  
  const entry = yield select(recordEntry);
  
  const payload = {
    capture_fb_id: yield select(journeyID),
    employee_do: entry.catchAttention,
    impact: entry.impactBehavior,
    do_more: entry.doMore,
    continue_doing: '',
    do_less: entry.doLess,
    stop_doing: entry.stopDoing,
    additional_notes: entry.additionalNotes,
    last_active_step: yield select(lastStep)
  }
  const response = yield call(api.postEditEMEntry, payload);
  console.log('postEditEM', response);


  if (response.ok) {
    yield put(CaptureMomentActions.postEditEMEntrySuccess(response.data));
    console.warn('postEdit', response.ok)
      console.warn('doMore', entry.doMore);
  }
  else {
    yield put(CaptureMomentActions.postEditEMEntryFailure(response.data));
  }
}

export function* fetchEMEntry() { 
  const response = yield call(api.getEMEntry);
  if (response.ok) {

  }
  
}

function* watchCaptureMomentSaga() {
  yield takeLatest(CaptureMomentTypes.FETCH_LAYER_ONE_TOPICS, fetchLayerOneTopics);
  yield takeLatest(CaptureMomentTypes.FETCH_LAYER_TWO_TOPICS, fetchLayerTwoTopics);
  yield takeLatest(CaptureMomentTypes.FETCH_STAFF_MEMBERS, fetchStaffMembers);
  yield takeLatest(CaptureMomentTypes.FETCH_EM_ENTRY, fetchEMEntry);
  yield takeLatest(CaptureMomentTypes.POST_CAPTURE_MOMENT, postCaptureFeedbackMoment);
  yield takeLatest(CaptureMomentTypes.POST_RECORD_EM_ENTRY, postRecordEMEntry);
  yield takeLatest(CaptureMomentTypes.POST_EDIT_EM_ENTRY, postEditEMEntry);
}


export default watchCaptureMomentSaga;
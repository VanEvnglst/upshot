import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select, take } from 'redux-saga/effects';
import moment from 'moment';
import CaptureMomentActions, {
  CaptureMomentTypes,
} from 'app/store/CaptureFeedbackMomentRedux';
import FeedbackActions from 'app/store/feedback/FeedbackRedux';
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
  const payload = {
    Corrective: payloadType,
    Positive: !payloadType,
  };

  const response = yield call(api.getLayerOneTopics, payload);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const topicList = response.data.topics;
      yield put(CaptureMomentActions.fetchLayerOneTopicsSuccess(topicList));
    } else {
      yield put(CaptureMomentActions.fetchLayerOneTopicsFailure(response.data));
    }
  } else {
    yield put(CaptureMomentActions.fetchLayerOneTopicsFailure(response.data));
  }
}

export function* fetchLayerTwoTopics({ data }) {
  const connected = yield checkInternetConnection();
  /* if (!connected) {
      return;
    } */
  const payload = {
    gen_topic_id: data.id,
  };

  const response = yield call(api.getLayerTwoTopics, payload);
  if (response.ok) {
    if (response.data.status == 'ok') {
      const layerTwo = response.data.subtopics;
      yield put(CaptureMomentActions.fetchLayerTwoTopicsSuccess(layerTwo));
    } else {
      yield put(CaptureMomentActions.fetchLayerTwoTopicsFailure(response.data));
    }
  } else {
    yield put(CaptureMomentActions.fetchLayerTwoTopicsFailure(response.data));
  }
}

export function* postCaptureFeedbackMoment() {
  const connected = yield checkInternetConnection();
  /* if (!connected) {
      return;
    } */
  const feedbackMoment = state => state.captureMoment.get('data');
  const momentData = yield select(feedbackMoment);

  const { step1, step3, step4 } = momentData;
  const payload = {
    staff_id: step1.user_id,
    gen_topic_id: step3.selectedLayerOne.id,
    sub_topic_id: step3.selectedLayerTwo.id,
  };
  
  const response = yield call(api.postCaptureFeedbackMoment, payload);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(
        CaptureMomentActions.postCaptureMomentSuccess(response.data.id),
      );
      yield put(CaptureMomentActions.postCloseCaptureMoment(response.data.id));
    } else {
      yield put(CaptureMomentActions.postCaptureMomentFailure(response.data));
    }
  } else {
    yield put(CaptureMomentActions.postCaptureMomentFailure(response.data));
  }
}

export function* postCloseCaptureMoment(journeyId) {
  const connected = yield checkInternetConnection();
  /* if (!connected) {
    return;

  } */
 //TODO: fix this
  const payload = {
    fb_id: journeyId.journeyId,
  };

  const response = yield call(api.postCloseCaptureFeedbackMoment, payload);
  console.log('close', response);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const captureData = state => state.captureMoment.get('data');
      const momentData = yield select(captureData);

      const { step1, step2, step3 } = momentData;

      const currentJourney = {
        journeyId: journeyId.journeyId,
        feedback_type: step2.title,
        frontliner: step1.name,
        topic: step3.selectedLayerOne.name,
        subtopic: step3.selectedLayerTwo.name,
        date: momentData.dateLogged,
        requires_face_to_face: step3.selectedLayerTwo.requires_face_to_face,
      };
      yield put(FeedbackActions.setCurrentJourney(currentJourney));
      yield put(CaptureMomentActions.postCloseCaptureMomentSuccess());
    } else {
      yield put(
        CaptureMomentActions.postCloseCaptureMomentFailure(response.data),
      );
    }
  } else {
    yield put(
      CaptureMomentActions.postCloseCaptureMomentFailure(response.data),
    );
  }
}

export function* setReminderHours() {
  const connected = yield checkInternetConnection();
  /* if (!connected) {
      return;
    } */

  const feedbackMoment = state => state.captureMoment.get('data');
  const momentData = yield select(feedbackMoment);

  const payload = {
    fb_id: '',
    reminder_hours: '',
  };

  const response = yield call(api.postCaptureFeedbackMoment, payload);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(CaptureMomentActions.setReminderHoursSuccess());
      // yield put(CaptureMomentActions.resetCaptureStep());
      //   yield NavigationService.navigate('Home');
    } else {
      yield put(CaptureMomentActions.setReminderHoursFailure());
    }
  } else {
    yield put(CaptureMomentActions.setReminderHoursFailure());
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
      yield put(
        CaptureMomentActions.fetchStaffMembersSuccess(response.data.reports),
      );
    } else {
      yield put(CaptureMomentActions.fetchStaffMembersFailure(response.data));
    }
  } else {
    yield put(CaptureMomentActions.fetchStaffMembersFailure(response.data));
  }
}

export function* postRecordEMEntry() {
  const recordEntry = state => state.captureMoment.get('entryDetails');
  const journeyID = state => state.captureMoment.get('journeyId');

  const entry = yield select(recordEntry);

  const payload = {
    capture_fb_id: yield select(journeyID),
    employee_do: entry?.catchAttention,
    impact: entry?.impactBehavior,
    do_more: entry?.doMore,
    continue_doing: '',
    do_less: entry?.doLess,
    stop_doing: entry?.stopDoing,
    additional_notes: entry?.additionalNotes,
  };

  const response = yield call(api.postRecordEMEntry, payload);

  console.log('record res', response);

  if (response.ok) {
    yield put(CaptureMomentActions.postRecordEMEntrySuccess(response.data));
    yield put(CaptureMomentActions.postCloseRecordEntry(yield select(journeyID)));
    yield put(CaptureMomentActions.resetEntryStep());
  } else {
    yield put(CaptureMomentActions.postRecordEMEntryFailure(response.data));
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
    last_active_step: yield select(lastStep),
  };
  const response = yield call(api.postEditEMEntry, payload);

  if (response.ok) {
    yield put(CaptureMomentActions.postEditEMEntrySuccess(response.data));
  } else {
    yield put(CaptureMomentActions.postEditEMEntryFailure(response.data));
  }
}

export function* postCloseRecordEntry(journeyId) {
  const connected = yield checkInternetConnection();
  /* if (!connected) {
    return;
  } */

  const payload = {
    fb_id: journeyId.journeyId,
  };

  const response = yield call(api.postCloseRecordEntry, payload);
  console.log('close', response);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(CaptureMomentActions.postCloseRecordEntrySuccess());
    } else {
      yield put(CaptureMomentActions.postCloseRecordEntryFailure(response.data))
    }
  } else {
    yield put(CaptureMomentActions.postCloseRecordEntryFailure(response.data));
  }
}

export function* fetchEMEntry() {
  const response = yield call(api.getEMEntry);
  if (response.ok) {
  }
}

export function* postFaceToFaceSchedule() {
  const meetingSched = state =>
    state.captureMoment.get('entryDetails')['f2fSchedule'];
  const journeyID = state => state.captureMoment.get('journeyId');

  const scheduleDetails = yield select(meetingSched);

  const payload = {
    fb_id: yield select(journeyID),
    scheduled_date: moment(scheduleDetails.date).format('MM/DD/YYYY'),
    start_time: scheduleDetails.startTime,
    end_time: scheduleDetails.endTime,
    location: scheduleDetails.location,
  };

  const response = yield call(api.postFaceToFaceSchedule, payload);
  if (response.ok) {
    yield put(
      CaptureMomentActions.postFaceToFaceScheduleSuccess(response.data),
    );
  } else {
    yield put(
      CaptureMomentActions.postFaceToFaceScheduleFailure(response.data),
    );
  }
}

function* watchCaptureMomentSaga() {
  yield takeLatest(
    CaptureMomentTypes.FETCH_LAYER_ONE_TOPICS,
    fetchLayerOneTopics,
  );
  yield takeLatest(
    CaptureMomentTypes.FETCH_LAYER_TWO_TOPICS,
    fetchLayerTwoTopics,
  );
  yield takeLatest(CaptureMomentTypes.FETCH_STAFF_MEMBERS, fetchStaffMembers);
  yield takeLatest(CaptureMomentTypes.FETCH_EM_ENTRY, fetchEMEntry);
  yield takeLatest(
    CaptureMomentTypes.POST_CAPTURE_MOMENT,
    postCaptureFeedbackMoment,
  );
  yield takeLatest(CaptureMomentTypes.POST_RECORD_EM_ENTRY, postRecordEMEntry);
  yield takeLatest(CaptureMomentTypes.POST_EDIT_EM_ENTRY, postEditEMEntry);
  yield takeLatest(
    CaptureMomentTypes.POST_FACE_TO_FACE_SCHEDULE,
    postFaceToFaceSchedule,
  );
  yield takeLatest(
    CaptureMomentTypes.POST_CLOSE_CAPTURE_MOMENT,
    postCloseCaptureMoment,
  );
  yield takeLatest(
    CaptureMomentTypes.POST_CLOSE_RECORD_ENTRY, postCloseRecordEntry
  );
}

export default watchCaptureMomentSaga;

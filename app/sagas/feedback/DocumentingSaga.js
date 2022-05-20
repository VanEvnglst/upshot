import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';
import DocumentingActions, {
  DocumentingTypes,
} from 'app/store/feedback/DocumentingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';
const activeStep = state => state.documenting.get('activeStep');
const documentingId = state => state.documenting.get('id');
const type = state => state.feedback.get('chosenType').id;
const flow = state => state.feedback.get('chosenFlow').id;
const step1Data = state => state.documenting.get('step1').data;
const step2Data = state => state.documenting.get('step2').data;
const step3Data = state => state.documenting.get('step3').data;
const step4Data = state => state.documenting.get('step4').data;
const step5Data = state => state.documenting.get('step5').data;
const otherTopicData = state => state.documenting.get('otherTopic');
const lastActiveStep = state => state.documenting.get('activeStep');

export function* postFeedbackDocumenting({ data }) {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  //  return;
  //}
  const response = yield call(api.postFeedbackDocumenting, data);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const step = yield select(activeStep);
      const documentingId = response.data.details.id;
      yield put(
        DocumentingActions.postFeedbackDocumentingSuccess(documentingId),
      );
      yield put(DocumentingActions.setActiveStep(step + 1));
    }
  } else {
    yield put(DocumentingActions.postFeedbackDocumentingFailure(response.data));
  }
}

export function* updateFeedbackDocumenting({ data }) {
  const step1 = yield select(step1Data);
  const step2 = yield select(step2Data);
  const step3 = yield select(step3Data);
  const step4 = yield select(step4Data);
  const step5 = yield select(step5Data);
  const otherTopic = yield select(otherTopicData);
  const lastStep = yield select(lastActiveStep);
  const docuId = yield select(documentingId);
  const typeId = yield select(type);

  const step2List = step2 && step2.map(obj => obj.id);
  const dateSelected = step3 && step3 !== null ? moment(step3).format('MMM DD, YYYY') : '';
  const step4Value = step4 && step4.value !== null ? step4.value : true;
  const step5Value = step5 && step5.value !== null ? step5.value : 0;

  const documentingData = {
    documenting_id: docuId,
    staff_id: step1.id,
    topics: step2List,
    pos_or_cor: typeId,
    incident_date: dateSelected,
    is_first_time_bool: step4Value,
    follow_up_count_int: step5Value,
    optional_topic: otherTopic,
    last_step: lastStep,
  }
  
  const response = yield call(api.updateDocumenting, documentingData);
  debugger;

  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(DocumentingActions.updateFeedbackDocumentingSuccess());
      if (data.shouldClose) {
        yield put(DocumentingActions.closeFeedbackDocumenting());
        yield put(DocumentingActions.setDocumentingStatus('closed', true));
        yield NavigationService.navigate('FeedbackConfirmation', {
          type: 'documenting',
        });
      } else {
        yield NavigationService.navigate('ActiveFeedbackJourney');
        yield put(DocumentingActions.resetDocumentingState());
      }
    }
  } else {
    yield put(
      DocumentingActions.updateFeedbackDocumentingFailure(response.data),
    );
  }
}

export function* updateDocumentingReminder({ data }) {
  const params = new URLSearchParams();
  const { reminderDate } = data;
  const step2 = yield select(step2Data);
  const otherTopic = yield select(otherTopicData);
  const docuId = yield select(documentingId);
  const step2List = step2.map(obj => obj.id);

  const documentingData = {
    documenting_id: docuId,
    topics: step2List,
    reminder_date: reminderDate,
    optional_topic: otherTopic,
  }
  
  const response = yield call(api.updateDocumentingReminder, documentingData);
  
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(DocumentingActions.updateDocumentingReminderSuccess());
      yield put(DocumentingActions.closeFeedbackDocumenting());
      yield put(DocumentingActions.setDocumentingStatus('closed', true));
      yield NavigationService.navigate('ActiveFeedbackJourney');
    }
  } else {
    yield put(DocumentingActions.updateDocumentingReminderFailure());
  }
}

export function* deleteFeedbackDocumenting({ data }) {
  const response = yield call(api.deleteDocumenting, data);
  if (response.ok) {
  }
}

export function* fetchCurrentDocumenting({ documentingId }) {
  const documentingData = {
    documenting_id: documentingId
  }

  const response = yield call(api.getCurrentDocumenting, documentingData);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const docuDetails = response.data.details;
      const firstTimeFeedback = docuDetails.is_first_time === null ?
      null : docuDetails.is_first_time ? {id: 1} : { id: 2};
      const followUpFeedback = 
      { value: docuDetails.follow_up_count }
      const lastStep = docuDetails.last_step === null ? 1 : docuDetails.last_step;
      yield put(
        DocumentingActions.setDocumentingData('step1', docuDetails.staff),
      );
      yield put(
        DocumentingActions.setDocumentingData('step2', docuDetails.topics),
      );
      yield put(
        DocumentingActions.setDocumentingData(
          'step3',
          docuDetails.incident_date,
        ),
      );
      yield put(DocumentingActions.setDocumentingData('step4', firstTimeFeedback));
      yield put(DocumentingActions.setDocumentingData('step5', followUpFeedback));
      yield put(DocumentingActions.setDocumentingStatus('activeStep', lastStep))
      yield put(DocumentingActions.fetchCurrentDocumentingSuccess());
    } else {
      yield put(DocumentingActions.fetchCurrentDocumentingFailure(response.data))
    }
  } else {
    yield put(DocumentingActions.fetchCurrentDocumentingFailure(response.data));
  }
}

export function* closeFeedbackDocumenting() {
  const docuId = yield select(documentingId);
  const documentingData = {
    documenting_id: docuId
  }

  const response = yield call(api.postCloseDocumenting, documentingData);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(DocumentingActions.closeFeedbackDocumentingSuccess());
    }
  } else {
    yield put(
      DocumentingActions.closeFeedbackDocumentingFailure(response.data),
    );
  }
}

function* watchDocumentingSaga() {
  yield takeLatest(
    DocumentingTypes.POST_FEEDBACK_DOCUMENTING,
    postFeedbackDocumenting,
  );
  yield takeLatest(
    DocumentingTypes.UPDATE_FEEDBACK_DOCUMENTING,
    updateFeedbackDocumenting,
  );
  yield takeLatest(
    DocumentingTypes.UPDATE_DOCUMENTING_REMINDER,
    updateDocumentingReminder,
  );
  yield takeLatest(
    DocumentingTypes.DELETE_FEEDBACK_DOCUMENTING,
    deleteFeedbackDocumenting,
  );
  yield takeLatest(
    DocumentingTypes.FETCH_CURRENT_DOCUMENTING,
    fetchCurrentDocumenting,
  );
  yield takeLatest(
    DocumentingTypes.CLOSE_FEEDBACK_DOCUMENTING,
    closeFeedbackDocumenting,
  );
}

export default watchDocumentingSaga;

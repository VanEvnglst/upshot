import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DocumentingActions, {
  DocumentingTypes,
} from 'app/store/feedback/documentingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const activeStep = state => state.documenting.get('activeStep');

export function* postFeedbackDocumenting({ data }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //  return;
  //}
  const response = yield call(api.postFeedbackDocumenting, data);
  if (response.ok) {
    if (response.data.status === 'ok') {
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
  debugger;
  const response = yield call(api.updateDocumenting, data);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DocumentingActions.updateFeedbackDocumentingSuccess());
      yield put(DocumentingActions.setDocumentingStatus('closed', true));
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'documenting',
      });
    }
  } else {
    yield put(DocumentingActions.updateFeedbackDocumentingFailure());
  }
}

export function* updateDocumentingReminder({ data }) {
  debugger;
  const response = yield call(api.updateDocumentingReminder, data);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DocumentingActions.updateDocumentingReminderSuccess());
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
  const response = yield call(api.getCurrentDocumenting, documentingId);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      const docuDetails = response.data.details;
      DocumentingActions.setDocumentingData('step1', docuDetails.staff);
      DocumentingActions.setDocumentingData('step2', docuDetails.topics);
      DocumentingActions.setDocumentingData('step3', docuDetails.incident_date);
    }
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
}

export default watchDocumentingSaga;

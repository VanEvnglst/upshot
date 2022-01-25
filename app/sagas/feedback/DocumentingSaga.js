import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DocumentingActions, {
  DocumentingTypes,
} from 'app/store/feedback/documentingRedux';
import PreparingActions from 'app/store/feedback/preparingRedux';
import FeedbackActions from 'app/store/feedback/feedbackRedux';
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
  const response = yield call(api.updateDocumenting, data);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DocumentingActions.closeFeedbackDocumenting(data.docuId));
      yield put(DocumentingActions.updateFeedbackDocumentingSuccess());
      yield put(DocumentingActions.setDocumentingStatus('closed', true));
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'documenting',
      });
    }
  } else {
    yield put(DocumentingActions.updateFeedbackDocumentingFailure(response.data));
  }
}

export function* updateDocumentingReminder({ data }) {

  const params = new URLSearchParams();
  const { reminderDate, docuId } = data;
    params.append('documenting_id', docuId);
    params.append('reminder_date', reminderDate);

  const response = yield call(api.updateDocumentingReminder, params);
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
  const params = new URLSearchParams();

  params.append('documenting_id', documentingId);
  
  const response = yield call(api.getCurrentDocumenting, params);

  if (response.ok) {
    if (response.data.status === 'ok') {
      const docuDetails = response.data.details;
      yield put(FeedbackActions.setFeedbackType(docuDetails.pos_or_cor));
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
      yield put(DocumentingActions.fetchCurrentDocumentingSuccess());
    }
  }
}

export function* closeFeedbackDocumenting({ documentingId }) {
  const params = new URLSearchParams();
  params.append('documenting_id', documentingId);

  const response = yield call(api.postCloseDocumenting, documentingId);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DocumentingActions.closeFeedbackDocumentingSuccess());
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
  yield takeLatest(
    DocumentingTypes.CLOSE_FEEDBACK_DOCUMENTING,
    closeFeedbackDocumenting,
  );
}

export default watchDocumentingSaga;

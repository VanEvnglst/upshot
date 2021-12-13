import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DocumentingActions, {
  DocumentingTypes,
} from 'app/store/feedback/documentingRedux';
import api from 'app/services/apiService';

const activeStep = state => state.documenting.get('activeStep');
const step2Data = state => state.documenting.get('step2').data;
const step3Data = state =>
state.documenting.get('step3').data;
const feedbackType = state =>
state.feedback.get('chosenType');
const docuId = state => state.documenting.get('id');
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
  // const step2 = yield select(state.documenting.get('step2').data);
  // const step3 = yield select(state.documenting.get('step3').data);
  // const feedbackType = yield select(state.feedback.get('chosenType'));
  // const docuId = yield select(state.documenting.get('id'));
  // const payload = {
  //   data,
  //   step2Data,
  //   step3Data,
  //   feedbackType,
  //   docuId
  // }
  debugger;
  const response = yield call(api.updateDocumenting, data);
  debugger;
  if (response.ok) {
    if(response.data.status === 'ok') {
      yield put(DocumentingActions.updateFeedbackDocumentingSuccess());
      //Navigate to FeedbackConfirmation
      //{type: 'documenting'};
    }
  } else {
    yield put(DocumentingActions.updateFeedbackDocumentingFailure());
  }
}

export function* deleteFeedbackDocumenting({ data }) {
  const response = yield call(api.deleteDocumenting, data);
  if (response.ok) {
  }
}

export function* fetchCurrentDocumenting({ documentingId }) {
  const response  = yield call(api.getCurrentDocumenting, documentingId);
  debugger;
  if (response.ok) {
    if(response.data.status === 'ok') {
      
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
    DocumentingTypes.DELETE_FEEDBACK_DOCUMENTING,
    deleteFeedbackDocumenting,
  );
  yield takeLatest(
    DocumentingTypes.FETCH_CURRENT_DOCUMENTING,
    fetchCurrentDocumenting,
  );
}

export default watchDocumentingSaga;

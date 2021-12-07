import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DocumentingActions, {
  DocumentingTypes,
} from 'app/store/feedback/documentingRedux';
import api from 'app/services/apiService';

const activeStep = state => state.documenting.get('activeStep');

export function* postFeedbackDocumenting({ data }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  //  return;
  //}
  const response = yield call(api.postFeedbackDocumenting, data);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      const step = yield select(activeStep);
      const documentingId = response.data.details.id;
      yield put(
        DocumentingActions.postFeedbackDocumentingSuccess(documentingId),
      );
      debugger;
      yield put(DocumentingActions.setActiveStep(step + 1));
    }
  } else {
    yield put(DocumentingActions.postFeedbackDocumentingFailure(response.data));
  }
}

export function* updateFeedbackDocumenting({ data }) {
  const response = yield call(api.updateDocumenting, data);
  if (response.ok) {
  }
}

export function* deleteFeedbackDocumenting({ data }) {
  const response = yield call(api.deleteDocumenting, data);
  if (response.ok) {
  }
}

export function* fetchCurentDocumenting({ documentingId }) {
  const response  = yield call(api.getCurrentDocumenting, documentingId);
  debugger;
  if (response.ok) {
    
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
}

export default watchDocumentingSaga;

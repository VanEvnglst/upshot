import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';
import DocumentingActions, {
  DocumentingTypes,
} from 'app/store/feedback/DocumentingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';
import { parseAsync } from '@babel/core';

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
const otherTopicData = state => state.documenting.get('otherTopic').data;

export function* postFeedbackDocumenting({ data }) {
  // const connected = yield checkInternetConnection();
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
  // Select data from the store to be passed into API
  const step1 = yield select(step1Data);
  const step2 = yield select(step2Data);
  const step3 = yield select(step3Data);
  const step4 = yield select(step4Data);
  const step5 = yield select(step5Data);
  const otherTopic = yield select(otherTopicData);
  const docuId = yield select(documentingId);
  const typeId = yield select(type);
  const flowId = yield select(flow);

  const otsParams = new URLSearchParams();
  const params = new URLSearchParams();
  const schedPostParams = new URLSearchParams();

  // This handles the topic ids and concats them into one string;
  const step2List = step2.map(obj => obj.id);
  var topicListStr = '[';
  step2List.forEach((item, index) => {
    if (index !== step2List.length - 1) topicListStr += `${item},`;
    else topicListStr += `${item}`;
  });
  topicListStr += ']';
  const dateSel = moment(step3).format('MMM DD, YYYY');
  const step5Value = step5 && step5.value !== null ? step5.value : 0;
  params.append('documenting_id', docuId);
  params.append('staff_id', step1.id);
  params.append('topics', topicListStr);
  params.append('pos_or_cor', typeId);
  params.append('incident_date', dateSel);
  params.append('is_first_time_bool', step4.value);
  params.append('follow_up_count_int', step5Value);
  params.append('optional_topic', otherTopic);

  const response = yield call(api.updateDocumenting, params);
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
  const { reminderDate, docuId } = data;
  const step2 = yield select(step2Data);
  const otherTopic = yield select(otherTopicData);

  const step2List = step2.map(obj => obj.id);
  var topicListStr = '[';
  step2List.forEach((item, index) => {
    if (index !== step2List.length - 1) topicListStr += `${item},`;
    else topicListStr += `${item}`;
  });
  topicListStr += ']';
  params.append('documenting_id', docuId);
  params.append('reminder_date', reminderDate);
  params.append('topics', topicListStr);
  params.append('optional_topic', otherTopic);

  const response = yield call(api.updateDocumentingReminder, params);
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
  const params = new URLSearchParams();
  params.append('documenting_id', documentingId);

  const response = yield call(api.getCurrentDocumenting, params);

  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      debugger;
      const docuDetails = response.data.details;
      const firstTimeFeedback = docuDetails.is_first_time ? {id: 1} : { id: 2};
      const followUpFeedback = 
      { value: docuDetails.follow_up_count }
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
      yield put(DocumentingActions.fetchCurrentDocumentingSuccess());
    }
  }
}

export function* closeFeedbackDocumenting() {
  const params = new URLSearchParams();
  const docuId = yield select(documentingId);
  params.append('documenting_id', docuId);

  const response = yield call(api.postCloseDocumenting, params);
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

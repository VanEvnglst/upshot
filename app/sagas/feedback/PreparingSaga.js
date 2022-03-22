import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import PreparingActions, {
  PreparingTypes,
} from 'app/store/feedback/PreparingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';
import moment from 'moment';

const preparingId = state => state.preparing.get('id');

const step1Data = state => state.preparing.get('step1');
const step2Data = state => state.preparing.get('step2');
const step3Data = state => state.preparing.get('step3');
const step3BData = state => state.preparing.get('step3B');
const step4Data = state => state.preparing.get('step4');
const step4BData = state => state.preparing.get('step4B');
const step5Data = state => state.preparing.get('step5');
const step5BData = state => state.preparing.get('step5B');

export function* postFeedbackPreparing({ journeyId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  // return;
  // }

  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  const response = yield call(api.postFeedbackPreparing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const preparingId = response.data.details.id;
      yield put(PreparingActions.postFeedbackPreparingSuccess(preparingId));
      yield NavigationService.navigate('FeedbackPreparing');
    }
  } else {
    yield put(PreparingActions.postFeedbackPreparingFailure(response.data));
  }
}

export function* updateFeedbackPreparing({ data }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;
  const prepId = yield select(preparingId);
  const step1 = yield select(step1Data);
  const step2 = yield select(step2Data);
  const step3 = yield select(step3Data);
  const step3B = yield select(step3BData);
  const step4 = yield select(step4Data);
  const step4B = yield select(step4BData);
  const step5 = yield select(step5Data);
  const step5B = yield select(step5BData);

  const params = new URLSearchParams();
  params.append('preparing_id', prepId);
  params.append('check_in', step1.data);
  params.append('purpose', step2.data);
  params.append('event', step3.data.event);
  params.append('actions', step3.data.action);
  params.append('result', step3.data.result);
  params.append('observation_questions', step3B.data.observationList);
  params.append('action_plan_questions', step4.data.actionPlanList);
  params.append('additional_action_plan_questions', step4.data.additionalPlan);
  params.append('action_plan_evaluate_options', step4B.data.evaluateOptions);
  params.append(
    'additional_action_plan_evaluate_options',
    step4B.data.additionalOptions,
  );
  params.append('checkout_question', step5.data.checkoutQuestions);
  params.append('additional_checkout_question', step5.data.additionalCheckout);
  params.append('checkout_acknowledge', step5B.data.checkoutAcknowledge);
  params.append(
    'additional_checkout_acknowledge',
    step5B.data.additionalAcknowledge,
  );

  const response = yield call(api.updateFeedbackPreparing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(PreparingActions.updateFeedbackPreparingSuccess());
      if (data.shouldClose) {
        yield NavigationService.navigate('FeedbackConfirmation', {
          type: 'preparing',
        });
      } else {
        yield put(PreparingActions.resetPreparingState());
        yield NavigationService.navigate('ActiveFeedbackJourney')
      }
    }
  } else {
    yield put(PreparingActions.updateFeedbackPreparingFailure());
  }
}

export function* updatePreparingSchedule({ data }) {
  const prepId = yield select(preparingId);
  const { timeSelected, dateSelected, alertTime } = data;
  const faceToFace = `${moment(dateSelected.value).format('YYYY-MM-DD')} ${
    timeSelected.value
  }`;
  const params = new URLSearchParams();

  params.append('preparing_id', prepId);
  params.append('schedule_of_face2face', faceToFace);
  params.append('alert_time', alertTime);

  const response = yield call(api.updateFeedbackPreparing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(PreparingActions.updatePreparingScheduleSuccess());
      yield put(PreparingActions.setPreparingStatus('closed', true));
      yield put(PreparingActions.closeFeedbackPreparing(prepId));
    }
  } else {
    yield put(PreparingActions.updatePreparingScheduleFailure(response.data));
  }
}

export function* fetchCurrentPreparing({ preparingId }) {
  const params = new URLSearchParams();
  params.append('preparing_id', preparingId);

  const response = yield call(api.getCurrentPreparing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const preparingDetails = response.data.details;
      const { event, actions: action, result, observation_questions: observationList, action_plan_questions: actionPlanList, additional_action_plan_questions: additionalPlan, action_plan_evaluate_options: evaluateOptions,
      additional_action_plan_evaluate_options: additionalOptions,
      checkout_question: checkoutQuestions,
      additional_checkout_question: additionalCheckout,
      checkout_acknowledge: checkoutAcknowledge,
      additional_checkout_acknowledge: additionalAcknowledge,
       } = preparingDetails
      yield put(
        PreparingActions.setPreparingData('step1', preparingDetails.check_in),
      );
      yield put(
        PreparingActions.setPreparingData('step2', preparingDetails.purpose),
      );
      yield put(
        PreparingActions.setPreparingData(
          'step3',
          {event,
          action,
          result}
        ),
      );
      yield put(
        PreparingActions.setPreparingData(
          'step3B',
          {observationList},
        ),
      );
      yield put(
        PreparingActions.setPreparingData(
          'step4',
          { actionPlanList, additionalPlan }
        ),
      );
      yield put(
        PreparingActions.setPreparingData(
          'step4B',
          { evaluateOptions, additionalOptions }
        ),
      );
      yield put(
        PreparingActions.setPreparingData(
          'step5',
          { checkoutQuestions,  additionalCheckout}
        ),
      );
      yield put(
        PreparingActions.setPreparingData(
          'step5B',
          { checkoutAcknowledge, additionalAcknowledge }
        ),
      );
      yield put(PreparingActions.fetchCurrentPreparingSuccess());
    }
  } else {
    yield put(PreparingActions.fetchCurrentPreparingFailure(response.data));
  }
}

export function* closeFeedbackPreparing({ preparingId }) {
  const params = new URLSearchParams();
  params.append('preparing_id', preparingId);

  const response = yield call(api.postClosePreparing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(PreparingActions.closeFeedbackPreparingSuccess());
      yield NavigationService.navigate('ActiveFeedbackJourney');
    }
  }
}

function* watchPreparingSaga() {
  yield takeLatest(
    PreparingTypes.POST_FEEDBACK_PREPARING,
    postFeedbackPreparing,
  );
  yield takeLatest(
    PreparingTypes.UPDATE_FEEDBACK_PREPARING,
    updateFeedbackPreparing,
  );
  yield takeLatest(
    PreparingTypes.UPDATE_PREPARING_SCHEDULE,
    updatePreparingSchedule,
  );
  yield takeLatest(
    PreparingTypes.FETCH_CURRENT_PREPARING,
    fetchCurrentPreparing,
  );
  yield takeLatest(
    PreparingTypes.CLOSE_FEEDBACK_PREPARING,
    closeFeedbackPreparing,
  );
}

export default watchPreparingSaga;

import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import ReflectingActions, {
  ReflectingTypes,
} from 'app/store/feedback/ReflectingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const reflectingId = state => state.reflecting.get('id');
const step1Data = state => state.reflecting.get('step1');
const step2Data = state => state.reflecting.get('step2');
const step4Data = state => state.reflecting.get('step4');

export function* postFeedbackReflecting({ journeyId }) {
  // const connected = yield
  // checkInternetConnection();
  // if(!connected) {
  // return;
  // }

  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  const response = yield call(api.postFeedbackReflecting, params);
  if (response.ok) {
    if (response.data.status == 'ok') {
      const reflectingId = response.data.details.id;
      yield put(ReflectingActions.postFeedbackReflectingSuccess(reflectingId));
      yield NavigationService.navigate('FeedbackReflecting');
    }
  } else {
    yield put(ReflectingActions.postFeedbackReflectingFailure(response.data));
  }
}

export function* updateFeedbackReflecting({ data }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;
  const params = new URLSearchParams();
  const reflectId = yield select(reflectingId);
  const step1 = yield select(step1Data);
  const step2 = yield select(step2Data);
  const step4 = yield select(step4Data);

  params.append('reflecting_id', reflectId);
  params.append('feel_int', step1.data);
  params.append('how_did_you_do_int', step2.data.provideInfo);
  params.append('calm_int', step2.data.calmFeedback);
  params.append('listened_int', step2.data.listenToEmployee);
  params.append('gave_feedback_int', step2.data.gaveFeedbackSoon);
  params.append('established_rapport_int', step2.data.establishRapport);
  params.append('clearly_stated_purpose_int', step2.data.clearlyStatePurpose);
  params.append(
    'involved_employee_action_plan_int',
    step2.data.involveEmployee,
  );
  params.append('documented_int', step2.data.documentAndSend);
  params.append('dev_plan_stop_doing', step4.data.stopDoing);
  params.append('dev_plan_start_doing', step4.data.startDoing);
  params.append('dev_plan_stop_doing', step4.data.continueDoing);

  const response = yield call(api.updateFeedbackReflecting, params);
  debugger;
  if (response.ok) {
    if (response.data.status == 'ok') {
      yield put(ReflectingActions.updateFeedbackReflectingSuccess());
      yield put(ReflectingActions.closeFeedbackReflecting(reflectId));
    }
  } else {
    yield put(ReflectingActions.updateFeedbackReflectingFailure(response.data));
  }
}

export function* fetchCurrentReflecting({ reflectingId }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;

  const params = new URLSearchParams();
  params.append('reflecting_id', reflectingId);

  const response = yield call(api.getCurrentReflecting, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const reflectDetails = response.data.details;
      const { 
        how_did_you_do: provideInfo,
        calm: calmFeedback,
        listened: listenToEmployee,
        gave_feedback: gaveFeedbackSoon,
        established_rapport: establishRapport,
        clearly_stated_purpose: clearlyStatePurpose,
        involved_employee_action_plan: involveEmployee,
        // clear_next_steps: ,
        documented: documentAndSend,
        // development_plan: ,
        dev_plan_stop_doing: stopDoing,
        dev_plan_start_doing: startDoing,
        dev_plan_continue_doing: continueDoing,
        action_plans: actionPlans,
      } = reflectDetails;
      yield put(ReflectingActions.setReflectingData('step1', reflectDetails.feel));
      yield put(ReflectingActions.setReflectingData('step2', 
      {
        provideInfo,
        calmFeedback,
        listenToEmployee,
        gaveFeedbackSoon,
        establishRapport,
        clearlyStatePurpose,
        involveEmployee,
        documentAndSend,
      }))
      yield put(ReflectingActions.setReflectingData('step4', {
        stopDoing,
        startDoing,
        continueDoing,
      }))
      yield put(ReflectingActions.setReflectingData('step5', actionPlans))
      yield put(ReflectingActions.fetchCurrentReflectingSuccess())
    }
  } else {
    yield put(ReflectingActions.fethCurrentReflectingFailure(response.data));
  }
}

export function* closeFeedbackReflecting({ reflectingId }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;

  const params = new URLSearchParams();
  params.append('reflecting_id', reflectingId);
  const response = yield call(api.postCloseReflecting, params);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(ReflectingActions.closeFeedbackReflectingSuccess());
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'reflecting',
      });
    }
  } else {
    yield put(ReflectingActions.closeFeedbackReflectingFailure(response.data));
  }
}

export function* fetchStaffRatings() {
  //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;

  const params = new URLSearchParams();
  const response = yield call(api.getStaffRatings);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const ratings = response.data.details.feedback_list;
      yield put(ReflectingActions.fetchStaffRatingsSuccess(ratings));
    }
  } else {
    yield put(ReflectingActions.fetchStaffRatingsFailure(response.data));
  }
}

function* watchReflectingSaga() {
  yield takeLatest(
    ReflectingTypes.POST_FEEDBACK_REFLECTING,
    postFeedbackReflecting,
  );
  yield takeLatest(
    ReflectingTypes.UPDATE_FEEDBACK_REFLECTING,
    updateFeedbackReflecting,
  );
  yield takeLatest(
    ReflectingTypes.FETCH_CURRENT_REFLECTING,
    fetchCurrentReflecting,
  );
  yield takeLatest(
    ReflectingTypes.CLOSE_FEEDBACK_REFLECTING,
    closeFeedbackReflecting,
  );
  yield takeLatest(ReflectingTypes.FETCH_STAFF_RATINGS, fetchStaffRatings);
}

export default watchReflectingSaga;

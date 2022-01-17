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
  debugger;
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
  
  debugger;
  params.append('reflecting_id', reflectId);
  params.append('feel_int', step1.data);
  params.append('how_did_you_do_int',step2.data.provideInfo);
  params.append('calm_int', step2.data.calmFeedback);
  params.append('listened_int', step2.data.listenToEmployee);
  params.append('gave_feedback_int', step2.data.gaveFeedbackSoon);
  params.append('established_rapport_int', step2.data.establishRapport);
  params.append('clearly_stated_purpose_int', step2.data.clearlyStatePurpose);
  params.append('involved_employee_action_plan_int', step2.data.involveEmployee);
  params.append('documented_int', step2.data.documentAndSend);

  const response = yield call(api.updateFeedbackReflecting, params);
  debugger;
  if (response.ok) {
    if (response.data.status == 'ok') {
      yield put(ReflectingActions.updateFeedbackReflectingSuccess());
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
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      // yield put(ReflectingActions.fetchCurrentReflectingSuccess())
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
  const response = yield call(api.closeFeedbackReflecting, params);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      // yield put(ReflectingActions.closeFeedbackReflectingSuccess());
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

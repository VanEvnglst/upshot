import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import ReflectingActions, {
  ReflectingTypes,
} from 'app/store/feedback/ReflectingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';
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
  const flow = yield select(state => state.feedback.get('chosenFlow'));
  const type = yield select(state => state.feedback.get('chosenType'));
  const params = new URLSearchParams();
  params.append('journey_id', journeyId);
  
  const response = yield call(api.postFeedbackReflecting, params);
  if (response.ok) {
    if (response.data.status == STATUS_OK) {
      const reflectingId = response.data.details.id;
      yield put(ReflectingActions.postFeedbackReflectingSuccess(reflectingId));
      yield NavigationService.navigate('FeedbackReflecting');
    }
  } else if (response.status === 500) {
    yield put(ReflectingActions.postFeedbackReflectingFailure("Server error"));
  } else {
    yield put(ReflectingActions.postFeedbackReflectingFailure(response.data))
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

  var criteriaStr = '[';
  step2.data.forEach((item, index) => {
    if (index !== step2.data.length - 1)
    criteriaStr += `{ "c_id": "${item.id}", "score": "${item.score}"},`;
    else criteriaStr += `{ "c_id": "${item.id}", "score": "${item.score}"}`;
  });
  criteriaStr += ']';
  
  params.append('reflecting_id', reflectId);
  params.append('feel_int', step1.data);
  params.append('reflection_scores', criteriaStr);
  params.append('dev_plan_stop_doing', step4.data.stopDoing);
  params.append('dev_plan_start_doing', step4.data.startDoing);
  params.append('dev_plan_continue_doing', step4.data.continueDoing);
  const response = yield call(api.updateFeedbackReflecting, params);

  if (response.ok) {
    if (response.data.status == STATUS_OK) {
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
    if (response.data.status === STATUS_OK) {
      const reflectDetails = response.data.details;
      const { 
        dev_plan_stop_doing: stopDoing,
        dev_plan_start_doing: startDoing,
        dev_plan_continue_doing: continueDoing,
        action_plans: actionPlans,
      } = reflectDetails;
      yield put(ReflectingActions.setReflectingData('step1', reflectDetails.feel));
      yield put(ReflectingActions.setReflectingData('step2', 
      reflectDetails.reflection_scores))
      yield put(ReflectingActions.setReflectingData('step4', {
        stopDoing,
        startDoing,
        continueDoing,
      }))
      //TODO: to be adjusted for on the spot
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
  
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
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
    if (response.data.status === STATUS_OK) {
      const ratings = response.data.details.feedback_list;
      yield put(ReflectingActions.fetchStaffRatingsSuccess(ratings));
    }
  } else {
    yield put(ReflectingActions.fetchStaffRatingsFailure(response.data));
  }
}

export function* fetchReflectingCriteria() {
  //const connected = yield checkInternetConnection();
  // if(!connected) {} return;
  const type = yield select(state => state.feedback.get('chosenType'));
  const flow = yield select(state => state.feedback.get('chosenFlow'));
  const params = new URLSearchParams();
  params.append('feedback_flow', flow.id);
  params.append('pos_or_cor', type.id);

  const response = yield call(api.getReflectingCriteria, params);
  if(response.ok) {
    if (response.data.status === STATUS_OK) {
      const criteriaList = response.data.details.criteria_list.criteria;
      yield put(ReflectingActions.fetchReflectingCriteriaSuccess(criteriaList))
    } else {
      yield put(ReflectingActions.fetchReflectingCriteriaFailure(response.data));  
    }
  } else {
    yield put(ReflectingActions.fetchReflectingCriteriaFailure());
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
  yield takeLatest(ReflectingTypes.FETCH_REFLECTING_CRITERIA, fetchReflectingCriteria);
}

export default watchReflectingSaga;

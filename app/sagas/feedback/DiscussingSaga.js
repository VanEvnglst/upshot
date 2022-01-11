import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DiscussingActions, { DiscussingTypes } from 'app/store/feedback/DiscussingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

export function* postFeedbackDiscussing({ data }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  // return;
  // }

  const response = yield call(api.postFeedbackDiscussing, data);
  if (response.ok) {
    if (response.data.status === 'ok') {}
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data))
  }
}

export function* updateFeedbackDiscussing({ data }) {
  const response = yield call(api.postFeedbackDiscussing, data);
  if (response.ok) {
    if (response.data.status === 'ok') {}
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data))
  }

}

export function* updateDiscussingReminder({ data }) {
  const response = yield call(api.postFeedbackDiscussing, data);
  if (response.ok) {
    if (response.data.status === 'ok') {}
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data))
  }
  
}

export function* fetchCurrentDiscussing({ discussingId }) {
  const response = yield call(api.postFeedbackDiscussing, data);
  if (response.ok) {
    if (response.data.status === 'ok') {}
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data))
  }

}

export function* closeFeedbackDiscussing({ discussingId }) {
  const response = yield call(api.postFeedbackDiscussing, data);
  if (response.ok) {
    if (response.data.status === 'ok') {}
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data))
  }
};


function* watchDiscussingSaga() {
  yield takeLatest(
    DiscussingTypes.POST_FEEDBACK_DISCUSSING,
    postFeedbackDiscussing
  );
  yield takeLatest(
    DiscussingTypes.UPDATE_FEEDBACK_DISCUSSING,
    updateFeedbackDiscussing
  );
  yield takeLatest(
    DiscussingTypes.UPDTE_DISCUSSING_REMINDER,
    updateDiscussingReminder
  );
  yield takeLatest(
    DiscussingTypes.FETCH_CURRENT_DISCUSSING,
    fetchCurrentDiscussing,
  );
  yield takeLatest(
    DiscussingTypes.CLOSE_FEEDBACK_DISCUSSING,
    closeFeedbackDiscussing,
  );
}

export default watchDiscussingSaga;
import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DiscussingActions, {
  DiscussingTypes,
} from 'app/store/feedback/DiscussingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const discussingId = state => state.discussing.get('id');

export function* postFeedbackDiscussing({ journeyId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  // return;
  // }
  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  const response = yield call(api.postFeedbackDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const discussingId = response.data.details.id;
      yield put(DiscussingActions.postFeedbackDiscussingSuccess(discussingId));
      yield NavigationService.navigate('DiscussingMeeting');
    }
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data));
  }
}

export function* updateFeedbackDiscussing({ data }) {
  const params = new URLSearchParams();
  const discussId = yield select(discussingId);
 
  var plansList = '[{';
    plansList += `"what": ${data.specificAction}`;
    plansList += `"when": ${data.whenWillItHappen}`;
    plansList += `"who": ${data.whoWillMakeIt}`;
    plansList += '}]';
  params.append('discussing_id', discussId);
  params.append('plans', plansList);
  
  const response = yield call(api.updateFeedbackDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DiscussingActions.updateFeedbackDiscussingSuccess());
      yield put(DiscussingActions.closeFeedbackDiscussing(discussId));
      yield put(DiscussingActions.setDiscussingStatus('closed', true));
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'discussing',
      });
    }
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data));
  }
}

export function* updateDiscussingReminder({ data }) {
  const params = new URLSearchParams();
  const discussId = yield select(discussingId);
  params.append('discussing_id', discussId);
  params.append('reminder_date', data.reminderDate);
  const response = yield call(api.updateFeedbackDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DiscussingActions.updateFeedbackDiscussingSuccess())
      yield NavigationService.navigate('ActiveFeedbackJourney');
    }
  } else {
    yield put(DiscussingActions.updateFeedbackDiscussingFailure(response.data));
  }
}

export function* fetchCurrentDiscussing({ discussingId }) {
  const params = new URLSearchParams();
  params.append('discussing_id', discussingId);

  const response = yield call(api.getCurrentDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      // const discussingDetails = response.data.details;
      // yield put(DiscussingActions.fetchCurrentDiscussingSuccess())
      
    }
  } else {
    yield put(DiscussingActions.fetchCurrentDiscussingFailure(response.data));
  }
}

export function* closeFeedbackDiscussing({ discussingId }) {
  const params = new URLSearchParams();
  params.append('discussing_id', discussingId);
  const response = yield call(api.postCloseDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DiscussingActions.closeFeedbackDiscussingSuccess());
    }
  } else {
    yield put(DiscussingActions.closeFeedbackDiscussingFailure(response.data));
  }
}

function* watchDiscussingSaga() {
  yield takeLatest(
    DiscussingTypes.POST_FEEDBACK_DISCUSSING,
    postFeedbackDiscussing,
  );
  yield takeLatest(
    DiscussingTypes.UPDATE_FEEDBACK_DISCUSSING,
    updateFeedbackDiscussing,
  );
  yield takeLatest(
    DiscussingTypes.UPDATE_DISCUSSING_REMINDER,
    updateDiscussingReminder,
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

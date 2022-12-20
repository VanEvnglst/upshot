import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackHistoryActions, {
  FeedbackHistoryTypes,
} from 'app/store/feedback/FeedbackHistoryRedux';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

export function* fetchActiveJourneys() {
  const response = yield call(api.getFeedbackPortfolio);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const journeyList = response.data.portfolio;
      yield put(FeedbackHistoryActions.fetchActiveJourneysSuccess(journeyList));
    } else {
      yield put(FeedbackHistoryActions.fetchActiveJourneysFailure(response.data));
    }
  } else {
    yield put(FeedbackHistoryActions.fetchActiveJourneysFailure(response.data));
  }
}

export function* fetchRecentJourneys() {
  const response = yield call(api.getClosedFeedbackJourneys);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const recentList = response.data.details;
      yield put(FeedbackHistoryActions.fetchRecentJourneysSuccess(recentList));
    } else {
      yield put(
        FeedbackHistoryActions.fetchRecentJourneysFailure(response.data),
      );
    }
  } else {
    yield put(FeedbackHistoryActions.fetchRecentJourneysFailure());
  }
}


export function* fetchUserActivity() {
  const response = yield call(api.getUserActivity);
  if (response.ok) {
    if (response.data.status == STATUS_OK) {
      const assessment = response.data.result.assessment_progress.replace('.00%', '%');
      const userActivity = {
        assessmentProgress: assessment,
        ...response.data.result
      }
      yield put(FeedbackHistoryActions.fetchUserActivitySuccess(userActivity));
    } else {
      yield put(FeedbackHistoryActions.fetchUserActivityFailure(response.data));
    }
  } else {
    yield put (FeedbackHistoryActions.fetchUserActivityFailure(response.data));
  }
}

export function* fetchOngoingJourney() { 
  const response = yield call(api.getOngoingJourney);

  if (response.ok) { 
    if (response.data.status === STATUS_OK) {
      const ongoingJourneysList = response.data.active_ongoing_journeys;
      yield put(FeedbackHistoryActions.fetchOngoingJourneySuccess(ongoingJourneysList));
    } else { 
      yield put(FeedbackHistoryActions.fetchOngoingJourneyFailure(response.data));
    }
  } else { 
    yield put(FeedbackHistoryActions.fetchOngoingJourneyFailure(response.data));
  }
}

function* watchFeedbackHistorySaga() {
  yield takeLatest(
    FeedbackHistoryTypes.FETCH_ACTIVE_JOURNEYS,
    fetchActiveJourneys,
  );
  yield takeLatest(
    FeedbackHistoryTypes.FETCH_RECENT_JOURNEYS,
    fetchRecentJourneys,
  );
  yield takeLatest(
    FeedbackHistoryTypes.FETCH_USER_ACTIVITY, fetchUserActivity
  );
  yield takeLatest(
    FeedbackHistoryTypes.FETCH_ONGOING_JOURNEY, fetchOngoingJourney
  );
}

export default watchFeedbackHistorySaga;

import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import FeedbackHistoryActions, {
  FeedbackHistoryTypes,
} from 'app/store/feedback/feedbackHistoryRedux';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

export function* fetchActiveJourneys() {
  const response = yield call(api.getOpenFeedbackJourneys);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const journeyList = response.data.details;
      yield put(FeedbackHistoryActions.fetchActiveJourneysSuccess(journeyList));
    } else {
      yield put(FeedbackHistoryActions.fetchActiveJourneysFailure());
    }
  } else {
    yield put(FeedbackHistoryActions.fetchActiveJourneysFailure());
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

function* watchFeedbackHistorySaga() {
  yield takeLatest(
    FeedbackHistoryTypes.FETCH_ACTIVE_JOURNEYS,
    fetchActiveJourneys,w
  );
  yield takeLatest(
    FeedbackHistoryTypes.FETCH_RECENT_JOURNEYS,
    fetchRecentJourneys,
  );
}

export default watchFeedbackHistorySaga;

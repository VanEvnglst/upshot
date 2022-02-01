import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import SharingActions, { SharingTypes } from 'app/store/feedback/SharingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';
const sharing = state => state.sharing.get('id');

export function* postFeedbackSharing({ journeyId }) {
  // const connected = yield checkInternetConnection();
  // if(!connected ) { return }
  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  const response = yield call(api.postFeedbackSharing, params);
  debugger;
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const sharingId = response.data.details.id;
      yield put(SharingActions.postFeedbackSharingSuccess(sharingId));
      yield NavigationService.navigate('FeedbackSharing');
    }
  } else {
    yield put(SharingActions.postFeedbackSharingFailure(response.data));
  }
}

export function* updateFeedbackSharing({ data }) {
  //const connected = yield checkInternetConnection();
  // if(!connected) { return };
  debugger;
  const params = new URLSearchParams();
  const sharingId = yield select(sharing);
  params.append('sharing_id', sharingId);
  // params.append('event_str')
  // params.append('action_str');
  // params.append('result_str');
  // params.append('message_str');

  const response = yield call(api.updateFeedbackSharing, params);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(SharingActions.updateFeedbackSharingSuccess());
      yield put(SharingActions.closeFeedbackSharing(sharingId));
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'sharing',
      });
    }
  } else {
    yield put(SharingActions.updateFeedbackSharingFailure(response.data));
  }
}

export function* updateFeedbackSharingReminder({ data }) {
  const params = new URLSearchParams();
  debugger;
  const sharingId = yield select(sharing);
  params.append('sharing_id', sharingId);
  // params.append('reminder_datetime', )
  
  const response = yield call(api.updateFeedbackSharing, params);
  if(response.ok) {
    if(response.data.status === STATUS_OK) {
      yield put(SharingActions.updateFeedbackSharingSuccess())
      yield NavigationService.navigaate('ActiveFeedbackJourney');
    }
  } else {
    yield put(SharingActions.updateFeedbackSharingFailure(response.data));
  }
}

export function* fetchCurrentSharing({ sharingId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) { return };
  const params = new URLSearchParams();
  // const sharingId = yield select(sharing);
  params.append('sharing_id', sharingId);

  const response = yield call(api.getCurrentSharing, params);
  debugger
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      //TODO: set items to state if success
      yield put(SharingActions.fetchCurrentSharingSuccess())
    }
  } else {
    yield put (SharingActions.fetchCurrentSharingFailure(response.data))
  }
}


export function* closeFeedbackSharing({ sharingId }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) { return };

  const params = new URLSearchParams();
  // const sharingId = yield select(sharing);
  params.append('sharing_id', sharingId);

  const response = yield call(api.postCloseSharing, params);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(SharingActions.closeFeedbackSharingSuccess())
      yield put(SharingActions.setSharingStatus('closed', true));
    }
  } else {
    yield put(SharingActions.closeFeedbackSharingFailure(response.data))
  }
}




function* watchSharingSaga() {
  yield takeLatest(SharingTypes.POST_FEEDBACK_SHARING, postFeedbackSharing);
  yield takeLatest(SharingTypes.UPDATE_FEEDBACK_SHARING, updateFeedbackSharing);
  yield takeLatest(SharingTypes.UPDATE_FEEDBACK_SHARING_REMINDER, updateFeedbackSharingReminder);
  yield takeLatest(SharingTypes.FETCH_CURRENT_SHARING, fetchCurrentSharing);
  yield takeLatest(SharingTypes.CLOSE_FEEDBACK_SHARING, closeFeedbackSharing);
}

export default watchSharingSaga;

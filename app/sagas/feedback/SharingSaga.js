import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import SharingActions, { SharingTypes } from 'app/store/feedback/SharingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';
const sharing = state => state.sharing.get('id');

export function* postFeedbackSharing({ journeyId }) {
  const connected = yield checkInternetConnection();
  // if(!connected ) { return }
  const sharingData = { 
    journey_id: journeyId,
  }

  const response = yield call(api.postFeedbackSharing, sharingData);
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
  const connected = yield checkInternetConnection();
  // if(!connected) { return };
  const { message, details } = data;

  const sharingId = yield select(sharing);
  const sharingData = { 
    sharing_id: sharingId,
    event_str: details.event,
    action_str: details.action,
    result_str: details.result,
    message_str: message
  }

  const response = yield call(api.updateFeedbackSharing, sharingData);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(SharingActions.updateFeedbackSharingSuccess());
      if (data.shouldClose) {
        yield put(SharingActions.closeFeedbackSharing(sharingId))
      } else {
        yield NavigationService.navigate('ActiveFeedbackJourney');
        yield put(SharingActions.resetSharingState());
      }
    }
  } else {
    yield put(SharingActions.updateFeedbackSharingFailure(response.data));
  }
}

export function* updateSharingReminder({ data }) {  
  const sharingId = yield select(sharing);
  const sharingData = {
    sharing_id: sharingId,
    reminder: data.reminderDate
  }
  const response = yield call(api.updateFeedbackSharing, sharingData);
  if(response.ok) {
    if(response.data.status === STATUS_OK) {
      yield put(SharingActions.updateFeedbackSharingSuccess())
      yield NavigationService.navigate('ActiveFeedbackJourney');
    }
  } else {
    yield put(SharingActions.updateFeedbackSharingFailure(response.data));
  }
}

export function* fetchCurrentSharing({ sharingId }) {
  const connected = yield checkInternetConnection();
  // if (!connected) { return };

  const sharingData = {
    sharing_id: sharingId,
  }
  const response = yield call(api.getCurrentSharing, sharingData);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const sharingDetails = response.data.details;
      yield put(SharingActions.setSharingData('step1', {
        event: handleData(sharingDetails.event), 
        action: handleData(sharingDetails.action),
        result: handleData(sharingDetails.result)
      }));
      yield put(SharingActions.setSharingData('step2', 
        handleData(sharingDetails.message)
      ));
      yield put(SharingActions.fetchCurrentSharingSuccess())
    }
  } else {
    yield put (SharingActions.fetchCurrentSharingFailure(response.data))
  }
}


export function* closeFeedbackSharing({ sharingId }) {
  const connected = yield checkInternetConnection();
  // if (!connected) { return };

  const sharingData = {
    sharing_id: sharingId,
  }

  const response = yield call(api.postCloseSharing, sharingData);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(SharingActions.closeFeedbackSharingSuccess())
      yield put(SharingActions.setSharingStatus('closed', true));
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'sharing',
      });
    }
  } else {
    yield put(SharingActions.closeFeedbackSharingFailure(response.data))
  }
}


function handleData(content) {
  const dataValue = content === null ? '' : content

  return dataValue;
}

function* watchSharingSaga() {
  yield takeLatest(SharingTypes.POST_FEEDBACK_SHARING, postFeedbackSharing);
  yield takeLatest(SharingTypes.UPDATE_FEEDBACK_SHARING, updateFeedbackSharing);
  yield takeLatest(SharingTypes.UPDATE_SHARING_REMINDER, updateSharingReminder);
  yield takeLatest(SharingTypes.FETCH_CURRENT_SHARING, fetchCurrentSharing);
  yield takeLatest(SharingTypes.CLOSE_FEEDBACK_SHARING, closeFeedbackSharing);
}

export default watchSharingSaga;

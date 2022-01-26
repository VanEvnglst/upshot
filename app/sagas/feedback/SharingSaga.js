import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import SharingActions, { SharingTypes } from 'app/store/feedback/SharingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';
import watchDocumentingSaga from './DocumentingSaga';

const STATUS_OK = 'ok';

export function* postFeedbackSharing({ journeyId }) {
  // const connected = yield checkInternetConnection();
  // if(!connected ) { return }
  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  // const response = yield call(api.postFeedbacksharing, params);
  // if (response.ok) {
  //   if (response.data.status === STATUS_OK) {
  //     const sharingId = response.data.details.id;
  //     yield put(SharingActions.postFeedbackSharingSuccess(sharingId));
  //   }
  // } else {
  //   yield put(SharingActions.postFeedbackSharingFailure(response.data));
  // }
}

export function* updateFeedbackSharing({ data }) {
  //const connected = yield checkInternetConnection();
  // if(!connected) { return };
  const params = new URLSearchParams();
  // params.append()

  // const response = yield call(api.updateFeedbackSharing, params);
  // if (response.ok) {
  //   if (response.data.status === STATUS_OK) {
  //     yield put(SharingActions.updateFeedbackSharingSuccess());
  //   }
  // } else {
  //   yield put(SharingActions.updateFeedbackSharingFailure(response.data));
  // }
}


export function* fetchCurrentSharing({ sharingId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) { return };
  // const params = new URLSearchParams();
  // params.append('sharing_id', sharingId);

  // const response = yield call(api.getCurrentSharing, params);

  // if (response.ok) {
  //   if (response.data.status === STATUS_OK) {
  //     yield put(SharingActions.fetchCurrentSharingSuccess())
  //   }
  // } else {
  //   yield put (SharingActions.fetchCurrentSharingFailure(response.data))
  // }
}


export function* closeFeedbackSharing({ sharingId }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) { return };

  // const params = new URLSearchParams();
  // params.append('sharing_id', sharingId);

  // const response = yield call(api.postCloseSharing, params);
  // if (response.ok) {
  //   if (response.data.status === STATUS_OK) {
  //     yield put(SharingActions.closeFeedbackSharingSuccess())
  //   }
  // } else {
  //   yield put(SharingActions.closeFeedbackSharingFailure(response.data))
  // }
}




function* watchSharingSaga() {
  yield takeLatest(SharingTypes.POST_FEEDBACK_SHARING, postFeedbackSharing);
  yield takeLatest(SharingTypes.UPDATE_FEEDBACK_SHARING, updateFeedbackSharing);
  yield takeLatest(SharingTypes.FETCH_CURRENT_SHARING, fetchCurrentSharing);
  yield takeLatest(SharingTypes.CLOSE_FEEDBACK_SHARING, closeFeedbackSharing);
}

export default watchSharingSaga;

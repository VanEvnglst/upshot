import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import RecordEntryActions, { RecordEntryTypes } from 'app/store/feedback/RecordEntryRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';


export function* postRecordEMEntry() {
    /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */
  const payload = {
    capture_fb_id: '',
    employee_do: '',
    impact: '',
    do_more: '',
    continue_doing: '',
    do_less: '',
    stop_doing: '',
    additional_notes: '',
  };
  

  const response = yield call(api.postRecordEMEntry, payload);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(RecordEntryActions.postRecordEntrySuccess(response.data));
      yield put(RecordEntryActions.postCloseRecordEntry());
      yield NavigationService.navigate('Feedback Entry Confirmation');
    } else {
      yield put(RecordEntryActions.postRecordEntryFailure(response.data));
    }
  } else {
    yield put(RecordEntryActions.postRecordEntryFailure(response.data));
  }
}

export function* postEditEntry() {
    /* const connected = yield checkInternetConnection();
    if (!connected) {
      return;
    } */

  const payload = {
    capture_fb_id: '',
    employee_do: '',
    impact: '',
    do_more: '',
    continue_doing: '',
    do_less: '',
    stop_doing: '',
    additional_notes: '',
    last_active_step: '',
  };

  const response = yield call(api.postEditEMEntry, payload);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      yield put(RecordEntryActions.postEditEntrySuccess(response.data));      
    } else {
      yield put(RecordEntryActions.postEditEntryFailure(response.data))
    }
  } else {
    yield put(RecordEntryActions.postEditEntryFailure(response.data))
  }
}

export function* postCloseRecordEntry() {
    const connected = yield checkInternetConnection();
    /* if (!connected) {
      return;
    } */

    const payload = {
      fb_id: '',
    };

    const response = yield call(api.postCloseRecordEntry, payload);
    if (response.ok) {
      if (response.data.status === STATUS_OK) {
        yield put(RecordEntryActions.postCloseRecordEntrySuccess())
      } else {
        yield put(RecordEntryActions.postCloseRecordEntryFailure(response.data));
      }
    } else {
      yield put(RecordEntryActions.postCloseRecordEntryFailure(response.data));
    }
};



function* watchRecordEntrySaga() {

}

export default watchRecordEntrySaga;
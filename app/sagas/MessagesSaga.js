import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import MessagesActions, { MessagesTypes } from 'app/store/MessagesRedux';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

export function* fetchMessages({}) {
  // const connected = yield checkInternetConnection();
  // if (!connected ) { return; }
  
  const response = yield call(api.getFrontlinerMessages);
  if(response.ok) {
    if (response.data.status === STATUS_OK) {
      const messagesList = response.data.inbox;
      yield put(MessagesActions.fetchMessagesSuccess(messagesList))
    } else {
      yield put(MessagesActions.fetchMessagesFailure())
    }
  } else {
    yield put(MessagesActions.fetchMessagesFailure(response.data))
  }
}

export function* fetchMessage({ messageId}) {
  //const connected = yield checkInternetConnection();
  // if (!connected) { return; }

  const params = new URLSearchParams();
  params.append('message_id', messageId);

  const response = yield call(api.getMessage, params);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      debugger;
      yield put(MessagesActions.fetchMessageSuccess(response.data.body))
    } else {
      yield put(MessagesActions.fetchMessagesFailure(response.data));
    }
  } else {
    yield put(MessagesActions.fetchMessagesFailure(response.data))
  }
}


function* watchMessagesSaga() {
  yield takeLatest(MessagesTypes.FETCH_MESSAGES, fetchMessages);
  yield takeLatest(MessagesTypes.FETCH_MESSAGE, fetchMessage);
}

export default watchMessagesSaga;
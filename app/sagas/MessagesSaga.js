import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';
import MessagesActions, { MessagesTypes } from 'app/store/MessagesRedux';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

export function* fetchMessages({}) {
  const connected = yield checkInternetConnection();
  // if (!connected ) { return; }

  const response = yield call(api.getFrontlinerMessages);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const messagesList = [];
      const messageArr = response.data.inbox;
      for(let i = 0; i < messageArr.length; i++) {
        messagesList.push({
          ...messageArr[i],
          isMessageRead: messageArr[i].from === 'Upshot' ? false : !messageArr[i].response_required,
        })
      }
      yield put(MessagesActions.fetchMessagesSuccess(messagesList));
    } else {
      yield put(MessagesActions.fetchMessagesFailure());
    }
  } else {
    yield put(MessagesActions.fetchMessagesFailure(response.data));
  }
}

export function* fetchMessage({ messageId }) {
  const connected = yield checkInternetConnection();
  // if (!connected) { return; }

  const messageData = {
    message_id: messageId,
  };

  const response = yield call(api.getMessage, messageData);
  debugger;
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      const responseData = response.data;
      // const dateArr = moment(responseData.when).format('LLLL').split(' ');
      // const formattedDate = `${dateArr[0]} ${dateArr[1]} ${dateArr[2]} ${dateArr[3]} at ${dateArr[4]} ${dateArr[5]}`;

      const message = {
        id: messageId,
        type: responseData.type,
        body: responseData.body
      }
      // const messageBody = {
      //   what: responseData.what,
      //   when: formattedDate,
      // };
      debugger;
      yield put(MessagesActions.fetchMessageSuccess(message));
    } else {
      yield put(MessagesActions.fetchMessagesFailure(response.data));
    }
  } else {
    yield put(MessagesActions.fetchMessagesFailure(response.data));
  }
}

export function* postMessageResponse({ data }) {
  debugger;
  const params = new URLSearchParams();
  params.append('message_id');
  params.append('accepted');
  params.append('reason');

  const messageData = {
    message_id: '',
    accepted: '',
    reason: '',
  };

  const response = yield call(api.postMessageResponse, params);
  if (response.ok) {
    if (response.data.status === STATUS_OK) {
      debugger;
      yield put(MessagesActions.postMessageResponseSuccess());
    } else {
      yield put(MessagesActions.postMessageResponseFailure(response.data));
    }
  } else {
    yield put(MessagesActions.postMessageResponseFailure(response.data));
  }
}

function* watchMessagesSaga() {
  yield takeLatest(MessagesTypes.FETCH_MESSAGES, fetchMessages);
  yield takeLatest(MessagesTypes.FETCH_MESSAGE, fetchMessage);
  yield takeLatest(MessagesTypes.POST_MESSAGE_RESPONSE, postMessageResponse);
}

export default watchMessagesSaga;

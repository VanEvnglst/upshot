import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import AuthenticationActions, {
  AuthenticationTypes,
} from 'app/store/AuthenticationRedux';
import UserActions from 'app/store/UserRedux';
import api from 'app/services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RESULT_SUCCESS = 'success';
const RESULT_ERROR = 'error';

export function* signInUser({ data }) {
  const params = new URLSearchParams();
  params.append('email', data.email);
  params.append('passwd', data.password);
  params.append('reg_token', data.token);

  const connected = yield checkInternetConnection();
  if (!connected) {
    //   //yield showNetworkError();
    return;
  }
  const authResponse = yield call(api.signIn, params);
  if (authResponse.ok) {
    if (authResponse.data.result === RESULT_SUCCESS) {
      yield AsyncStorage.setItem('uniqueId', authResponse.data.uuid);
      yield put(UserActions.setUser(authResponse.data.user))
      yield put(AuthenticationActions.signInUserSuccess());
    } else {
      yield put(
        AuthenticationActions.signInUserFailure(authResponse.data.details),
      );
    }
  } else {
    AuthenticationActions.signInUserFailure(authResponse.data);
  }
}

export function* fetchServer({ data }) {

  const emailArr = data.email.split('@');

  const response = yield call(api.getDirectory);
  if(response.ok) {
    const responseArr = response.data.result;
    const baseArr = responseArr.filter(server => server.key === emailArr[1]);
    const baseURL = baseArr[0].server;
    debugger;
    yield AsyncStorage.setItem('baseURL', baseURL);
    yield put(AuthenticationActions.fetchServerSuccess());
    yield put(AuthenticationActions.signInUser(data));
  }
}


function* watchAuthenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN_USER, signInUser);
  yield takeLatest(AuthenticationTypes.FETCH_SERVER, fetchServer);
}

export default watchAuthenticationSaga;

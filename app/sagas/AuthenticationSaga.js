import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import AuthenticationActions, {
  AuthenticationTypes,
} from 'app/store/AuthenticationRedux';
import UserActions from 'app/store/UserRedux';
import api from 'app/services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as NavigationService from 'app/services/NavigationService';

const RESULT_SUCCESS = 'success';
const RESULT_ERROR = 'error';

export function* signInUser({ data }) {
  const auth = { 
    email: data.email,
    password: data.password,
    // reg_token: data.token,
  }
  const connected = yield checkInternetConnection();
  if (!connected) {
    //   //yield showNetworkError();
   // return;
  }
  const authResponse = yield call(api.signIn, auth);
  debugger;
  if (authResponse.ok) {
    if (authResponse.data.status === 'ok') {
      yield AsyncStorage.setItem('uniqueId', authResponse.data.uuid);
      // yield put(UserActions.setUser(authResponse.data.user));
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
  
  if (response.ok) {
    const responseArr = response.data.result;
    const baseArr = responseArr.filter(server => server.key === emailArr[1]);
    if (baseArr.length === 0)
      return yield put(
        AuthenticationActions.fetchServerFailure('Server not found'),
      );
    else {
      const baseURL = baseArr[0].server;
      yield AsyncStorage.setItem('baseURL', baseURL);
      yield put(AuthenticationActions.fetchServerSuccess());
      if (data.type === 'sign in')
      yield put(AuthenticationActions.signInUser(data));
      else
      yield put(AuthenticationActions.signUpUser(data));
    }
  } else {
    yield put(AuthenticationActions.fetchServerFailure(response.data));
  }
}


export function* signUpUser({ data }) {
  const auth = {
    name: data.name,
    email: data.email,
    password: data.password,
  }
  
  const connected = yield checkInternetConnection();
  if (!connected) {
    //   //yield showNetworkError();
   // return;
  }
  const authResponse = yield call(api.signUp, auth);
  if (authResponse.ok) {
    if (authResponse.data.status === 'ok') {
      yield AsyncStorage.setItem('uniqueId', authResponse.data.uuid);
      yield put(UserActions.setUser(auth.name));
      yield put(AuthenticationActions.signUpUserSuccess());
    } else {
      yield put(
        AuthenticationActions.signUpUserFailure(authResponse.data.details),
      );
    }
  } else {
    AuthenticationActions.signUpUserFailure(authResponse.data);
  }
}

export function* signOutUser() {
  yield NavigationService.navigateAndReset('Auth');
}

function* watchAuthenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN_USER, signInUser);
  yield takeLatest(AuthenticationTypes.FETCH_SERVER, fetchServer);
  yield takeLatest(AuthenticationTypes.SIGN_UP_USER, signUpUser);
  yield takeLatest(AuthenticationTypes.SIGN_OUT_USER, signOutUser);
}

export default watchAuthenticationSaga;

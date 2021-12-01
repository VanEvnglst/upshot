import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import AuthenticationActions, {
  AuthenticationTypes,
} from 'app/store/authenticationRedux';
import api from 'app/services/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';
const RESULT_SUCCESS = 'success';
const RESULT_ERROR = 'error';

export function* signInUser({ data }) {
  console.log('call mo to');
  const connected = yield checkInternetConnection();
  // if (!connected) {
  //   //yield showNetworkError();
  //   return;
  // }
  const authResponse = yield call(api.signIn, data);
  debugger;
  if (authResponse.ok) {
    if (authResponse.data.result === RESULT_SUCCESS) {
      console.log('auth ok', authResponse.data);
      AsyncStorage.setItem('uniqueId', authResponse.data.uuid);
      yield put(AuthenticationActions.signInUserSuccess());
    } else {
      console.log('auth err', authResponse.data);
      yield put(
        AuthenticationActions.signInUserFailure(authResponse.data.details),
      );
    }
  } else {
    AuthenticationActions.signInUserFailure();
    console.log('server err');
  }
}

function* watchAuthenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN_USER, signInUser);
}

export default watchAuthenticationSaga;

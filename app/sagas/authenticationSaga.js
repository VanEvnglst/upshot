import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import AuthenticationActions, {
  AuthenticationTypes,
} from '../store/authenticationRedux';

export function* signInUser() {
  const connected = yield checkInternetConnection();
  if (!connected) {
    //yield showNetworkError();
    return;
  }
  const authResponse = yield call(api.signInUser, { email, password });
  if (authResponse.ok) {
    console.log('auth ok');
  }
}

function* watchAuthenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN_USER, signInUser);
}

export default watchAuthenticationSaga;

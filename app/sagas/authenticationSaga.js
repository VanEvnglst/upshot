import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import AuthenticationActions, {
  AuthenticationTypes,
} from 'app/store/authenticationRedux';
import api from 'app/services/apiService';

export function* signInUser({ email, password }) {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  //   //yield showNetworkError();
  //   return;
  // }
  const authResponse = yield call(api.signIn, { email, password });
  if (authResponse.ok) {
    console.log('auth ok', authResponse.data);
  }
}

// export function* signUpUser({ email, password, firstName, lastName }) {
//   const connected = yield checkInternetConnection();

//   const response = yield call(api.signUp, {
//     email,
//     password,
//     firstName,
//     lastName,
//     token,
//     role
//   });
//   if (response.ok) {
//     console.log('res', response);
//   }
// }

function* watchAuthenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN_USER, signInUser);
}

export default watchAuthenticationSaga;

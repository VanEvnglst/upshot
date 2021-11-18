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
  const { email, passwd } = data;
  const connected = yield checkInternetConnection();
  // if (!connected) {
  //   //yield showNetworkError();
  //   return;
  // }
  // AsyncStorage.setItem('uniqueId', 'dabca8a9-2349-4840-98fa-2951c53cd67a');
  // yield put(AuthenticationActions.signInUserSuccess());
  // TODO: Find out why there's an error;
  debugger;
  const authResponse = yield call(api.signIn, { email, passwd });
  debugger;
  if (authResponse.ok) {
    if (authResponse.data.result === RESULT_SUCCESS) {
      debugger;
      console.log('auth ok', authResponse.data);
      // AsyncStorage.setItem('uniqueId', authResponse.data.uuid);
      yield put(AuthenticationActions.signInUserSuccess());
    } else {
      console.log('auth err', authResponse.data);
    }
  } else {
    AuthenticationActions.signInUserFailure();
    console.log('server err');
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

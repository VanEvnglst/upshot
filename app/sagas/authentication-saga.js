import {call, put, takeLatest, select} from 'redux-saga/effects';
import AuthenticationActions, {
  AuthenticationTypes,
} from '../store/authentication-redux';

export function* signInUser() {}

function* watchAuthenticationSaga() {
  yield takeLatest(AuthenticationTypes.SIGN_IN_USER, signInUser);
}

export default watchAuthenticationSaga;

import { call, put, takeLatest } from 'redux-saga/effects';
import UserActions, { UserTypes } from 'app/store/UserRedux';

export function* setUser() {
  const user = { firstName: 'Ivan' };
  yield put(UserActions.setUser(user));
}

function* watchUserSaga() {
  yield takeLatest(UserTypes.SET_USER, setUser);
}

export default watchUserSaga;

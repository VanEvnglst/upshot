import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import OnboardingActions, { OnboardingTypes } from 'app/store/OnboardingRedux';
import api from 'app/services/apiService';

export function* signUpUser({ data }) {
  const { email, password, firstName, lastName, token, role } = data;
  const connected = yield checkInternetConnection();

  const response = yield call(api.signUp, data);
  if (response.ok) {
    console.log('res', response.data);
  }
}

function* watchOnboardingSaga() {
  yield takeLatest(OnboardingTypes.SIGN_UP_USER, signUpUser);
}

export default watchOnboardingSaga;

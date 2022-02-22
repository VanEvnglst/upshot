import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import OnboardingActions, { OnboardingTypes } from 'app/store/OnboardingRedux';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from 'app/services/apiService';

const RESULT_SUCCESS = 'success';
export function* signUpUser({ data }) {
  const { email, password, firstName, lastName, token, role } = data;
  const params = new URLSearchParams();
  params.append('email', email);
  params.append('passwd', password);
  params.append('firstname', firstName);
  params.append('lastname', lastName);
  params.append('token', token);
  params.append('role', role);

  //const connected = yield checkInternetConnection();

  const response = yield call(api.signUp, params);
  if (response.ok) {
    if (response.data.result === RESULT_SUCCESS) {
      AsyncStorage.setItem('uniqueId', response.data.user.user_uuid);
      yield put(OnboardingActions.signUpUserSuccess());
      yield put(AuthenticationActions.setUserSignedIn());
    } else {
      OnboardingActions.signUpUserFailure(response.data.details);
    }
  } else {
    OnboardingActions.signUpUserFailure(response.data);
  }
}

function* watchOnboardingSaga() {
  yield takeLatest(OnboardingTypes.SIGN_UP_USER, signUpUser);
}

export default watchOnboardingSaga;

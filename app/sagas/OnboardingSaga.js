import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import OnboardingActions, { OnboardingTypes } from 'app/store/OnboardingRedux';
import AuthenticationActions from 'app/store/authenticationRedux';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from 'app/services/apiService';

const RESULT_SUCCESS = 'success';
export function* signUpUser({ data }) {
  //const connected = yield checkInternetConnection();

  const response = yield call(api.signUp, data);
  debugger;
  if (response.ok) {
    if (response.data.result === RESULT_SUCCESS) {
      AsyncStorage.setItem('uniqueId', response.data.user.user_uuid);
      yield put(OnboardingActions.signUpUserSuccess());
      yield put(AuthenticationActions.setUserSignedIn());
    } else {
      console.log('register error', response.data);
      OnboardingActions.signUpUserFailure(response.data);
    }
  } else {
    OnboardingActions.signUpUserFailure();
  }
}

function* watchOnboardingSaga() {
  yield takeLatest(OnboardingTypes.SIGN_UP_USER, signUpUser);
}

export default watchOnboardingSaga;

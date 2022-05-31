import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import moment from 'moment';
import SurveyActions, { SurveyTypes } from 'app/store/frontliner/SurveyRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const STATUS_OK = 'ok';

export function* postDRSurvey({ data }) {
  const connected = yield checkInternetConnection();

  // const response = yield call()
}

export function* updateDRSurvey({ data }) {
  const connected = yield checkInternetConnection();

  // const response = yield call()
}

export function* fetchCurrentDRSurvey({ surveyId }) {
  const connected = yield checkInternetConnection();

  //const response = yield call()
}

function* watchSurveySaga() {
  yield takeLatest(SurveyTypes.POST_DR_SURVEY, postDRSurvey);
  yield takeLatest(SurveyTypes.UPDATE_DR_SURVEY, updateDRSurvey);
  yield takeLatest(SurveyTypes.FETCH_CURRENT_DR_SURVEY, fetchCurrentDRSurvey);
}

export default watchSurveySaga;
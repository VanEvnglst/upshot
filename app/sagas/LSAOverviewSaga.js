import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import LSAOverviewActions, { LSAOverviewTypes } from 'app/store/LSAOverviewRedux';
import api from 'app/services/apiService';
import lsaOverview from 'app/models/LSAOverviewModel';

const STATUS_OK = 'ok';


export function* fetchOverviewAssessment() {
  const connected = yield checkInternetConnection();
  // if (!connected) {
  // return  
  // }
  console.warn('hehe', lsaOverview);
  const dataArr = [];
  // const dataArr = lsaOverview[Math.floor(Math.random() * lsaOverview.length)]
  let currentIndex = lsaOverview.length, randomIndex;
  while(currentIndex != 0) {
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;
  [lsaOverview[currentIndex], lsaOverview[randomIndex]] = [lsaOverview[randomIndex], lsaOverview[currentIndex]];
  }
  console.warn('new', lsaOverview);
  yield put (LSAOverviewActions.fetchOverviewAssessmentSuccess(lsaOverview));
}

function* watchLSAOverviewSaga() {
  yield takeLatest(LSAOverviewTypes.FETCH_OVERVIEW_ASSESSMENT, fetchOverviewAssessment);

}

export default watchLSAOverviewSaga;
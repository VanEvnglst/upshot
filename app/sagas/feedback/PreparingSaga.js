import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import PreparingActions, { PreparingTypes } from 'app/store/feedback/preparingRedux';
import api from 'app/services/apiService';

const activeStep = state => state.preparing.get('activeStep');

export function* postFeedbackPreparing({ data }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
    // return;
  // }
  const response = yield call(api.postFeedbackPreparing, data);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      const step = yield select(activeStep);
      const preparingId = response.data.details.id;
      yield put (PreparingActions.postFeedbackPreparingSuccess(preparingId));
      yield put(PreparingActions.setPrepActiveStep(step + 1 ));
    } 
  } else {
    yield put(PreparingActions.postFeedbackPreparingFailure(response.data));
  }
}

function* watchPreparingSaga() {
  yield takeLatest(
    PreparingTypes.POST_FEEDBACK_PREPARING, postFeedbackPreparing
  );
}

export default watchPreparingSaga;
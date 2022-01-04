import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import PreparingActions, {
  PreparingTypes,
} from 'app/store/feedback/preparingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';

const activeStep = state => state.preparing.get('activeStep');

export function* postFeedbackPreparing({ journeyId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  // return;
  // }
  const response = yield call(api.postFeedbackPreparing, journeyId);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      // const step = yield select(activeStep);
      const preparingId = response.data.details.id;
      yield put(PreparingActions.postFeedbackPreparingSuccess(preparingId));
      yield NavigationService.navigate('FeedbackPreparing');
      // yield put(PreparingActions.setPrepActiveStep(step + 1));
    }
  } else {
    yield put(PreparingActions.postFeedbackPreparingFailure(response.data));
  }
}

export function* updateFeedbackPreparing({ data }) {
  //const connected = yield checkInternetConnection();
  // if (!connected) {}
  // return;

  const response = yield call(api.updateFeedbackPreparing, data);
  debugger;
  if (response.ok) {
    if (response.data.status === 'ok') {
      debugger;
      yield put(PreparingActions.updateFeedbackPreparingSuccess());
    }
  } else {
    yield put(PreparingActions.updateFeedbackPreparingFailure());
  }
}

function* watchPreparingSaga() {
  yield takeLatest(
    PreparingTypes.POST_FEEDBACK_PREPARING,
    postFeedbackPreparing,
  );
}

export default watchPreparingSaga;

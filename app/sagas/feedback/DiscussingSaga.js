import { checkInternetConnection } from 'react-native-offline';
import { call, put, takeLatest, select } from 'redux-saga/effects';
import DiscussingActions, {
  DiscussingTypes,
} from 'app/store/feedback/DiscussingRedux';
import * as NavigationService from 'app/services/NavigationService';
import api from 'app/services/apiService';
import labels from 'app/locales/en';
const discussingId = state => state.discussing.get('id');

export function* postFeedbackDiscussing({ journeyId }) {
  // const connected = yield checkInternetConnection();
  // if (!connected) {
  // return;
  // }
  const params = new URLSearchParams();
  params.append('journey_id', journeyId);

  const response = yield call(api.postFeedbackDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      const discussingId = response.data.details.id;
      yield put(DiscussingActions.postFeedbackDiscussingSuccess(discussingId));
      yield NavigationService.navigate('DiscussingMeeting');
    }
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data));
  }
}

export function* updateFeedbackDiscussing({ data }) {
  const params = new URLSearchParams();
  const discussId = yield select(discussingId);

  var plansList = '[{';
  plansList += `"what": ${data.specificAction}`;
  plansList += `"when": ${data.whenWillItHappen}`;
  plansList += `"who": ${data.whoWillMakeIt}`;
  plansList += '}]';
  params.append('discussing_id', discussId);
  params.append('plans', plansList);

  const response = yield call(api.updateFeedbackDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DiscussingActions.updateFeedbackDiscussingSuccess());
      yield put(DiscussingActions.closeFeedbackDiscussing(discussId));
      yield put(DiscussingActions.setDiscussingStatus('closed', true));
      yield NavigationService.navigate('FeedbackConfirmation', {
        type: 'discussing',
      });
    }
  } else {
    yield put(DiscussingActions.postFeedbackDiscussingFailure(response.data));
  }
}

export function* updateDiscussingReminder({ data }) {
  const params = new URLSearchParams();
  const discussId = yield select(discussingId);
  params.append('discussing_id', discussId);
  params.append('reminder_date', data.reminderDate);
  const response = yield call(api.updateFeedbackDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DiscussingActions.updateFeedbackDiscussingSuccess());
      yield NavigationService.navigate('ActiveFeedbackJourney');
    }
  } else {
    yield put(DiscussingActions.updateFeedbackDiscussingFailure(response.data));
  }
}

export function* fetchCurrentDiscussing({ discussingId }) {
  const { cueCards } = labels.feedbackDiscussing;
  const params = new URLSearchParams();
  params.append('discussing_id', discussingId);

  const response = yield call(api.getCurrentDiscussing, params);

  if (response.ok) {
    if (response.data.status === 'ok') {
      const prepDetails = response.data.details.preparing_phase;
      const {
        check_in: checkIn,
        purpose,
        additional_purpose: addedPurpose,
        observation_questions: observation,
        event,
        actions: action,
        result,
        action_plan_questions: plans,
        additional_action_plan_questions: addedActionPlanQuestions,
        action_plan_steps: actionPlanSteps,
        action_plan_evaluate_options: actionPlanOptions,
        additional_action_plan_evaluate_options: addedActionPlanOptions,
        checkout_question: checkout,
        checkout_acknowledge: checkoutAcknowledge,
        additional_checkout_acknowledge: addedCheckoutAcknowledge,
      } = prepDetails;
      yield put(
        DiscussingActions.setDiscussingStatus('data', [
          { key: 'empty-left' },
          {
            id: 1,
            title: cueCards.checkIn,
            content: checkIn === '' ? cueCards.checkInContent : checkIn,
            skipped: checkIn === '' ? true : false,
          },
          {
            id: 2,
            title: cueCards.statePurpose,
            content:
              purpose === '' && addedPurpose === ''
                ? cueCards.statePurposeContent
                : `${purpose}\n\n${addedPurpose}`,
            skipped: (purpose === '' && addedPurpose === '') ? true : false,
          },
          {
            id: 3,
            title: cueCards.observation,
            content:
              event && action && result === ''
                ? cueCards.observationContent
                : `${event}\n\n${action}\n\n${result}`,
            skipped: (event === '' && action === '' && result === '') ? true : false,
          },
          {
            id: 4,
            title: cueCards.listenDeeply,
            content:
              observation === '' ? cueCards.listenDeeplyContent : observation,
            skipped: observation === '' ? true : false,
          },
          {
            id: 5,
            title: cueCards.brainstorm,
            content:
              plans === '' || addedActionPlanQuestions === ''
                ? cueCards.brainstormContent
                : `${plans}\n\n${addedActionPlanQuestions}`,
            skipped:
              plans === '' && addedActionPlanQuestions === '' ? true : false,
          },
          {
            id: 6,
            title: cueCards.evaluateIdeas,
            content:
              actionPlanOptions || addedActionPlanOptions === ''
                ? cueCards.evaluateIdeasContent
                : `${actionPlanOptions}\n\n${addedActionPlanOptions}`,
            skipped:
              actionPlanOptions === '' && addedActionPlanOptions === ''
                ? true
                : false,
          },
          {
            id: 7,
            title: cueCards.nextSteps,
            content: cueCards.nextStepsContent,
            skipped: true,
          },
          {
            id: 8,
            title: cueCards.checkOut,
            content: checkout === '' ? cueCards.checkOutContent : checkout,
            skipped: checkout === '' ? true : false,
          },
          {
            id: 9,
            title: cueCards.thankAndSupport,
            content:
              checkoutAcknowledge ||  addedCheckoutAcknowledge === ''
                ? cueCards.thankAndSupportContent
                : `${checkoutAcknowledge}\n\n${addedCheckoutAcknowledge}`,
            skipped:
              checkoutAcknowledge === '' && addedCheckoutAcknowledge === ''
                ? true
                : false,
          },
          {
            key: 'empty-right',
          },
        ]),
      );
      yield put(DiscussingActions.fetchCurrentDiscussingSuccess());
    }
  } else {
    yield put(DiscussingActions.fetchCurrentDiscussingFailure(response.data));
  }
}

export function* closeFeedbackDiscussing({ discussingId }) {
  const params = new URLSearchParams();
  params.append('discussing_id', discussingId);
  const response = yield call(api.postCloseDiscussing, params);
  if (response.ok) {
    if (response.data.status === 'ok') {
      yield put(DiscussingActions.closeFeedbackDiscussingSuccess());
    }
  } else {
    yield put(DiscussingActions.closeFeedbackDiscussingFailure(response.data));
  }
}

function* watchDiscussingSaga() {
  yield takeLatest(
    DiscussingTypes.POST_FEEDBACK_DISCUSSING,
    postFeedbackDiscussing,
  );
  yield takeLatest(
    DiscussingTypes.UPDATE_FEEDBACK_DISCUSSING,
    updateFeedbackDiscussing,
  );
  yield takeLatest(
    DiscussingTypes.UPDATE_DISCUSSING_REMINDER,
    updateDiscussingReminder,
  );
  yield takeLatest(
    DiscussingTypes.FETCH_CURRENT_DISCUSSING,
    fetchCurrentDiscussing,
  );
  yield takeLatest(
    DiscussingTypes.CLOSE_FEEDBACK_DISCUSSING,
    closeFeedbackDiscussing,
  );
}

export default watchDiscussingSaga;

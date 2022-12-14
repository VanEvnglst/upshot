// import { checkInternetConnection } from 'react-native-offline';
// import { call, put, takeLatest, select } from 'redux-saga/effects';
// import ReflectingActions, {
//   ReflectingTypes,
// } from 'app/store/feedback/ReflectingRedux';
// import * as NavigationService from 'app/services/NavigationService';
// import api from 'app/services/apiService';

// const STATUS_OK = 'ok';
// const reflectingId = state => state.reflecting.get('id');
// const type = state => state.feedback.get('chosenType').id;
// const flow = state => state.feedback.get('chosenFlow').id
// const step1Data = state => state.reflecting.get('step1');
// const step2Data = state => state.reflecting.get('step2');
// const step4Data = state => state.reflecting.get('step4');
// const lastActiveStep = state => state.reflecting.get('activeStep');

// export function* postFeedbackReflecting({ journeyId }) {
//   const connected = yield
//   checkInternetConnection();
//   // if(!connected) {
//   // return;
//   // }
//   const reflectingData = {
//     journey_id: journeyId
//   }
//   const response = yield call(api.postFeedbackReflecting, reflectingData);
//   if (response.ok) {
//     if (response.data.status == STATUS_OK) {
//       const reflectingDetails = response.data.details;
//       // yield put(ReflectingActions.setReflectingStatus('actionPlan', reflectingDetails.discussing_plans));
//       yield put(ReflectingActions.postFeedbackReflectingSuccess(reflectingDetails.id));
//       yield NavigationService.navigate('FeedbackReflecting');
      
//     }
//   } else if (response.status === 500) {
//     yield put(ReflectingActions.postFeedbackReflectingFailure("Server error"));
//   } else {
//     yield put(ReflectingActions.postFeedbackReflectingFailure(response.data))
//   }
// }

// export function* updateFeedbackReflecting({ data }) {
//   const connected = yield checkInternetConnection();
//   // if (!connected) {}
//   // return;
//   const reflectId = yield select(reflectingId);
//   const step1 = yield select(step1Data);
//   const step2 = yield select(step2Data);
//   const step4 = yield select(step4Data);
//   const activeStep = yield select(lastActiveStep);

//   let reflectionScoreArr = [];
//   step2.data.forEach((item, index) => {
//     reflectionScoreArr.push({ c_id: item.id, score: item.score})
//   });
//   const { stopDoing, startDoing, continueDoing } = step4.data;

//   const reflectingData = { 
//     reflecting_id: reflectId,
//     feel_int: step1.data,
//     reflection_scores: reflectionScoreArr,
//     dev_plan_stop_doing: stopDoing,
//     dev_plan_start_doing: startDoing,
//     dev_plan_continue_doing: continueDoing,
//     last_step: activeStep
//   }
  
//   const response = yield call(api.updateFeedbackReflecting, reflectingData);
//   if (response.ok) {
//     if (response.data.status == STATUS_OK) {
//       yield put(ReflectingActions.updateFeedbackReflectingSuccess());
//       if (data.shouldClose) {
//         yield put(ReflectingActions.closeFeedbackReflecting(reflectId));
//         yield put(ReflectingActions.setReflectingStatus('closed', true));
//       } else {
//         yield NavigationService.navigate('ActiveFeedbackJourney');
//         yield put(ReflectingActions.resetReflectingState());
//       }
//     }
//   } else {
//     yield put(ReflectingActions.updateFeedbackReflectingFailure(response.data));
//   }
// }

// export function* fetchCurrentReflecting({ reflectingId }) {
//   const connected = yield checkInternetConnection();
//   // if (!connected) {}
//   // return;

//   const reflectingData = {
//     reflecting_id: reflectingId,
//   }

//   const response = yield call(api.getCurrentReflecting, reflectingData);
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       const reflectDetails = response.data.details;
//       const { 
//         dev_plan_stop_doing: stopDoing,
//         dev_plan_start_doing: startDoing,
//         dev_plan_continue_doing: continueDoing,
//         discussing_plans: discussingPlans,
//         last_step: lastStep
//       } = reflectDetails;
//       const lastActiveStep = lastStep === null ? 1 : lastStep;
//       yield put(ReflectingActions.setReflectingData('step1', reflectDetails.feel));
//       yield put(ReflectingActions.setReflectingData('step2', 
//       reflectDetails.reflection_scores))
//       yield put(ReflectingActions.setReflectingData('step4', {
//         stopDoing,
//         startDoing,
//         continueDoing,
//       }))
//       yield put(ReflectingActions.setReflectingStatus('actionPlan', discussingPlans));
//       yield put(ReflectingActions.setReflectingStatus('activeStep', lastActiveStep));
//       //TODO: to be adjusted for on the spot
//       yield put(ReflectingActions.fetchCurrentReflectingSuccess())
//     } else {
//       yield put(ReflectingActions.fetchCurrentReflectingFailure(response.data));
//     }
//   } else {
//     yield put(ReflectingActions.fetchCurrentReflectingFailure(response.data));
//   }
// }

// export function* closeFeedbackReflecting({ reflectingId }) {
//   const connected = yield checkInternetConnection();
//   // if (!connected) {}
//   // return;
  
//   const reflectingData = {
//     reflecting_id: reflectingId,
//   }
//   const response = yield call(api.postCloseReflecting, reflectingData);
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       yield put(ReflectingActions.closeFeedbackReflectingSuccess());
//       yield NavigationService.navigate('FeedbackConfirmation', {
//         type: 'reflecting',
//       });
//     }
//   } else {
//     yield put(ReflectingActions.closeFeedbackReflectingFailure(response.data));
//   }
// }

// export function* fetchStaffRatings() {
//   const connected = yield checkInternetConnection();
//   // if (!connected) {}
//   // return;

//   const typeId = yield select(type);
//   const flowId = yield select(flow);
//   const reflectingData = {
//     pos_or_cor_id: typeId,
//     prep_or_spot_id: flowId,
//     use_test_data: true,
//   }
//   const response = yield call(api.getStaffRatings, reflectingData);
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       const ratings = response.data.details.feedback_list;
//       yield put(ReflectingActions.fetchStaffRatingsSuccess(ratings));
//     }
//   } else {
//     yield put(ReflectingActions.fetchStaffRatingsFailure(response.data));
//   }
// }

// export function* fetchReflectingCriteria() {
//   const connected = yield checkInternetConnection();
//   // if(!connected) {} return;
//   const type = yield select(state => state.feedback.get('chosenType'));
//   const flow = yield select(state => state.feedback.get('chosenFlow'));

//   const reflectingData = {
//     feedback_flow: flow.id,
//     pos_or_cor: type.id,
//   };

//   const response = yield call(api.getReflectingCriteria, reflectingData);
//   if(response.ok) {
//     if (response.data.status === STATUS_OK) {
//       const criteriaList = response.data.details.criteria_list.criteria;
//       yield put(ReflectingActions.fetchReflectingCriteriaSuccess(criteriaList))
//     } else {
//       yield put(ReflectingActions.fetchReflectingCriteriaFailure(response.data));
//     }
//   } else {
//     yield put(ReflectingActions.fetchReflectingCriteriaFailure());
//   }

// }

// function* watchReflectingSaga() {
//   yield takeLatest(
//     ReflectingTypes.POST_FEEDBACK_REFLECTING,
//     postFeedbackReflecting,
//   );
//   yield takeLatest(
//     ReflectingTypes.UPDATE_FEEDBACK_REFLECTING,
//     updateFeedbackReflecting,
//   );
//   yield takeLatest(
//     ReflectingTypes.FETCH_CURRENT_REFLECTING,
//     fetchCurrentReflecting,
//   );
//   yield takeLatest(
//     ReflectingTypes.CLOSE_FEEDBACK_REFLECTING,
//     closeFeedbackReflecting,
//   );
//   yield takeLatest(ReflectingTypes.FETCH_STAFF_RATINGS, fetchStaffRatings);
//   yield takeLatest(ReflectingTypes.FETCH_REFLECTING_CRITERIA, fetchReflectingCriteria);
// }

// export default watchReflectingSaga;

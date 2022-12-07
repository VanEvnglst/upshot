// import { checkInternetConnection } from 'react-native-offline';
// import { call, put, takeLatest, select } from 'redux-saga/effects';
// import moment from 'moment';
// import SurveyActions, { SurveyTypes } from 'app/store/frontliner/SurveyRedux';
// import * as NavigationService from 'app/services/NavigationService';
// import api from 'app/services/apiService';

// const STATUS_OK = 'ok';
// const feeling = state => state.survey.get('howDidYouFeel')
// const satisfaction = state => state.survey.get('overallSatisfaction')
// const manager = state => state.survey.get('managerEvaluation')
// const drEval = state => state.survey.get('selfEvaluation')
// const lastActiveStep = state => state.survey.get('activeStep');
// const feedbackFlow = state => state.survey.get('feedbackFlow');
// const feedbackType = state => state.survey.get('feedbackType');

// export function* postDRSurvey({ data }) {
//   const connected = yield checkInternetConnection();

//   const surveyData = {
//     journey_id: data
//   };
  
//   const response = yield call(api.postDRSurvey, surveyData)
//   debugger;
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       const details = response.data.response;
//       yield put (SurveyActions.setDRSurveyData('feedbackFlow',details.feedback_flow));
//       yield put (SurveyActions.setDRSurveyData('feedbackType',details.feedback_type));
//       yield put (SurveyActions.postDRSurveySuccess(details.id));
//       yield NavigationService.navigate('FrontlinerSurvey');
//     } else {
//    yield put(SurveyActions.postDRSurveyFailure(response.data))
//     }
//   } else {
//     yield put(SurveyActions.postDRSurveyFailure(response.data))
//   }
// }

// export function* updateDRSurvey({ data }) {
//   const connected = yield checkInternetConnection();

//   const feelingValue = yield select(feeling)
//   const satisfactionValue = yield select(satisfaction)
//   const managerEval = yield select(manager)
//   const selfEval = yield select(drEval)
//   const activeStep = yield select(lastActiveStep)

//   let managerScore = [];
//   let drScore = [];
//   managerEval.data.forEach((item, index) => {
//     managerScore.push({ 
//       c_id: item.id,
//       score: item.score
//     });
//   })

//   selfEval.data.forEach((item, index) => {
//     drScore.push({
//       id: item.id,
//       score: item.score,
//     })
//   })

  
//   const surveyData = {
//     fl_survey_feedback_id: data.surveyId,
//     feel_int: feelingValue.data,
//     satisfied_int: satisfactionValue.data,
//     feedback_criteria_scores: managerScore,
//     fl_survey_scores: drScore,
//     // last_step: act
//   };
  
//   const response = yield call(api.updateDRSurvey, surveyData);
//   debugger;
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       if (data.shouldClose)
//         yield put(SurveyActions.closeDrSurvey(data.surveyId))
//       else {
//         yield put(SurveyActions.updateDRSurveySuccess())
//         yield put(SurveyActions.resetDRSurveyState());
//         yield NavigationService.navigate('Messages')
//     }
//     } else {
//       yield put(SurveyActions.updateDRSurveyFailure(response.data))
//     }
//   } else {
//     yield put(SurveyActions.updateDRSurveyFailure(response.data))
//   }
// }

// export function* fetchCurrentDRSurvey({ surveyId }) {
//   const connected = yield checkInternetConnection();

//   const payload = {
//     fl_survey_feedback_id: surveyId
//   }
//   const response = yield call(api.getCurrentDRSurvey, payload);
//   debugger;
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       const data = response.data.response;
//       yield put (SurveyActions.setDRSurveyData('feedbackFlow',data.feedback_flow));
//       yield put (SurveyActions.setDRSurvey('feedbackType',data.feedback_type));
//       yield put(SurveyActions.setDRSurveyData('howDidYouFeel', data.feel_int));
//       yield put(SurveyActions.setDRSurveyData('overallSatisfaction', data.satisfied_int));
//       yield put(SurveyActions.setDRSurveyData('managerEvaluation', data.survey));
//       yield put(SurveyActions.setDRSurveyData('selfEvaluation', data.reflection));
//       yield put (SurveyActions.fetchCurrentDRSurveySuccess())
//     } else {
//       yield put(SurveyActions.fetchCurrentDRSurveyFailure(response.data))
//     }
//   } else {
//     yield put(SurveyActions.fetchCurrentDRSurveyFailure(response.data))
//   }
// }

// export function* fetchDRCriteria() {
//   const connected = yield checkInternetConnection();

//   const response = yield call(api.getDRCriteria);
//   if (response.ok) {
//     if(response.data.status === 'Ok') {
//       const criteriaList = response.data.criteria;
//       yield put(SurveyActions.fetchDRCriteriaSuccess(criteriaList));
//     } else {
//       yield put(SurveyActions.fetchDRCriteriaFailure(response.data))
//     }
//   } else {
//     yield put(SurveyActions.fetchDRCriteriaFailure(response.data));
//   }
// }


// export function* fetchManagerCriteria() {
//   const connected = yield checkInternetConnection();

//   const flow = yield select(feedbackFlow);
//   const type = yield select(feedbackType);
//   debugger;
//   const criteriaData = {
//     feedback_flow: flow.data.id,
//     pos_or_cor: type.data.id,
//   };

//   const response = yield call(api.getReflectingCriteria, criteriaData);
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//      const criteriaList = response.data.details.criteria_list.criteria;
//      yield put(SurveyActions.fetchManagerCriteriaSuccess(criteriaList)); 
//     } else {
//       yield put(SurveyActions.fetchManagerCriteriaFailure(response.data));
//     }
//   } else {
//     yield put(SurveyActions.fetchManagerCriteriaFailure(response.data));
//   }
// }

// export function* postSurveyInvalid ({ data }) {
//   const connected = yield checkInternetConnection();
  
//   const payload = {
//     journey_id: data.id
//   }

//   const response = yield call(api.postSurveyInvalid, payload);
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       yield NavigationService.navigate('SurveyConfirmation', {
//         type: 'no event',
//         managerName: data.managerName,
//       });
//       yield put(SurveyActions.postSurveyInvalidSuccess())
//     } else {
//       yield put(SurveyActions.postSurveyInvalidFailure(response.data))
//     }
//   } else {
//     yield put(SurveyActions.postSurveyInvalidFailure(response.data))
//   }
// }

// export function* closeDRSurvey({ data }) {
//   const connected = yield checkInternetConnection();

//   const payload = {
//     fl_survey_feedback_id: data.id
//   }
//   debugger;
//   const response = yield call(api.closeDRSurvey, payload);
//   debugger;
//   if (response.ok) {
//     if (response.data.status === STATUS_OK) {
//       yield put(SurveyActions.closeDRSurveySuccess())
//       yield NavigationService.navigate('SurveyConfirmation', {
//         type: 'success',
//       });
//     } else {
//       yield put(SurveyActions.closeDRSurveyFailure(response.data))
//     }
//   } else {
//    yield put(SurveyActions.closeDRSurveyFailure(response.data))
//   }
// }

// function* watchSurveySaga() {
//   yield takeLatest(SurveyTypes.POST_DR_SURVEY, postDRSurvey);
//   yield takeLatest(SurveyTypes.UPDATE_DR_SURVEY, updateDRSurvey);
//   yield takeLatest(SurveyTypes.FETCH_CURRENT_DR_SURVEY, fetchCurrentDRSurvey);
//   yield takeLatest(SurveyTypes.FETCH_DR_CRITERIA, fetchDRCriteria);
//   yield takeLatest(SurveyTypes.FETCH_MANAGER_CRITERIA, fetchManagerCriteria);
//   yield takeLatest(SurveyTypes.POST_SURVEY_INVALID, postSurveyInvalid);
//   yield takeLatest(SurveyTypes.CLOSE_DR_SURVEY, closeDRSurvey);

// }

// export default watchSurveySaga;
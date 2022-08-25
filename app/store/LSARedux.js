import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';
import { min } from 'moment';

const defaultState ={
  data: null,
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  activeStep: 1,
  maxStep: 15,
  overviewQuestions: null,
  extendedQuestions: {
    empathyList: [],
    curiosityList: [],
    authenticityList: [],
    trustBuildingList: [],
    achievementList: [],
  },
  step1: { ...defaultState },
  step2: { ...defaultState },
  step3: { ...defaultState },
  step4: { ...defaultState },
  step5: { ...defaultState },
  step6: { ...defaultState },
  step7: { ...defaultState },
  step8: { ...defaultState },
  step9: { ...defaultState },
  step10: { ...defaultState },
  step11: { ...defaultState },
  step12: { ...defaultState },
  step13: { ...defaultState },
  step14: { ...defaultState },
  step15: { ...defaultState },
  overviewTestResults: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setAssessmentActiveStep: ['step'],
  setAssessmentStatus: ['key', 'status'],
  setAssessmentData: ['key','data'],
  fetchOverviewQuestions: [],
  fetchOverviewQuestionsSuccess: ['overviewQuestions'],
  fetchOverviewQuestionsFailure: ['error'],
  fetchExtendedQuestions: [],
  fetchExtendedQuestionsSuccess: ['extendedQuestions'],
  fetchExtendedQuestionsFailure: ['error'],
  postOverviewTest: ['data'],
  postOverviewTestSuccess: ['results'],
  postOverviewTestFailure: ['error'],

});


/* ------------- Reducers ------------- */
export const leadershipSkillAreaTypes = Types;
export default Creators;

const setAssessmentActiveStep = (state, { step }) => {
  if (state.get('activeStep') > state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({
    activeStep: step,
  });
};

const setAssessmentData = (state, { key, data }) => 
  state.merge({
   [key]: { data },
  })

const fetchOverviewQuestions = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchOverviewQuestionsSuccess = (state, { overviewQuestions }) =>
  state.merge({
    fetching: false,
    overviewQuestions,
  });

const fetchOverviewQuestionsFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

  const fetchExtendedQuestions = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchExtendedQuestionsSuccess = (state, { extendedQuestions }) =>
  state.merge({
    fetching: false,
    extendedQuestions,
  });

const fetchExtendedQuestionsFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
[Types.SET_ASSESSMENT_ACTIVE_STEP]: setAssessmentActiveStep,
[Types.SET_ASSESSMENT_DATA]: setAssessmentData,
[Types.FETCH_OVERVIEW_QUESTIONS]: fetchOverviewQuestions,
[Types.FETCH_OVERVIEW_QUESTIONS_SUCCESS]: fetchOverviewQuestionsSuccess,
[Types.FETCH_OVERVIEW_QUESTIONS_FAILURE]: fetchOverviewQuestionsFailure,
[Types.FETCH_EXTENDED_QUESTIONS]: fetchExtendedQuestions,
[Types.FETCH_EXTENDED_QUESTIONS_SUCCESS]: fetchExtendedQuestionsSuccess,
[Types.FETCH_EXTENDED_QUESTIONS_FAILURE]: fetchExtendedQuestionsFailure,
});
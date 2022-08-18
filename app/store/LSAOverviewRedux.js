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
  data: null,
  activeStep: 1,
  overviewQuestions: null,
  maxStep: 15
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setAssessmentActiveStep: ['step'],
  setAssessmentData: ['data'],
  fetchOverviewAssessment: [],
  fetchOverviewAssessmentSuccess: ['overviewQuestions'],
  fetchOverviewAssessmentFailure: ['error'],
});


/* ------------- Reducers ------------- */
export const LSAOverviewTypes = Types;
export default Creators;

const setAssessmentActiveStep = (state, { step }) => {
  if (state.get('activeStep') > state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({
    activeStep: step,
  });
};

const setAssessmentData = (state, { data }) => 
  state.merge({
    data
  })

const fetchOverviewAssessment = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchOverviewAssessmentSuccess = (state, {overviewQuestions}) =>
  state.merge({
    fetching: false,
    overviewQuestions,
  });

const fetchOverviewAssessmentFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
[Types.SET_ASSESSMENT_ACTIVE_STEP]: setAssessmentActiveStep,
[Types.SET_ASSESSMENT_DATA]: setAssessmentData,
[Types.FETCH_OVERVIEW_ASSESSMENT]: fetchOverviewAssessment,
[Types.FETCH_OVERVIEW_ASSESSMENT_SUCCESS]: fetchOverviewAssessmentSuccess,
[Types.FETCH_OVERVIEW_ASSESSMENT_FAILURE]: fetchOverviewAssessmentFailure,
});
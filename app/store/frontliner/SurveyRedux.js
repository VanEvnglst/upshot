import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  journeyId: null,
  id: null,
  activeStep: 1,
  maxStep: 4,
  overallSatisfaction: { ...defaultState },
  howDidYouFeel: { ...defaultState },
  managerEvaluation: { ...defaultState },
  managerCriteria: [],
  selfEvalCriteria: [],
  selfEvaluation: { ...defaultState },
  feedbackType: {},
  feedbackFlow: {},
});

const { Types, Creators } = createActions({
  postDRSurvey: ['data'],
  postDRSurveySuccess: ['surveyId'],
  postDRSurveyFailure: ['error'],
  updateDRSurvey: ['data'],
  updateDRSurveySuccess: null,
  updateDRSurveyFailure: ['error'],
  fetchCurrentDRSurvey: ['surveyId'],
  fetchCurrentDRSurveySuccess: ['data'],
  fetchCurrentDRSurveyFailure: ['error'],
  closeDRSurvey: ['surveyId'],
  closeDRSurveySuccess: null,
  closeDRSurveyFailure: ['error'],
  resetDRSurveyState: null,
  setDRSurveyData: ['key', 'data'],
  setDRSurveyStatus: ['key', 'data'],
  setSurveyActiveStep: ['step'],
  fetchDRCriteria: [''],
  fetchDRCriteriaSuccess: ['criteriaList'],
  fetchDRCriteriaFailure: ['error'],
  fetchManagerCriteria: [''],
  fetchManagerCriteriaSuccess: ['managerCriteria'],
  fetchManagerCriteriaFailure: ['error'],
  postSurveyInvalid: ['data'],
  postSurveyInvalidSuccess: [],
  postSurveyInvalidFailure: ['error'],
});

/* ------------- Reducers ------------- */
export const SurveyTypes = Types;
export default Creators;

const resetDRSurveyState = state => state.merge(INITIAL_STATE);

const setDRSurveyData = (state, { key, data }) => {
  return state.merge({
    [key]: { data },
  });
};

const setDRSurveyStatus = (state, { key, data }) => {
  return state.merge({
    ...state.get(key),
    [key]: data,
  });
};

const setSurveyActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
};

const postDRSurvey = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const postDRSurveySuccess = (state, { surveyId }) => {
  return state.merge({
    id: surveyId,
    fetching: false,
  });
};

const postDRSurveyFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const updateDRSurvey = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const updateDRSurveySuccess = state =>
  state.merge({
    fetching: false,
  });

const updateDRSurveyFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const fetchCurrentDRSurvey = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchCurrentDRSurveySuccess = state =>
  state.merge({
    fetching: false,
  });

const fetchCurrentDRSurveyFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const closeDRSurvey = state =>
  state.merge({
    fetching: false,
    error: '',
  });

const closeDRSurveySuccess = state =>
  state.merge({
    fetching: false,
  });

const closeDRSurveyFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const fetchDRCriteria = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchDRCriteriaSuccess = (state, { criteriaList }) =>
  state.merge({
    fetching: false,
    selfEvalCriteria: criteriaList,
  });

const fetchDRCriteriaFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const fetchManagerCriteria = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchManagerCriteriaSuccess = (state, { managerCriteria }) =>
  state.merge({
    fetching: false,
    managerCriteria,
  });

const fetchManagerCriteriaFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const postSurveyInvalid = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const postSurveyInvalidSuccess = state =>
  state.merge({
    fetching: false,
  });

const postSurveyInvalidFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error
  })
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SURVEY_ACTIVE_STEP]: setSurveyActiveStep,
  [Types.SET_DR_SURVEY_DATA]: setDRSurveyData,
  [Types.SET_DR_SURVEY_STATUS]: setDRSurveyStatus,
  [Types.POST_DR_SURVEY]: postDRSurvey,
  [Types.POST_DR_SURVEY_SUCCESS]: postDRSurveySuccess,
  [Types.POST_DR_SURVEY_FAILURE]: postDRSurveyFailure,
  [Types.UPDATE_DR_SURVEY]: updateDRSurvey,
  [Types.UPDATE_DR_SURVEY_SUCCESS]: updateDRSurveySuccess,
  [Types.UPDATE_DR_SURVEY_FAILURE]: updateDRSurveyFailure,
  [Types.FETCH_CURRENT_DR_SURVEY]: fetchCurrentDRSurvey,
  [Types.FETCH_CURRENT_DR_SURVEY_SUCCESS]: fetchCurrentDRSurveySuccess,
  [Types.FETCH_CURRENT_DR_SURVEY_FAILURE]: fetchCurrentDRSurveyFailure,
  [Types.CLOSE_DR_SURVEY]: closeDRSurvey,
  [Types.CLOSE_DR_SURVEY_SUCCESS]: closeDRSurveySuccess,
  [Types.CLOSE_DR_SURVEY_FAILURE]: closeDRSurveyFailure,
  [Types.RESET_DR_SURVEY_STATE]: resetDRSurveyState,
  [Types.FETCH_DR_CRITERIA]: fetchDRCriteria,
  [Types.FETCH_DR_CRITERIA_SUCCESS]: fetchDRCriteriaSuccess,
  [Types.FETCH_DR_CRITERIA_FAILURE]: fetchDRCriteriaFailure,
  [Types.FETCH_MANAGER_CRITERIA]: fetchManagerCriteria,
  [Types.FETCH_MANAGER_CRITERIA_SUCCESS]: fetchManagerCriteriaSuccess,
  [Types.FETCH_MANAGER_CRITERIA_FAILURE]: fetchManagerCriteriaFailure,
  [Types.POST_SURVEY_INVALID]: postSurveyInvalid,
  [Types.POST_SURVEY_INVALID_SUCCESS]: postSurveyInvalidSuccess,
  [Types.POST_SURVEY_INVALID_FAILURE]: postSurveyInvalidFailure,
});

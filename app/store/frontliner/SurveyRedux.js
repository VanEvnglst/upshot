import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  id: null,
  activeStep: 1,
  maxStep: 4,
  overallSatisfaction: { ...defaultState },
  howDidYouFeel: { ...defaultState },
  managerEvaluation: { ...defaultState },
  selfEvaluation: { ...defaultState },
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
closeDRSurveySuceess: null,
closeDRSurveyFailure: ['error'],
resetDRSurveyState: null,
setDRSurveyData: ['key', 'data'],
setSurveyActiveStep: ['step'],
});

/* ------------- Reducers ------------- */
export const SurveyTypes = Types;
export default Creators;

const resetDRSurveyState = state => state.merge(INITIAL_STATE);

const setDRSurveyData = (state, { key, status }) => {
  return state.merge({
    [key]: status,
  });
};

const setSurveyActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
}

const postDRSurvey = state => state.merge({
  fetching: true,
  error: '',
});

const postDRSurveySuccess = (state, { surveyId }) => {
  return state.merge({
    id: surveyId,
    fetching: false,
  });
};

const postDRSurveyFailure = (state, { error }) => state.merge({
  fetching: false,
  error,
});

const updateDRSurvey = state =>
  state.merge({
    fetching: true,
    error: '',
  })

const updateDRSurveySuccess = state =>
  state.merge({
    fetching: false,
  });

const updateDRSurveyFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error
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
    error
  });
};

const closeDRSurvey = state => state.merge({
  fetching: false,
  error: '',
});

const closeDRSurveySuccess = state => state.merge({
  fetching: false,
});

const closeDRSurveyFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};



export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SURVEY_ACTIVE_STEP]: setSurveyActiveStep,
  [Types.SET_DR_SURVEY_DATA]: setDRSurveyData,
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
  [Types.RESET_DR_SURVEY_STATE]: resetDRSurveyState
});
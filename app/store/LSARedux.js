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
  categoryActiveStep: 1,
  categoryMaxStep: 4,
  extendedActiveStep: 1,
  extendedMaxStep: 7,
  categorySelection: [
    {
      id: 1,
      title: 'empathyList',
      value: "💓 Empathy"
    },
    {
      id: 2,
      title: 'trustBuildingList',
      value: "🤝 Trust Building"
    },
    {
      id: 3,
      title: 'authenticityList',
      value: "👐 Authenticity"
    },
    {
      id: 4,
      title: 'achievementList',
      value: "🏅 Achievement-Orientation"
    },
    // {
    //   id: 5,
    //   title: 'curiosityList',
    //   value: "🧠 Curiosity"
    // },
  ],
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
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setAssessmentActiveStep: ['step'],
  setAssessmentExtendedActiveStep: ['extendedStep'],
  setAssessmentCategoryActiveStep: ['categoryStep'],
  resetStep: ['key', 'data'],
  setAssessmentData: ['key','data'],
  fetchOverviewQuestions: [],
  fetchOverviewQuestionsSuccess: ['overviewQuestions'],
  fetchOverviewQuestionsFailure: ['error'],
  fetchExtendedQuestions: [],
  fetchExtendedQuestionsSuccess: ['extendedQuestions'],
  fetchExtendedQuestionsFailure: ['error'],
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

const setAssessmentExtendedActiveStep = (state, { extendedStep }) => {
  if (state.get('extendedActiveStep') > state.get('extendedMaxStep')) {
    return state.get('extendedActiveStep');
  }
  return state.merge({
    extendedActiveStep: extendedStep,
  });
};

const resetStep = (state, { key, data }) =>
  state.merge({ [key]: data });

const setAssessmentCategoryActiveStep = (state, { categoryStep }) => {
  if (state.get('categoryActiveStep') > state.get('categoryMaxStep')) {
    return state.get('categoryActiveStep');
  }
  return state.merge({
    categoryActiveStep: categoryStep,
  });
};

// const resetCategoryActiveStep = (state, { key, categoryStep }) =>
//   state.merge({ [key]: categoryStep });

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
[Types.SET_ASSESSMENT_EXTENDED_ACTIVE_STEP]: setAssessmentExtendedActiveStep,
[Types.RESET_STEP]: resetStep,
[Types.SET_ASSESSMENT_CATEGORY_ACTIVE_STEP]: setAssessmentCategoryActiveStep,
[Types.SET_ASSESSMENT_DATA]: setAssessmentData,
[Types.FETCH_OVERVIEW_QUESTIONS]: fetchOverviewQuestions,
[Types.FETCH_OVERVIEW_QUESTIONS_SUCCESS]: fetchOverviewQuestionsSuccess,
[Types.FETCH_OVERVIEW_QUESTIONS_FAILURE]: fetchOverviewQuestionsFailure,
[Types.FETCH_EXTENDED_QUESTIONS]: fetchExtendedQuestions,
[Types.FETCH_EXTENDED_QUESTIONS_SUCCESS]: fetchExtendedQuestionsSuccess,
[Types.FETCH_EXTENDED_QUESTIONS_FAILURE]: fetchExtendedQuestionsFailure,
});
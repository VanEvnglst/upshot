import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

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
  categoryMaxStep: 5,
  extendedActiveStep: 1,
  extendedMaxStep: 7,
  categorySelection: [
    {
      id: 1,
      title: 'empathyList',
      value: "💓 Empathy",
      dataValue: 'empathy'
    },
    {
      id: 2,
      title: 'trustBuildingList',
      value: "🤝 Trust Building",
      dataValue: 'trustBuilding'
    },
    {
      id: 3,
      title: 'authenticityList',
      value: "👐 Authenticity",
      dataValue: 'authenticity'
    },
    {
      id: 4,
      title: 'achievementList',
      value: "🏅 Achievement-Orientation",
      dataValue: 'achievement'
    },
    {
      id: 5,
      title: 'opennessToLearnList',
      value: "🧠 Openness to Learn",
      dataValue: 'opennessToLearn'
    },
  ],
  overviewQuestions: null,
  extendedQuestions: {
    empathyList: [],
    opennessToLearnList: [],
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
  overviewData: null,
  extendedData: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setAssessmentActiveStep: ['step'],
  setAssessmentData: ['key', 'data'],
  setExtendedAssessmentData: ['key','data'],
  setAssessmentExtendedActiveStep: ['extendedStep'],
  setAssessmentCategoryActiveStep: ['categoryStep'],
  resetStep: ['key', 'data'],
  fetchOverviewQuestions: [],
  fetchOverviewQuestionsSuccess: ['overviewQuestions'],
  fetchOverviewQuestionsFailure: ['error'],
  fetchExtendedQuestions: [],
  fetchExtendedQuestionsSuccess: ['extendedQuestions'],
  fetchExtendedQuestionsFailure: ['error'],
  postOverviewTest: ['data'],
  postOverviewTestSuccess: ['results'],
  postOverviewTestFailure: ['error'],
  postExtendedTest: ['data'],
  postExtendedTestSuccess: ['data'],
  postExtendedTestFailure: ['error'],
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

const setExtendedAssessmentData = (state, { key, data }) => {
  return state.merge({
    extendedData: {
      ...state.get('extendedData'),
      [key]: { data },
    }
  
  });
}

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


const postExtendedTest = state => state.merge({
  fetching: true,
  error: '',
});

const postExtendedTestSuccess = (state, { data }) => state.merge({
  id: data,
  fetching: false,
});

const postExtendedTestFailure = (state, { error }) => state.merge({
  fetching: false,
  error
}); 


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
[Types.SET_ASSESSMENT_ACTIVE_STEP]: setAssessmentActiveStep,
[Types.SET_ASSESSMENT_EXTENDED_ACTIVE_STEP]: setAssessmentExtendedActiveStep,
[Types.RESET_STEP]: resetStep,
[Types.SET_ASSESSMENT_CATEGORY_ACTIVE_STEP]: setAssessmentCategoryActiveStep,
[Types.SET_ASSESSMENT_DATA]: setAssessmentData,
[Types.SET_EXTENDED_ASSESSMENT_DATA]: setExtendedAssessmentData,
[Types.FETCH_OVERVIEW_QUESTIONS]: fetchOverviewQuestions,
[Types.FETCH_OVERVIEW_QUESTIONS_SUCCESS]: fetchOverviewQuestionsSuccess,
[Types.FETCH_OVERVIEW_QUESTIONS_FAILURE]: fetchOverviewQuestionsFailure,
[Types.FETCH_EXTENDED_QUESTIONS]: fetchExtendedQuestions,
[Types.FETCH_EXTENDED_QUESTIONS_SUCCESS]: fetchExtendedQuestionsSuccess,
[Types.FETCH_EXTENDED_QUESTIONS_FAILURE]: fetchExtendedQuestionsFailure,
[Types.POST_EXTENDED_TEST]: postExtendedTest,
[Types.POST_EXTENDED_TEST_SUCCESS]: postExtendedTestSuccess,
[Types.POST_EXTENDED_TEST_FAILURE]: postExtendedTestFailure,
});
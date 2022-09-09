import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState ={
  data: null,
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  overviewActiveStep: 1,
  overviewMaxStep: 15,
  categoryActiveStep: 1, //
  categoryMaxStep: 5, //
  extendedActiveStep: 1,
  extendedMaxStep: 7,
  overviewQuestions: null,
  extendedQuestions: {
    empathyList: [],
    opennessToLearnList: [],
    authenticityList: [],
    trustBuildingList: [],
    achievementList: [],
  },
  overviewTestResults: null,
  extendedTestResults: null,
  overviewData: null,
  extendedData: null,
  testFinishedCount: 0,
  //save last step here
  skillAreaTestSteps: {
    empathy: null,
    opennessToLearnList: null,
    authenticity: null,
    trustBuilding: null,
    achievementOrientation: null,
  }
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setAssessmentActiveStep: ['key', 'step'],
  setAssessmentStatus: ['key', 'data'],
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
export const LeadershipSkillAreaTypes = Types;
export default Creators;

const setAssessmentActiveStep = (state, { key, step }) => {
  let maxStep = key === 'overviewActiveStep' ? 'overviewMaxStep' : 'extendedMaxStep';
  if (state.get(`${key}`) >= state.get(`${maxStep}`)) {
    return state.get(`${key}`);
  }
  return state.merge({
    [key]: step,
  });
};

const setAssessmentExtendedActiveStep = (state, { extendedStep }) => { //
  if (state.get('extendedActiveStep') > state.get('extendedMaxStep')) {
    return state.get('extendedActiveStep');
  }
  return state.merge({
    extendedActiveStep: extendedStep,
  });
}; //

const resetStep = (state, { key, data }) =>
  state.merge({ [key]: data });

const setAssessmentCategoryActiveStep = (state, { categoryStep }) => { //
  if (state.get('categoryActiveStep') > state.get('categoryMaxStep')) {
    return state.get('categoryActiveStep');
  }
  return state.merge({
    categoryActiveStep: categoryStep,
  });
}; //

const setAssessmentData = (state, { key, data }) => 
  state.merge({
    overviewData: {
      ...state.get('overviewData'),
      [key]: data ,
    }
  });

const setAssessmentStatus = (state, { key, data }) => 
state.merge({
  [key]: data
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
  extendedTestResults: data, 
  fetching: false,
});

const postExtendedTestFailure = (state, { error }) => state.merge({
  fetching: false,
  error
});

const postOverviewTest = state =>
  state.merge({
    fetching: true,
    error: '',
  })

const postOverviewTestSuccess = (state, { results }) =>
  state.merge({
    fetching: false,
    overviewTestResults: results,
  })

const postOverviewTestFailure = (state, { error }) => 
  state.merge({
    fetching: false,
    error
  })


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
[Types.POST_OVERVIEW_TEST]: postOverviewTest,
[Types.POST_OVERVIEW_TEST_SUCCESS]: postOverviewTestSuccess,
[Types.POST_OVERVIEW_TEST_FAILURE]: postOverviewTestFailure,
[Types.SET_ASSESSMENT_STATUS]: setAssessmentStatus
});
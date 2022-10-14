import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';
import FlashMessage from 'react-native-flash-message';

export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  activeFeedbackList: [],
  selectedFeedback: {},
  maxStep: 7,
  activeStep: 1,
  clarifications: {
    event: '',
    impact: '',
    continue: '',
    doLess: '',
    stopDoing: '',
    additionalNotes: '',
    support: [],
    additionalSupport: '',
  },
  managerResponse: {},
  assessmentRating: null,
});

const { Types, Creators } = createActions({
  fetchFLFeedbackList: [''],
  fetchFLFeedbackListSuccess: ['feedbackList'],
  fetchFLFeedbackListFailure: ['error'],
  resetFLFeedbackState: [],
  fetchFLFeedback: ['id'],
  fetchFLFeedbackSuccess: ['data'],
  fetchFLFeedbackFailure: ['error'],
  setResponseActiveStep: ['step'],
  setResponseData: ['key', 'data'],
  setResponseStatus: ['key', 'data'],
  setAssessmentRating: ['key', 'data'],
  resetResponseState: [''],
  postFLFeedbackResponse: ['data'],
  postFLFeedbackResponseSuccess: [],
  postFLFeedbackResponseFailure: ['error'],
  postFLAssessment: ['data'],
  postFLAssessmentSuccess: [],
  postFLAssessmentFailure: ['error'],
  fetchManagerFeedbackResponse: ['id'],
  fetchManagerFeedbackResponseSuccess: [''],
  fetchManagerFeedbackResponseFailure: ['error'],
});

export const FrontlinerFeedbackTypes = Types;
export default Creators;

const fetchFLFeedbackList = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchFLFeedbackListSuccess = (state, { feedbackList }) =>
  state.merge({
    fetching: false,
    activeFeedbackList: feedbackList,
  });

const fetchFLFeedbackListFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const fetchFLFeedback = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchFLFeedbackSuccess = (state, { data }) =>
  state.merge({
    fetching: false,
    selectedFeedback: data,
  });

const fetchFLFeedbackFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const resetResponseState = state => state.merge(INITIAL_STATE);

const setResponseData = (state, { key, data }) => {
  return state.merge({
    clarifications: {
      ...state.get('clarifications'),
      [key]: data,
    },
  });
};

const setResponseStatus = (state, { key, data }) => state.merge({
  [key]: data
})

const setResponseActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
};

const postFLFeedbackResponse = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const postFLFeedbackResponseSuccess = state =>
  state.merge({
    fetching: false,
  });

const postFLFeedbackResponseFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const setAssessmentRating = (state, { key, data }) => {
  return state.merge({
    assessmentRating: {
      ...state.get('assessmentRating'),
      [key]: data,
    }
  });
};

  const postFLAssessment = state =>
    state.merge({
      fetching: true,
      error: '',
    });
  
  const postFLAssessmentSuccess = state => 
  state.merge({
    fetching: false,
  });

  const postFLAssessmentFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

  const fetchManagerFeedbackResponse = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchManagerFeedbackResponseSuccess = (state, { data }) =>
  state.merge({
    fetching: false,
    managerResponse: data,
  });

const fetchManagerFeedbackResponseFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });


export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_FL_FEEDBACK_LIST]: fetchFLFeedbackList,
  [Types.FETCH_FL_FEEDBACK_LIST_SUCCESS]: fetchFLFeedbackListSuccess,
  [Types.FETCH_FL_FEEDBACK_LIST_FAILURE]: fetchFLFeedbackListFailure,
  [Types.FETCH_FL_FEEDBACK]: fetchFLFeedback,
  [Types.FETCH_FL_FEEDBACK_SUCCESS]: fetchFLFeedbackSuccess,
  [Types.FETCH_FL_FEEDBACK_FAILURE]: fetchFLFeedbackFailure,
  [Types.RESET_RESPONSE_STATE]: resetResponseState,
  [Types.SET_RESPONSE_DATA]: setResponseData,
  [Types.SET_RESPONSE_STATUS]: setResponseStatus,
  [Types.SET_RESPONSE_ACTIVE_STEP]: setResponseActiveStep,
  [Types.SET_ASSESSMENT_RATING]: setAssessmentRating,
  [Types.POST_FL_FEEDBACK_RESPONSE]: postFLFeedbackResponse,
  [Types.POST_FL_FEEDBACK_RESPONSE_SUCCESS]: postFLFeedbackResponseSuccess,
  [Types.POST_FL_FEEDBACK_RESPONSE_FAILURE]: postFLFeedbackResponseFailure,
  [Types.POST_FL_ASSESSMENT]: postFLAssessment,
  [Types.POST_FL_ASSESSMENT_SUCCESS]: postFLAssessmentSuccess,
  [Types.POST_FL_ASSESSMENT_FAILURE]: postFLAssessmentFailure,
  [Types.FETCH_MANAGER_FEEDBACK_RESPONSE]: fetchManagerFeedbackResponse,
  [Types.FETCH_MANAGER_FEEDBACK_RESPONSE_SUCCESS]: fetchManagerFeedbackResponseSuccess,
  [Types.FETCH_MANAGER_FEEDBACK_RESPONSE_FAILURE]: fetchManagerFeedbackResponseFailure
});

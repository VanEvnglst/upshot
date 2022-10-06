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
  },
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
  resetResponseState: [''],
  postFLFeedbackResponse: ['data'],
  postFLFeedbackResponseSuccess: [],
  postFLFeedbackResponseFailure: ['error'],
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

export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_FL_FEEDBACK_LIST]: fetchFLFeedbackList,
  [Types.FETCH_FL_FEEDBACK_LIST_SUCCESS]: fetchFLFeedbackListSuccess,
  [Types.FETCH_FL_FEEDBACK_LIST_FAILURE]: fetchFLFeedbackListFailure,
  [Types.FETCH_FL_FEEDBACK]: fetchFLFeedback,
  [Types.FETCH_FL_FEEDBACK_SUCCESS]: fetchFLFeedbackSuccess,
  [Types.FETCH_FL_FEEDBACK_FAILURE]: fetchFLFeedbackFailure,
  [Types.RESET_RESPONSE_STATE]: resetResponseState,
  [Types.SET_RESPONSE_DATA]: setResponseData,
  [Types.SET_RESPONSE_ACTIVE_STEP]: setResponseActiveStep,
  [Types.POST_FL_FEEDBACK_RESPONSE]: postFLFeedbackResponse,
  [Types.POST_FL_FEEDBACK_RESPONSE_SUCCESS]: postFLFeedbackResponseSuccess,
  [Types.POST_FL_FEEDBACK_RESPONSE_FAILURE]: postFLFeedbackResponseFailure,
});

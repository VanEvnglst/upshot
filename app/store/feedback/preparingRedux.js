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
  maxStep: 11,
  step1: { ...defaultState },
  step2: { ...defaultState },
  step3: { ...defaultState },
  step3B: { ...defaultState },
  step4: { ...defaultState },
  step4B: { ...defaultState },
  step5: { ...defaultState },
  step5B: { ...defaultState },
  step5C: { ...defaultState },
  closed: false,
  started: false,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setPreparingStatus: ['key', 'data'],
  setPrepActiveStep: ['step'],
  resetPreparingState: null,
  setPreparingData: ['key', 'data'],
  postFeedbackPreparing: ['journeyId'],
  postFeedbackPreparingSuccess: ['preparingId'],
  postFeedbackPreparingFailure: ['error'],
  updateFeedbackPreparing: ['data'],
  updateFeedbackPreparingSuccess: [],
  updateFeedbackPreparingFailure: ['error'],
  updatePreparingSchedule: ['data'],
  updatePreparingScheduleSuccess: null,
  updatePreparingScheduleFailure: ['error'],
  closeFeedbackPreparing: ['preparingId'],
  closeFeedbackPreparingSuccess: null,
  closeFeedbackPreparingFailure: ['error'],
  fetchCurrentPreparing: ['preparingId'],
  fetchCurrentPreparingSuccess: ['data'],
  fetchCurrentPreparingFailure: ['error'],
});

export const PreparingTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const setPrepActiveStep = (state, { step }) => {
  if (state.get('activeStep') > state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({ activeStep: step });
};

const resetPreparingState = state => state.merge(INITIAL_STATE);

const setPreparingData = (state, { key, data }) => {
  const stepData = state.get(key);
  return state.merge({
    [key]: { data },
  });
};

const postFeedbackPreparing = state =>
  state.merge({
    ...state.get('INITIAL_STATE'),
    fetching: true,
    error: '',
  });

const postFeedbackPreparingSuccess = (state, preparingId) => {
  return state.merge({
    fetching: false,
    id: preparingId,
  });
};

const postFeedbackPreparingFailure = (state, error) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const updateFeedbackPreparing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const updateFeedbackPreparingSuccess = state =>
  state.merge({
    fetching: false,
  });

const updateFeedbackPreparingFailure = (state, error) =>
  state.merge({
    fetching: false,
    error,
  });

const setPreparingStatus = (state, { key, data }) => {
  return state.merge({
    ...state.get(key),
    [key]: data,
  });
};

const closeFeedbackPreparing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const closeFeedbackPreparingSuccess = state =>
  state.merge({
    fetching: false,
  });

const closeFeedbackPreparingFailure = (state, error) =>
  state.merge({
    fetching: false,
    error,
  });

const fetchCurrentPreparing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchCurrentPreparingSuccess = state =>
  state.merge({
    fetching: false,
  });

const fetchCurrentPreparingFailure = (state, error) =>
  state.merge({
    fetching: false,
    error,
  });

const updatePreparingSchedule = state => 
  state.merge({
    fetching: true,
    error: '',
  });

const updatePreparingScheduleSuccess = state =>
  state.merge({
    fetching: false,
  });

const updatePreparingScheduleFailure = (state, error) => 
  state.merge({
    fetching: false,
    error,
  })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PREP_ACTIVE_STEP]: setPrepActiveStep,
  [Types.SET_PREPARING_DATA]: setPreparingData,
  [Types.POST_FEEDBACK_PREPARING]: postFeedbackPreparing,
  [Types.POST_FEEDBACK_PREPARING_SUCCESS]: postFeedbackPreparingSuccess,
  [Types.POST_FEEDBACK_PREPARING_FAILURE]: postFeedbackPreparingFailure,
  [Types.UPDATE_FEEDBACK_PREPARING]: updateFeedbackPreparing,
  [Types.UPDATE_FEEDBACK_PREPARING_SUCCESS]: updateFeedbackPreparingSuccess,
  [Types.UPDATE_FEEDBACK_PREPARING_FAILURE]: updateFeedbackPreparingFailure,
  [Types.SET_PREPARING_STATUS]: setPreparingStatus,
  [Types.RESET_PREPARING_STATE]: resetPreparingState,
  [Types.CLOSE_FEEDBACK_PREPARING]: closeFeedbackPreparing,
  [Types.CLOSE_FEEDBACK_PREPARING_SUCCESS]: closeFeedbackPreparingSuccess,
  [Types.CLOSE_FEEDBACK_PREPARING_FAILURE]: closeFeedbackPreparingFailure,
  [Types.FETCH_CURRENT_PREPARING]: fetchCurrentPreparing,
  [Types.FETCH_CURRENT_PREPARING_SUCCESS]: fetchCurrentPreparingSuccess,
  [Types.FETCH_CURRENT_PREPARING_FAILURE]: fetchCurrentPreparingFailure,
  [Types.UPDATE_PREPARING_SCHEDULE]:
  updatePreparingSchedule,
  [Types.UPDATE_PREPARING_SCHEDULE_SUCCESS]:
  updatePreparingScheduleSuccess,
  [Types.UPDATE_PREPARING_SCHEDULE_FAILURE]:
  updatePreparingScheduleFailure,
});

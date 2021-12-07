import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};

/* ------------- Initial State ------------- */
export const PREPARING_STATE = Map({
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
  postFeedbackPreparing: [''],
  postFeedbackPreparingSuccess: ['preparingId'],
  postFeedbackPreparingFailure: ['error'],
  updateFeedbackPreparing: ['data'],
});

export const PreparingTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const setPrepActiveStep = (state, { step }) => {
  if(state.get('activeStep') > state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({ activeStep: step });
}

const resetPreparingState = state => state.merge(INITIAL_STATE);

const setPreparingData = (state, { key, data }) => {
  const stepData = state.get(key);
  return state.merge({
    [key]: { data },
  });
};

const postFeedbackPreparing = state => state.merge({
  fetching: true,
  error: '',
});

const postFeedbackPreparingSuccess = (state, preparingId ) => {
  return state.merge({
    fetching: false,
    id: preparingId
  });
}

const postFeedbackPreparingFailure = (state, error) => {
  return state.merge({
    fetching: false,
    error
  });
}

const updateFeedbackPreparing = state => state.merge({
  fetching: true,
});

const setPreparingStatus = (state, { key, data }) => {
  return state.merge({
    [key]: data
  });
}


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(PREPARING_STATE, {
  [Types.SET_PREP_ACTIVE_STEP]: setPrepActiveStep,
  [Types.SET_PREPARING_DATA]: setPreparingData,
  [Types.POST_FEEDBACK_PREPARING]: postFeedbackPreparing,
  [Types.POST_FEEDBACK_PREPARING_SUCCESS]: postFeedbackPreparingSuccess,
  [Types.POST_FEEDBACK_PREPARING_FAILURE]: postFeedbackPreparingFailure,
  [Types.UPDATE_FEEDBACK_PREPARING]: updateFeedbackPreparing,
  [Types.SET_PREPARING_STATUS]: setPreparingStatus,
  [Types.RESET_PREPARING_STATE]: resetPreparingState,
});

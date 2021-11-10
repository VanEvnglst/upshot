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
  step1: { ...defaultState },
  step2: { ...defaultState },
  step3: { ...defaultState },
  step4: { ...defaultState },
  reminderTime: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  postFeedbackDocumenting: ['data'],
  postFeedbackDocumentingSuccess: ['documentingId'],
  postFeedbackDocumentingFailure: ['error'],
  updateFeedbackDocumenting: [''],
  setActiveStep: ['step'],
  resetDocumentingState: null,
  setDocumentingData: ['key', 'data'],
});

/* ------------- Reducers ------------- */
export const DocumentingTypes = Types;
export default Creators;

const setActiveStep = (state, { step }) => {
  console.log('stat', state);
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
};

const resetDocumentingState = state =>
  state.merge(INITIAL_STATE);

const setDocumentingData = (state, { key, data }) => {
  const stepData = state.get(key);
  return state.merge({
    [key]: { data },
  });
};

const postFeedbackDocumenting = state =>
  state.merge({
    fetching: true,
  });

const postFeedbackDocumentingSuccess = (state, { documentingId }) => {
  debugger;
  return state.merge({
    id: documentingId,
  });
};

const postFeedbackDocumentingFailure = (state, { error }) => state.merge({});

const updateFeedbackDocumenting = state => state.merge({});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ACTIVE_STEP]: setActiveStep,
  [Types.RESET_DOCUMENTING_STATE]: resetDocumentingState,
  [Types.SET_DOCUMENTING_DATA]: setDocumentingData,
  [Types.POST_FEEDBACK_DOCUMENTING]: postFeedbackDocumenting,
  [Types.POST_FEEDBACK_DOCUMENTING_SUCCESS]: postFeedbackDocumentingSuccess,
  [Types.POST_FEEDBACK_DOCUMENTING_FAILURE]: postFeedbackDocumentingFailure,
  [Types.UPDATE_FEEDBACK_DOCUMENTING]: updateFeedbackDocumenting,
});

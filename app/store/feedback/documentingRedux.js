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
  maxStep: 3,
  step1: { ...defaultState },
  step2: { ...defaultState },
  step3: { ...defaultState },
  reminderTime: null,
  otherTopic: '',
  closed: false,
  started: false,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  postFeedbackDocumenting: ['data'],
  postFeedbackDocumentingSuccess: ['documentingId'],
  postFeedbackDocumentingFailure: ['error'],
  updateFeedbackDocumenting: ['data'],
  updateFeedbackDocumentingSuccess: null,
  updateFeedbackDocumentingFailure: ['error'],
  updateDocumentingReminder: ['data'],
  updateDocumentingReminderSuccess: null,
  updateDocumentingReminderFailure: ['error'],
  setActiveStep: ['step'],
  resetDocumentingState: null,
  setDocumentingData: ['key', 'data'],
  setDocumentingStatus: ['key', 'status'],
  deleteFeedbackDocumenting: [''],
  deleteFeedbackDocumentingSuccess: null,
  deleteFeedbackDocumentingFailure: ['error'],
  fetchCurrentDocumenting: ['documentingId'],
  fetchCurrentDocumentingSuccess: ['data'],
  fetchCurrentDocumentingFailure: ['error'],
  closeFeedbackDocumenting: ['documentingId'],
  closeFeedbackDocumentingSuccess: null,
  closeFeedbackDocumentingFailure: ['error'],
});

/* ------------- Reducers ------------- */
export const DocumentingTypes = Types;
export default Creators;

const setActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
};

const resetDocumentingState = state => state.merge(INITIAL_STATE);

const setDocumentingData = (state, { key, data }) => {
  const stepData = state.get(key);
  return state.merge({
    [key]: { data },
  });
};

const setDocumentingStatus = (state, { key, status }) => {
  return state.merge({
    [key]: status,
  });
};

const postFeedbackDocumenting = state =>
  state.merge({
    fetching: true,
  });

const postFeedbackDocumentingSuccess = (state, { documentingId }) => {
  return state.merge({
    id: documentingId,
  });
};

const postFeedbackDocumentingFailure = (state, { error }) => state.merge({});

const updateFeedbackDocumenting = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const updateFeedbackDocumentingSuccess = state =>
  state.merge({
    fetching: false,
  });

const updateFeedbackDocumentingFailure = state =>
  state.merge({
    fetching: false,
  });

const deleteFeedbackDocumenting = state =>
  state.merge({
    fetching: true,
  });

const deleteFeedbackDocumentingSuccess = state =>
  state.merge({
    fetching: false,
  });

const deleteFeedbackDocumentingFailure = state =>
  state.merge({
    fetching: false,
  });

const fetchCurrentDocumenting = state =>
  state.merge({
    fetching: true,
  });

const fetchCurrentDocumentingSuccess = state =>
  state.merge({
    fetching: false,
  });

const updateDocumentingReminder = state =>
  state.merge({
    fetching: true,
  });

const updateDocumentingReminderSuccess = state =>
  state.merge({
    fetching: false,
  });

const updateDocumentingReminderFailure = (state, error) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const closeFeedbackDocumenting = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const closeFeedbackDocumentingSuccess = state =>
  state.merge({
    fetching: false,
  });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_ACTIVE_STEP]: setActiveStep,
  [Types.RESET_DOCUMENTING_STATE]: resetDocumentingState,
  [Types.SET_DOCUMENTING_DATA]: setDocumentingData,
  [Types.SET_DOCUMENTING_STATUS]: setDocumentingStatus,
  [Types.POST_FEEDBACK_DOCUMENTING]: postFeedbackDocumenting,
  [Types.POST_FEEDBACK_DOCUMENTING_SUCCESS]: postFeedbackDocumentingSuccess,
  [Types.POST_FEEDBACK_DOCUMENTING_FAILURE]: postFeedbackDocumentingFailure,
  [Types.UPDATE_FEEDBACK_DOCUMENTING]: updateFeedbackDocumenting,
  [Types.UPDATE_FEEDBACK_DOCUMENTING_SUCCESS]: updateFeedbackDocumentingSuccess,
  [Types.UPDATE_FEEDBACK_DOCUMENTING_FAILURE]: updateFeedbackDocumentingFailure,
  [Types.DELETE_FEEDBACK_DOCUMENTING]: deleteFeedbackDocumenting,
  [Types.DELETE_FEEDBACK_DOCUMENTING_SUCCESS]: deleteFeedbackDocumentingSuccess,
  [Types.DELETE_FEEDBACK_DOCUMENTING_FAILURE]: deleteFeedbackDocumentingFailure,
  [Types.FETCH_CURRENT_DOCUMENTING]: fetchCurrentDocumenting,
  [Types.FETCH_CURRENT_DOCUMENTING_SUCCESS]: fetchCurrentDocumentingSuccess,
  [Types.UPDATE_DOCUMENTING_REMINDER]: updateDocumentingReminder,
  [Types.UPDATE_DOCUMENTING_REMINDER_SUCCESS]: updateDocumentingReminderSuccess,
  [Types.UPDATE_DOCUMENTING_REMINDER_FAILURE]: updateDocumentingReminderFailure,
  [Types.CLOSE_FEEDBACK_DOCUMENTING]: closeFeedbackDocumenting,
  [Types.CLOSE_FEEDBACK_DOCUMENTING_SUCCESS]: closeFeedbackDocumentingSuccess,
});

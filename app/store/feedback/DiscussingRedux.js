import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  id: null,
  error: '',
  actionPlan: {
    action: '',
    dateToHappen: '',
    whoWillMakeIt: '',
  },
  closed: false,
  started: true
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  postFeedbackDiscussing: ['journeyId'],
  postFeedbackDiscussingSuccess: ['discussingId'],
  postFeedbackDiscussingFailure: ['error'],
  updateFeedbackDiscussing: ['data'],
  updateFeedbackDiscussingSuccess: null,
  updateFeedbackDiscussingFailure: ['error'],
  updateDiscussingReminder: ['data'],
  updateDiscussingReminderSuccess: null,
  updateDiscussingReminderFailure: ['error'],
  resetDiscussingState: null,
  setDiscussingStatus: ['key', 'status'],
  fetchCurrentDiscussing: ['discussingId'],
  fetchCurrentDiscussingSuccess: ['data'],
  fetchCurrentDiscussingFailure: ['error'],
  closeFeedbackDiscussing: ['discussingId'],
  closeFeedbackDiscussingSuccess: null,
  closeFeedbackDiscussingFailure: ['error'],
});

/* ------------- Reducers ------------- */
export const DiscussingTypes = Types;
export default Creators;

const resetDiscussingState = state => state.merge(INITIAL_STATE);

const setDiscussingStatus = (state, { key, status }) => {
  return state.merge({
    [key]: status,
  });
};

const postFeedbackDiscussing = state => state.merge({
  fetching: true,
  error: '',
});

const postFeedbackDiscussingSuccess = (state, { discussingId }) => state.merge({
  id: discussingId,
  fetching: false,
});

const postFeedbackDiscussingFailure = (state, { error }) => state.merge({
  fetching: false,
  error
});

const updateFeedbackDiscussing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const updateFeedbackDiscussingSuccess = (state, { data }) =>
  state.merge({
    fetching: false,
  });

const updateFeedbackDiscussingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  });

const updateDiscussingReminder = state => 
  state.merge({
    fetching: true,
    error: '',
  });

const updateDiscussingReminderSuccess = state => 
  state.merge({
    fetching: false,
  });

const updateDiscussingReminderFailure = (state, {error}) =>
  state.merge({
    fetching: false,
    error
  });

const fetchCurrentDiscussing = state => 
  state.merge({
    fetching: true,
    error: '',
  });

const fetchCurrentDiscussingSuccess = (state) =>
  state.merge({
    fetching: false,
  })

const fetchCurrentDiscussingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  });

const closeFeedbackDiscussing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const closeFeedbackDiscussingSuccess = state => 
  state.merge({
    fetching: false
  });

const closeFeedbackDiscussingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  })


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.POST_FEEDBACK_DISCUSSING]: postFeedbackDiscussing,
  [Types.POST_FEEDBACK_DISCUSSING_SUCCESS]: postFeedbackDiscussingSuccess,
  [Types.POST_FEEDBACK_DISCUSSING_FAILURE]: postFeedbackDiscussingFailure,
  [Types.UPDATE_FEEDBACK_DISCUSSING]: updateFeedbackDiscussing,
  [Types.UPDATE_FEEDBACK_DISCUSSING_SUCCESS]: updateFeedbackDiscussingSuccess,
  [Types.UPDATE_FEEDBACK_DISCUSSING_FAILURE]: updateFeedbackDiscussingFailure,
  [Types.UPDATE_DISCUSSING_REMINDER]: updateDiscussingReminder,
  [Types.UPDATE_DISCUSSING_REMINDER_SUCCESS]: updateDiscussingReminderSuccess,
  [Types.UPDATE_DISCUSSING_REMINDER_FAILURE]: updateDiscussingReminderFailure,
  [Types.RESET_DISCUSSING_STATE]: resetDiscussingState,
  [Types.SET_DISCUSSING_STATUS]: setDiscussingStatus,
  [Types.FETCH_CURRENT_DISCUSSING]: fetchCurrentDiscussing,
  [Types.FETCH_CURRENT_DISCUSSING_SUCCESS]: fetchCurrentDiscussingSuccess,
  [Types.FETCH_CURRENT_DISCUSSING_FAILURE]: fetchCurrentDiscussingFailure,
  [Types.CLOSE_FEEDBACK_DISCUSSING]: closeFeedbackDiscussing,
  [Types.CLOSE_FEEDBACK_DISCUSSING_SUCCESS]: closeFeedbackDiscussingSuccess,
  [Types.CLOSE_FEEDBACK_DISCUSSING_FAILURE]: closeFeedbackDiscussingFailure,
});
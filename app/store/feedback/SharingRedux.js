import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  id: null,
  error: '',
  activeStep: 1,
  maxStep: 3,
  step1: { ...defaultState },
  step2: { ...defaultState },
  closed: false,
  started: false,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  postFeedbackSharing: ['journeyId'],
  postFeedbackSharingSuccess: ['sharingId'],
  postFeedbackSharingFailure: ['error'],
  updateFeedbackSharing: ['data'],
  updateFeedbackSharingSuccess: null,
  updateFeedbackSharingFailure: ['error'],
  updateSharingReminder: ['data'],
  updateSharingReminderSuccess: null,
  updateSharingReminderFailure: ['error'],
  setSharingActiveStep: ['step'],
  setSharingData: ['key', 'data'],
  setSharingStatus: ['key', 'status'],
  fetchCurrentSharing: ['sharingId'],
  fetchCurrentSharingSuccess: ['data'],
  fetchCurrentSharingFailure: ['error'],
  closeFeedbackSharing: ['sharingId'],
  closeFeedbackSharingSuccess: null,
  closeFeedbackSharingFailure: ['error'],
  resetSharingState: null,
});

/* ------------- Reducers ------------- */
export const SharingTypes = Types;
export default Creators;

const setSharingActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
};

const resetSharingState = state => state.merge(INITIAL_STATE);

const setSharingData = (state, { key, data }) => {
  const stepData = state.get(key);
  return state.merge({
    [key]: { data },
  });
};

const setSharingStatus = (state, { key, status }) => {
  return state.merge({
    [key]: status
  });
};

const postFeedbackSharing = state => state.merge({
  fetching: true,
  error: '',
});

const postFeedbackSharingSuccess = (state, { sharingId }) =>
  state.merge({
    fetching: false,
    id: sharingId,
  })


const postFeedbackSharingFailure = (state, { error }) => 
  state.merge({
    fetching: false,
    error
  });

const updateFeedbackSharing = state => state.merge({
  fetching: true,
  error: '',
});

const updateFeedbackSharingSuccess = state => 
  state.merge({
    fetching: false,
  });

const updateFeedbackSharingFailure = (state, { error}) =>
  state.merge({
    fetching: false,
    error
  });

const updateSharingReminder = state => state.merge({
  fetching: true,
  error: ''
});

const updateSharingReminderSuccess = state => state.merge({
  fetching: false,
});

const updateSharingReminderFailure = (state, {error}) => state.merge({
  fetching: false,
  error
})

const fetchCurrentSharing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchCurrentSharingSuccess = state => 
  state.merge({
    fetching: false,
  });

const fetchCurrentSharingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const closeFeedbackSharing = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const closeFeedbackSharingSuccess = state =>
  state.merge({
    fetching: false,
  });

const closeFeedbackSharingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  })

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, { 
  [Types.SET_SHARING_ACTIVE_STEP]: setSharingActiveStep,
  [Types.RESET_SHARING_STATE]: resetSharingState,
  [Types.SET_SHARING_DATA]: setSharingData,
  [Types.SET_SHARING_STATUS]: setSharingStatus,
  [Types.POST_FEEDBACK_SHARING]: postFeedbackSharing,
  [Types.POST_FEEDBACK_SHARING_SUCCESS]: postFeedbackSharingSuccess,
  [Types.POST_FEEDBACK_SHARING_FAILURE]: postFeedbackSharingFailure,
  [Types.UPDATE_FEEDBACK_SHARING]: updateFeedbackSharing,
  [Types.UPDATE_FEEDBACK_SHARING_SUCCESS]: updateFeedbackSharingSuccess,
  [Types.UPDATE_FEEDBACK_SHARING_FAILURE]: updateFeedbackSharingFailure,
  [Types.UPDATE_SHARING_REMINDER]: updateSharingReminder,
  [Types.UPDATE_SHARING_REMINDER_SUCCESS]: updateSharingReminderSuccess,
  [Types.UPDATE_SHARING_REMINDER_FAILURE]: updateSharingReminderFailure,
  [Types.FETCH_CURRENT_SHARING]: fetchCurrentSharing,
  [Types.FETCH_CURRENT_SHARING_SUCCESS]: fetchCurrentSharingSuccess,
  [Types.FETCH_CURRENT_SHARING_FAILURE]: fetchCurrentSharingFailure,
  [Types.CLOSE_FEEDBACK_SHARING]: closeFeedbackSharing,
  [Types.CLOSE_FEEDBACK_SHARING_SUCCESS]: closeFeedbackSharingSuccess,
  [Types.CLOSE_FEEDBACK_SHARING_FAILURE]: closeFeedbackSharingFailure,
});

import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};

export const INITIAL_STATE = Map({
  fetching: false,
  id: null,
  activeStep: 1,
  maxStep: 5,
  lastStep: null,
  step1: { ...defaultState },
  step2: { ...defaultState },
  step3: { ...defaultState },
  step4: { ...defaultState },
  step5: { ...defaultState },
  staffRating: { fetching: false, ...defaultState, error: '' },
  closed: false,
  started: false,
});

const { Types, Creators } = createActions({
  setReflectingStatus: ['key', 'data'],
  setReflectingActiveStep: ['step'],
  resetReflectingState: null,
  setReflectingData: ['key', 'data'],
  postFeedbackReflecting: ['journeyId'],
  postFeedbackReflectingSuccess: ['reflectingId'],
  postFeedbackReflectingFailure: ['error'],
  updateFeedbackReflecting: ['data'],
  updateFeedbackReflectingSuccess: [],
  updateFeedbackReflectingFailure: ['error'],
  closeFeedbackReflecting: ['reflectingId'],
  closeFeedbackReflectingSuccess: null,
  closeFeedbackReflectingFailure: ['error'],
  fetchCurrentReflecting: ['reflectingId'],
  fetchCurrentReflectingSuccess: ['data'],
  fetchCurrentReflectingFailure: ['error'],
  fetchStaffRatings: [''],
  fetchStaffRatingsSuccess: ['ratings'],
  fetchStaffRatingsFailure: ['error'],
});

export const ReflectingTypes = Types;
export default Creators;

const setReflectingStatus = (state, { key, data }) => {
  return state.merge({
    ...state.get(key),
    [key]: data,
  });
};

const setReflectingActiveStep = (state, { step }) => {
  if (state.get('activeStep') > state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({ activeStep: step });
};

const resetReflectingState = state => state.merge(INITIAL_STATE);

const setReflectingData = (state, { key, data }) => {
  const stepData = state.get(key);
  return state.merge({
    [key]: { data },
  });
};

const postFeedbackReflecting = state =>
  state.merge({
    ...state.get('INITIAL_STATE'),
    fetching: true,
    error: '',
  });

const postFeedbackReflectingSuccess = (state, reflectingId) => {
  return state.merge({
    fetching: false,
    id: reflectingId,
  });
};

const postFeedbackReflectingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const updateFeedbackReflecting = state =>
  state.merge({
    ...state.get('INITIAL_STATE'),
    fetching: true,
    error: '',
  });

const updateFeedbackReflectingSuccess = state =>
  state.merge({
    fetching: false,
  });

const updateFeedbackReflectingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const closeFeedbackReflecting = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const closeFeedbackReflectingSuccess = state =>
  state.merge({
    fetching: false,
  });

const closeFeedbackReflectingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const fetchCurrentReflecting = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchCurrentReflectingSuccess = state =>
  state.merge({
    fetching: false,
  });

const fetchCurrentReflectingFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const fetchStaffRatings = state =>
  state.merge({
    staffRating: {
      fetching: true,
      error: '',
    }
  });

const fetchStaffRatingsSuccess = (state, {ratings}) => {
  return state.merge({
    staffRating: {
      data: ratings,
      fetching: false
    }
  })
}

const fetchStaffRatingsFailure = (state, {error}) => 
  state.merge({
    staffRating: {
      fetching: false,
      error
    }
  });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_REFLECTING_DATA]: setReflectingData,
  [Types.SET_REFLECTING_ACTIVE_STEP]: setReflectingActiveStep,
  [Types.SET_REFLECTING_STATUS]: setReflectingStatus,
  [Types.RESET_REFLECTING_STATE]: resetReflectingState,
  [Types.POST_FEEDBACK_REFLECTING]: postFeedbackReflecting,
  [Types.POST_FEEDBACK_REFLECTING_SUCCESS]: postFeedbackReflectingSuccess,
  [Types.POST_FEEDBACK_REFLECTING_FAILURE]: postFeedbackReflectingFailure,
  [Types.UPDATE_FEEDBACK_REFLECTING]: updateFeedbackReflecting,
  [Types.UPDATE_FEEDBACK_REFLECTING_SUCCESS]: updateFeedbackReflectingSuccess,
  [Types.UPDATE_FEEDBACK_REFLECTING_FAILURE]: updateFeedbackReflectingFailure,
  [Types.CLOSE_FEEDBACK_REFLECTING]: closeFeedbackReflecting,
  [Types.CLOSE_FEEDBACK_REFLECTING_SUCCESS]: closeFeedbackReflectingSuccess,
  [Types.CLOSE_FEEDBACK_REFLECTING_FAILURE]: closeFeedbackReflectingFailure,
  [Types.FETCH_CURRENT_REFLECTING]: fetchCurrentReflecting,
  [Types.FETCH_CURRENT_REFLECTING_SUCCESS]: fetchCurrentReflectingSuccess,
  [Types.FETCH_CURRENT_REFLECTING_FAILURE]: fetchCurrentReflectingFailure,
  [Types.FETCH_STAFF_RATINGS]: fetchStaffRatings,
  [Types.FETCH_STAFF_RATINGS_SUCCESS]: fetchStaffRatingsSuccess,
  [Types.FETCH_STAFF_RATINGS_FAILURE]: fetchStaffRatingsFailure,
});

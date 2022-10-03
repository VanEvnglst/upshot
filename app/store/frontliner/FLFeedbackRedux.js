import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';
import FlashMessage from 'react-native-flash-message';

export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  activeFeedbackList: [],
  selectedFeedback: {},
});

const { Types, Creators } = createActions({
  fetchFLFeedbackList: [''],
  fetchFLFeedbackListSuccess: ['feedbackList'],
  fetchFLFeedbackListFailure: ['error'],
  resetFLFeedbackState: [],
  fetchFLFeedback: ['id'],
  fetchFLFeedbackSuccess: ['data'],
  fetchFLFeedbackFailure: ['error'],
});

export const FrontlinerFeedbackTypes = Types;
export default Creators;

const fetchFLFeedbackList = state => state.merge({
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
    error
  });



  export const reducer = createReducer(INITIAL_STATE, {
    [Types.FETCH_FL_FEEDBACK_LIST]: fetchFLFeedbackList,
    [Types.FETCH_FL_FEEDBACK_LIST_SUCCESS]: fetchFLFeedbackListSuccess,
    [Types.FETCH_FL_FEEDBACK_LIST_FAILURE]: fetchFLFeedbackListFailure,
    [Types.FETCH_FL_FEEDBACK]: fetchFLFeedback,
    [Types.FETCH_FL_FEEDBACK_SUCCESS]: fetchFLFeedbackSuccess,
    [Types.FETCH_FL_FEEDBACK_FAILURE]: fetchFLFeedbackFailure,
  })
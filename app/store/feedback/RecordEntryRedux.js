import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  activeStep: 1,
  maxStep: 6,
  entryDetails: null,
  entryRecordDetails: null,


});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setEntryActiveStep: ['step'],
  setEntryMaxStep: ['step'],
  resetEntryStep: null,
  setEntryData: ['key', 'data'],
  postRecordEntry: [''],
  postRecordEntrySuccess: [''],
  postRecordEntryFailure: ['error'],
  postEditEntry: [''],
  postEditEntrySuccess: [''],
  postEditEntryFailure: ['error'],
  postCloseRecordEntry: [''],
  postCloseRecordEntrySuccess: [''],
  postCloseRecordEntryFailure: ['error'],

});

export const RecordEntryTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */

const setEntryActiveStep = (state, { step }) => {
  if (state.get('activeStep') >= state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({ activeStep: step });
}

const setEntryMaxStep = (state, { step }) =>
  state.merge({
    maxStep: step
  })

const resetEntryStep = state =>
  state.merge({
    activeStep: 1
  });
  
const setEntryData = (state, { key, data }) => {
  return state.merge({
    entryDetails: {
      ...state.get('entryDetails'),
      [key]: data,
    }
  })
}

const postRecordEntry = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const postRecordEntrySuccess = (state, { entryRecordDetails }) =>
  state.merge({
    fetching: false,
    entryRecordDetails
  })

const postRecordEntryFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  })

const postEditEntry = state =>
  state.merge({
    fetching: true,
    error: ''
  })

const postEditEntrySuccess = state =>
  state.merge({
    fetching: false,
  })

const postEditEntryFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  })

const postCloseRecordEntry = state =>
  state.merge({
    fetching: true,
    error: '',
  })

const postCloseRecordEntrySuccess = state =>
  state.merge({
    fetching: false,
  })

const postCloseRecordEntryFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  });


  /* ------------- Hookup Reducers To Types ------------- */
  export const reducer = createReducer(INITIAL_STATE, {
    [Types.POST_RECORD_ENTRY]: postRecordEntry,
    [Types.POST_RECORD_ENTRY_SUCCESS]: postRecordEntrySuccess,
    [Types.POST_RECORD_ENTRY_FAILURE]: postRecordEntryFailure,
    [Types.POST_EDIT_ENTRY]: postEditEntry,
    [Types.POST_EDIT_ENTRY_SUCCESS]: postEditEntrySuccess,
    [Types.POST_EDIT_ENTRY_FAILURE]: postEditEntryFailure,
    [Types.POST_CLOSE_RECORD_ENTRY]: postCloseRecordEntry,
    [Types.POST_CLOSE_RECORD_ENTRY_SUCCESS]: postCloseRecordEntrySuccess,
    [Types.POST_CLOSE_RECORD_ENTRY_FAILURE]: postCloseRecordEntryFailure,
    [Types.SET_ENTRY_ACTIVE_STEP]: setEntryActiveStep,
    [Types.RESET_ENTRY_STEP]: resetEntryStep,
    [Types.SET_ENTRY_MAX_STEP]: setEntryMaxStep,
    [Types.SET_ENTRY_DATA]: setEntryData
  });

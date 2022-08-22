import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  activeStep: 1,
  maxStep: 4,
  step1: { ...defaultState},
  step2: { ...defaultState},
  error: '',
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setCaptureActiveStep: ['step'],
  setCaptureData: ['key', 'data'],
  postCaptureMoment: ['data'],
  postCaptureMomentSuccess: [],
  postCaptureMomentFailure: ['error'],
});


export const CaptureMomentTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const setCaptureActiveStep = (state, { step }) => {
  if (state.get('activeStep') > state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({ activeStep: step });
}

const setCaptureData = (state, { key, data }) => {
  return state.merge({
    [key]: { data },
  })
}



/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CAPTURE_ACTIVE_STEP]: setCaptureActiveStep,
  [Types.SET_CAPTURE_DATA]: setCaptureData,
});
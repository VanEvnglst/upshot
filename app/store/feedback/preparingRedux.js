import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  isComplete: false,
  data: null,
};

/* ------------- Initial State ------------- */
export const PREPARING_STATE = Map({
  id: null,
  activeStep: 1,
  maxStep: 11,
  step1: { ...defaultState },
  step2: { ...defaultState },
  step3: { ...defaultState },
  step4: { ...defaultState },
  step5: { ...defaultState },
  closed: false,
  started: false,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setPrepActiveStep: ['data'],
  postPreparing: [''],
  postPreparingSuccess: null,
  postPreparingFailure: ['error'],
  updatePreparing: [''],
});

export const PreparingTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const setPrepActiveStep = (state, { step }) =>
  state.merge({ activeStep: step });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(PREPARING_STATE, {
  [Types.SET_PREP_ACTIVE_STEP]: setPrepActiveStep,
});

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
  step4: { ...defaultState },
  step5: { ...defaultState },
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setPrepActiveStep: ['step'],
  resetPreparingState: null,
  setPreparingData: ['key', 'data'],
  postPreparing: [''],
  postPreparingSuccess: null,
  postPreparingFailure: ['error'],
  updatePreparing: [''],
});

export const PreparingTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const setPrepActiveStep = (state, { step }) => {
  if(state.get('activeStep') >= state.get('maxStep')) {
    return;
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

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(PREPARING_STATE, {
  [Types.SET_PREP_ACTIVE_STEP]: setPrepActiveStep,
  [Types.RESET_PREPARING_STATE]: resetPreparingState,
  [Types.SET_PREPARING_DATA]: setPreparingData,
});

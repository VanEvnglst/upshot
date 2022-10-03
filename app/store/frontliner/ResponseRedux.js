import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  maxStep: 7,
  activeStep: 1,
  clarifications: {
    event: '',
    impact: '',
    continue: '',
    doLess: '',
    stopDoing: '',
    additionalNotes: '',
  },
  managerEntry: {
    event: '',
    impact: '',
    continue: '',
    doLess: '',
    stopDoing: '',
    additionalNotes: '',
  }
});


const { Types, Creators } = createActions({
  fetchFLFeedback: [''],
  fetchFLFeedbackSuccess: [],
  fetchFLFeedbackFailure: ['error'],
  fetchManagerFeedback: [''],
  fetchManagerFeedbackSuccess: [],
  fetchManagerFeedbackFailure: ['error'],
  setResponseActiveStep: ['step'],
  setResponseData: ['key', 'data'],
  resetResponseState: [''],
});

export const FLResponseTypes = Types;
export default Creators;

const resetResponseState = state => state.merge(INITIAL_STATE);

const setResponseData = (state, { key, data }) => {
  return state.merge({
    clarifications: {
      ...state.get('clarifications'),
      [key]: data
    }
  })
}

const setResponseActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step })
}


export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_RESPONSE_STATE]: resetResponseState,
  [Types.SET_RESPONSE_DATA]: setResponseData,
  [Types.SET_RESPONSE_ACTIVE_STEP]: setResponseActiveStep,
});

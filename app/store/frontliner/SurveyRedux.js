import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  data: null,
};


export const INITIAL_STATE = Map({
  fetching: false,
  id: null,
  activeStep: 1,
  maxStep: 3,
  overallSatisfaction: { ...defaultState },
  howDidYouFeel: { ...defaultState },
});


const { Types, Creators } = createActions({
setSurveyActiveStep: ['step'],
});


export const SurveyTypes = Types;
export default Creators;

const setSurveyActiveStep = (state, { step }) => {
  if (state.get('activeStep' >= state.get('maxStep'))) {
    return;
  }
  return state.merge({ activeStep: step });
}

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_SURVEY_ACTIVE_STEP]: setSurveyActiveStep,
});
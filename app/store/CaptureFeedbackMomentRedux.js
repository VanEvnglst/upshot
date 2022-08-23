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
  layerOneTopics: [],
  layerTwoTopics: [],
  error: '',
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setCaptureActiveStep: ['step'],
  setCaptureData: ['key', 'data'],
  postCaptureMoment: ['data'],
  postCaptureMomentSuccess: [],
  postCaptureMomentFailure: ['error'],
  fetchLayerOneTopics: [''],
  fetchLayerOneTopicsSuccess: ['layerOneList'],
  fetchLayerOneTopicsFailure: ['error'],
  fetchLayerTwoTopics: ['data'],
  fetchLayerTwoTopicsSuccess: ['layerTwoList'],
  fetchLayerTwoTopicsFailure: ['error'],
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

const fetchLayerOneTopics = state => 
  state.merge({
    fetching: true,
    error: ''
  });

  const fetchLayerOneTopicsSuccess = (state, { layerOneList }) => 
  state.merge({
    fetching: false,
    layerOneTopics: layerOneList
  })

  const fetchLayerOneTopicsFailure = (state, { error }) => 
  state.merge({
    fetching: false,
    error: error
  });

  const fetchLayerTwoTopics = state => 
  state.merge({
    fetching: true,
    error: '',
  })

  const fetchLayerTwoTopicsSuccess = (state, { layerTwoList} ) => 
  state.merge({
    fetching: false,
    layerTwoTopics: layerTwoList
  })

  const fetchLayerTwoTopicsFailure = (state, { error }) => 
  state.merge({
    fetching: false,
    error: error
  })



/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_CAPTURE_ACTIVE_STEP]: setCaptureActiveStep,
  [Types.SET_CAPTURE_DATA]: setCaptureData,
  [Types.FETCH_LAYER_ONE_TOPICS]: fetchLayerOneTopics,
  [Types.FETCH_LAYER_ONE_TOPICS_SUCCESS]: fetchLayerOneTopicsSuccess,
  [Types.FETCH_LAYER_ONE_TOPICS_FAILURE]: fetchLayerOneTopicsFailure, 
  [Types.FETCH_LAYER_TWO_TOPICS]: fetchLayerTwoTopics,
  [Types.FETCH_LAYER_TWO_TOPICS_SUCCESS]: fetchLayerTwoTopicsSuccess,
  [Types.FETCH_LAYER_TWO_TOPICS_FAILURE]: fetchLayerTwoTopicsFailure,
});
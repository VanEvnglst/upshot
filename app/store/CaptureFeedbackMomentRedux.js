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
  data: null,
  staffMembers: [],
  layerOneTopics: [],
  layerTwoTopics: [],
  error: '',
  entryMaxStep: 6,
  entryActiveStep: 1,
  feedbackEntryData: null,
  journeyId: null,
  entryDetails: null,
  entryRecordDetails: null,
  entryEditDetails: null,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setCaptureActiveStep: ['step'],
  setCaptureMaxStep: ['step'],
  setCaptureData: ['key', 'data'],
  setFeedbackMomentData: ['key', 'data'],
  postCaptureMoment: ['data'],
  postCaptureMomentSuccess: ['journeyId'],
  postCaptureMomentFailure: ['error'],
  postRecordEMEntry: ['entryDetails'],
  postRecordEMEntrySuccess: ['entryRecordDetails'],
  postRecordEMEntryFailure: ['error'],
  postEditEMEntry: ['entryDetails'],
  postEditEMEntrySuccess: ['entryEditDetails'],
  postEditEMEntryFailure: ['error'],
  fetchEMEntry: [''],
  fetchEMEntrySuccess: ['entryDetails'],
  fetchEMEntryFailure: ['error'],
  fetchLayerOneTopics: [''],
  fetchLayerOneTopicsSuccess: ['layerOneList'],
  fetchLayerOneTopicsFailure: ['error'],
  fetchLayerTwoTopics: ['data'],
  fetchLayerTwoTopicsSuccess: ['layerTwoList'],
  fetchLayerTwoTopicsFailure: ['error'],
  fetchStaffMembers: [],
  fetchStaffMembersSuccess: ['staffList'],
  fetchStaffMembersFailure: ['error'],
  setEntryActiveStep: ['step'],
  resetCaptureStep: null,
  resetEntryStep: null,
});


export const CaptureMomentTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */

const resetCaptureStep = state =>
  state.merge({
    activeStep: 1,
  });

const setCaptureActiveStep = (state, { step }) => {
  if (state.get('activeStep') >= state.get('maxStep')) {
    return state.get('activeStep');
  }
  return state.merge({ activeStep: step });
}

const setCaptureMaxStep = (state, { step }) =>
  state.merge({
    entryMaxStep: step
  })

const setCaptureData = (state, { key, data }) => {
  console.warn('here', key, data);
  return state.merge({
    data: {
      ...state.get('data'),
      [key]: data,
    }
  });
}

const setFeedbackMomentData = (state, { key, data }) => {
  return state.merge({
    entryDetails: {
      ...state.get('entryDetails'),
      [key]: data,
    }
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
  });

  const fetchStaffMembers = state =>
    state.merge({
      fetching: true,
      error: '',
    });

  const fetchStaffMembersSuccess = (state, { staffList }) =>
    state.merge({
      fetching: false,
      staffMembers: staffList
    });

  const fetchStaffMembersFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error
    });

  const postCaptureMoment = state => 
    state.merge({
      fetching: true,
      error: '',
    })

  const postCaptureMomentSuccess = (state, { journeyId }) => 
    state.merge({
      fetching: false,
      journeyId,
    });

  const postCaptureMomentFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error
    });

  const postRecordEMEntry = state => 
    state.merge({
      fetching: true,
      error: '',
    })

  const postRecordEMEntrySuccess = (state, { entryRecordDetails }) => 
    state.merge({
      fetching: false,
      entryRecordDetails,
    });

  const postRecordEMEntryFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error
    });

  const postEditEMEntry = state => 
    state.merge({
      fetching: true,
      error: '',
    })

  const postEditEMEntrySuccess = (state, { entryEditDetails }) => 
    state.merge({
      fetching: false,
      entryEditDetails,
    });

  const postEditEMEntryFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error
    });

  const fetchEMEntry = state => 
    state.merge({
      fetching: true,
      error: '',
    })

  const fetchEMEntrySuccess = (state, { journeyId }) => 
    state.merge({
      fetching: false,
      journeyId,
    });

  const fetchEMEntryFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error
    });

  const setEntryActiveStep = (state, { step }) => {
      if (state.get('entryActiveStep') > state.get('entryMaxStep')) {
        return state.get('entryActiveStep');
      }
      return state.merge({ entryActiveStep: step });
  }

  const resetEntryStep = state =>
  state.merge({
    entryActiveStep: 1,
  });



/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_CAPTURE_STEP]: resetCaptureStep,
  [Types.RESET_ENTRY_STEP]: resetEntryStep,
  [Types.SET_CAPTURE_ACTIVE_STEP]: setCaptureActiveStep,
  [Types.SET_CAPTURE_DATA]: setCaptureData,
  [Types.FETCH_LAYER_ONE_TOPICS]: fetchLayerOneTopics,
  [Types.FETCH_LAYER_ONE_TOPICS_SUCCESS]: fetchLayerOneTopicsSuccess,
  [Types.FETCH_LAYER_ONE_TOPICS_FAILURE]: fetchLayerOneTopicsFailure, 
  [Types.FETCH_LAYER_TWO_TOPICS]: fetchLayerTwoTopics,
  [Types.FETCH_LAYER_TWO_TOPICS_SUCCESS]: fetchLayerTwoTopicsSuccess,
  [Types.FETCH_LAYER_TWO_TOPICS_FAILURE]: fetchLayerTwoTopicsFailure,
  [Types.FETCH_STAFF_MEMBERS]: fetchStaffMembers,
  [Types.FETCH_STAFF_MEMBERS_SUCCESS]: fetchStaffMembersSuccess,
  [Types.FETCH_STAFF_MEMBERS_FAILURE]: fetchStaffMembersFailure,
  [Types.FETCH_EM_ENTRY]: fetchEMEntry,
  [Types.FETCH_EM_ENTRY_SUCCESS]: fetchEMEntrySuccess,
  [Types.FETCH_EM_ENTRY_FAILURE]: fetchEMEntryFailure,
  [Types.POST_CAPTURE_MOMENT]: postCaptureMoment,
  [Types.POST_CAPTURE_MOMENT_SUCCESS]: postCaptureMomentSuccess,
  [Types.POST_CAPTURE_MOMENT_FAILURE]: postCaptureMomentFailure,
  [Types.POST_RECORD_EM_ENTRY]: postRecordEMEntry,
  [Types.POST_RECORD_EM_ENTRY_SUCCESS]: postRecordEMEntrySuccess,
  [Types.POST_RECORD_EM_ENTRY_FAILURE]: postRecordEMEntryFailure,
  [Types.POST_EDIT_EM_ENTRY]: postEditEMEntry,
  [Types.POST_EDIT_EM_ENTRY_SUCCESS]: postEditEMEntrySuccess,
  [Types.POST_EDIT_EM_ENTRY_FAILURE]: postEditEMEntryFailure,
  [Types.SET_ENTRY_ACTIVE_STEP]: setEntryActiveStep,
  [Types.SET_FEEDBACK_MOMENT_DATA]: setFeedbackMomentData,
  [Types.SET_CAPTURE_MAX_STEP]: setCaptureMaxStep
});
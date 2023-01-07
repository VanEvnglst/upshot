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
  feedbackEntryData: null,
  journeyId: null,
  entryRecordDetails: null,
  entryEditDetails: null,
  faceTofaceSchedule: null,
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
  postCloseCaptureMoment: ['journeyId'],
  postCloseCaptureMomentSuccess: [''],
  postCloseCaptureMomentFailure: ['error'],
  postFaceToFaceSchedule: ['data'],
  postFaceToFaceScheduleSuccess: ['faceToFaceSchedule'],
  postFaceToFaceScheduleFailure: ['error'],
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

  const postCloseCaptureMoment = state =>
    state.merge({
      fetching: true,
      error: '',
    });

  const postCloseCaptureMomentSuccess = state => 
    state.merge({
      fetching: false,
    });

  const postCloseCaptureMomentFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error,
    })

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

  const postFaceToFaceSchedule = state => 
    state.merge({
      fetching: true,
      error: '',
    })

  const postFaceToFaceScheduleSuccess = (state, { faceToFaceSchedule }) => 
    state.merge({
      fetching: false,
      faceToFaceSchedule,
    });

  const postFaceToFaceScheduleFailure = (state, { error }) =>
    state.merge({
      fetching: false,
      error
    });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.RESET_CAPTURE_STEP]: resetCaptureStep,
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
  [Types.POST_CLOSE_CAPTURE_MOMENT]: postCloseCaptureMoment,
  [Types.POST_CLOSE_CAPTURE_MOMENT_SUCCESS]: postCloseCaptureMomentSuccess,
  [Types.POST_CLOSE_CAPTURE_MOMENT_FAILURE]: postCloseCaptureMomentFailure,
  [Types.POST_FACE_TO_FACE_SCHEDULE]: postFaceToFaceSchedule,
  [Types.POST_FACE_TO_FACE_SCHEDULE_SUCCESS]: postFaceToFaceScheduleSuccess,
  [Types.POST_FACE_TO_FACE_SCHEDULE_FAILURE]: postFaceToFaceScheduleFailure,
  [Types.SET_FEEDBACK_MOMENT_DATA]: setFeedbackMomentData,
  [Types.SET_CAPTURE_MAX_STEP]: setCaptureMaxStep
});
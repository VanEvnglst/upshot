import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: null,
  activeJourneyList: [],
  recentJourneys: [],
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchRecentJourneys: [''],
  fetchRecentJourneysSuccess: ['recentJourneyList'],
  fetchRecentJourneysFailure: ['error'],
  fetchActiveJourneys: [''],
  fetchActiveJourneysSuccess: ['activeJourneyList'],
  fetchActiveJourneysFailure: ['error'],
});

export const FeedbackHistoryTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const fetchActiveJourneys = state => {
  return state.merge({
    fetching: true,
    error: '',
  });
};

const fetchActiveJourneysSuccess = (state, { activeJourneyList }) => {
  return state.merge({
    fetching: false,
    activeJourneyList,
  });
};

const fetchActiveJourneysFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};

const fetchRecentJourneys = state => {
  return state.merge({
    fetching: true,
    error: '',
  });
};

const fetchRecentJourneysSuccess = (state, { recentJourneyList }) => {
  return state.merge({
    fetching: false,
    recentJourneyList,
  });
};

const fetchRecentJourneysFailure = (state, { error }) => {
  return state.merge({
    fetching: false,
    error,
  });
};

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_ACTIVE_JOURNEYS]: fetchActiveJourneys,
  [Types.FETCH_ACTIVE_JOURNEYS_SUCCESS]: fetchActiveJourneysSuccess,
  [Types.FETCH_ACTIVE_JOURNEYS_FAILURE]: fetchActiveJourneysFailure,
  [Types.FETCH_RECENT_JOURNEYS]: fetchRecentJourneys,
  [Types.FETCH_RECENT_JOURNEYS_SUCCESS]: fetchRecentJourneysSuccess,
  [Types.FETCH_RECENT_JOURNEYS_FAILURE]: fetchRecentJourneysFailure,
});

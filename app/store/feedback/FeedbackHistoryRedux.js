import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: null,
  activeJourneyList: [],
  assessmentProgress: '',
  upcomingDiscussions: [],
  totalJourneys: null,
  scheduledDiscussions: null,
  ongoingJourneys: null,
  completedJourneys: null,
  recentJourneys: [],
  ongoingJourneysList: [],
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchRecentJourneys: [''],
  fetchRecentJourneysSuccess: ['recentJourneyList'],
  fetchRecentJourneysFailure: ['error'],
  fetchActiveJourneys: [''],
  fetchActiveJourneysSuccess: ['activeJourneyList'],
  fetchActiveJourneysFailure: ['error'],
  fetchUserActivity: [''],
  fetchUserActivitySuccess: ['userActivity'],
  fetchUserActivityFailure: ['error'],
  fetchOngoingJourney: [''],
  fetchOngoingJourneySuccess: ['ongoingJourneysList'],
  fetchOngoingJourneyFailure: ['error'],
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

const fetchUserActivity = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchUserActivitySuccess = (state, { userActivity }) => {
  const {assessmentProgress, active_journeys, upcoming_one_on_ones, ongoing_journeys_count, scheduled_discussions_count, completed_journeys_count } = userActivity;

  return state.merge({
    fetching: false,
    assessmentProgress: assessmentProgress,
    activeJourneyList: active_journeys,
    upcomingDiscussions: upcoming_one_on_ones,
    ongoingJourneys: ongoing_journeys_count,
    scheduledDiscussions: scheduled_discussions_count,
    completedJourneys: completed_journeys_count,
    totalJourneys: ongoing_journeys_count + scheduled_discussions_count + completed_journeys_count,
  });
}

const fetchUserActivityFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  });

  const fetchOngoingJourney = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const fetchOngoingJourneySuccess = (state, { ongoingJourneysList }) =>
  state.merge({
    fetching: false,
    ongoingJourneysList
  });

  const fetchOngoingJourneyFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error
  });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_ACTIVE_JOURNEYS]: fetchActiveJourneys,
  [Types.FETCH_ACTIVE_JOURNEYS_SUCCESS]: fetchActiveJourneysSuccess,
  [Types.FETCH_ACTIVE_JOURNEYS_FAILURE]: fetchActiveJourneysFailure,
  [Types.FETCH_RECENT_JOURNEYS]: fetchRecentJourneys,
  [Types.FETCH_RECENT_JOURNEYS_SUCCESS]: fetchRecentJourneysSuccess,
  [Types.FETCH_RECENT_JOURNEYS_FAILURE]: fetchRecentJourneysFailure,
  [Types.FETCH_USER_ACTIVITY]: fetchUserActivity,
  [Types.FETCH_USER_ACTIVITY_SUCCESS]: fetchUserActivitySuccess,
  [Types.FETCH_USER_ACTIVITY_FAILURE]: fetchUserActivityFailure,
  [Types.FETCH_ONGOING_JOURNEY]: fetchOngoingJourney,
  [Types.FETCH_ONGOING_JOURNEY_SUCCESS]: fetchOngoingJourneySuccess,
  [Types.FETCH_ONGOING_JOURNEY_FAILURE]: fetchOngoingJourneyFailure,
});

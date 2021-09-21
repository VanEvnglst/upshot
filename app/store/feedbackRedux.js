import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  fetching: false,
  data: null,
  error: null,
};
/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  currentJourney: {
    ...defaultState,
    documenting: { ...defaultState },
    preparing: { ...defaultState },
    teamMembers: { ...defaultState },
    relatedTopics: { ...defaultState },
    feedbackType: { ...defaultState },
    feedbackFlow: { ...defaultState },
  },
  journeys: { ...defaultState },
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchFeedbackFlow: [''],
  fetchFeedbackFlowSuccess: null,
  fetchFeedbackFlowFailure: ['error'],
  fetchFeedbackType: [''],
  fetchFeedbackTypeSuccess: null,
  fetchFeedbackTypeFailure: ['error'],
  fetchFeedbackTopics: [''],
  fetchFeedbackTopicsSuccess: null,
  fetchFeedbackTopicsFailure: ['error'],
  fetchTeamMembers: [''],
  fetchTeamMembersSuccess: null,
  fetchTeamMembersFailure: ['error'],
  postFeedbackJourney: [''],
  postFeedbackJourneySuccess: null,
  postFeedbackJourneyFailure: ['error'],
  postFeedbackDocumenting: [''],
  postFeedbackDocumentingSuccess: null,
  postFeedbackDocumentingFailure: ['error'],
  updateFeedbackDocumenting: [''],
});

export const FeedbackTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const fetchFeedbackFlow = state => state.merge({});
const fetchFeedbackFlowSuccess = state => state.merge({});
const fetchFeedbackFlowFailure = state => state.merge({});
const fetchFeedbackType = state => state.merge({});
const fetchFeedbackTypeSuccess = state => state.merge({});
const fetchFeedbackTypeFailure = state => state.merge({});
const fetchFeedbackTopics = state => state.merge({});
const fetchFeedbackTopicsSuccess = state => state.merge({});
const fetchFeedbackTopicsFailure = state => state.merge({});
const fetchTeamMembers = state => state.merge({});
const fetchTeamMembersSuccess = state => state.merge({});
const fetchTeamMembersFailure = state => state.merge({});
const postFeedbackJourney = state => state.merge({});
const postFeedbackJourneySuccess = state => state.merge({});
const postFeedbackJourneyFailure = state => state.merge({});
const postFeedbackDocumenting = state => state.merge({});
const postFeedbackDocumentingSuccess = state => state.merge({});
const postFeedbackDocumentingFailure = state => state.merge({});
const updateFeedbackDocumenting = state => state.merge({});

/* ------------- Hookup Reducers To Types ------------- */
export const feedbackReducers = createReducer(INITIAL_STATE, {
  [Types.FETCH_FEEDBACK_FLOW]: fetchFeedbackFlow,
  [Types.FETCH_FEEDBACK_FLOW_SUCCESS]: fetchFeedbackFlowSuccess,
  [Types.FETCH_FEEDBACK_FLOW_FAILURE]: fetchFeedbackFlowFailure,
  [Types.FETCH_FEEDBACK_TYPE]: fetchFeedbackType,
  [Types.FETCH_FEEDBACK_TYPE_SUCCESS]: fetchFeedbackTypeSuccess,
  [Types.FETCH_FEEDBACK_TYPE_FAILURE]: fetchFeedbackTypeFailure,
  [Types.FETCH_FEEDBACK_TOPICS]: fetchFeedbackTopics,
  [Types.FETCH_FEEDBACK_TOPICS_SUCCESS]: fetchFeedbackTopicsSuccess,
  [Types.FETCH_FEEDBACK_TOPICS_FAILURE]: fetchFeedbackTopicsFailure,
  [Types.FETCH_TEAM_MEMBERS]: fetchTeamMembers,
  [Types.FETCH_TEAM_MEMBERS_SUCCESS]: fetchTeamMembersSuccess,
  [Types.FETCH_TEAM_MEMBERS_FAILURE]: fetchTeamMembersFailure,
  [Types.POST_FEEDBACK_JOURNEY]: postFeedbackJourney,
  [Types.POST_FEEDBACK_JOURNEY_SUCCESS]: postFeedbackJourneySuccess,
  [Types.POST_FEEDBACK_JOURNEY_FAILURE]: postFeedbackJourneyFailure,
  [Types.POST_FEEDBACK_DOCUMENTING]: postFeedbackDocumenting,
  [Types.POST_FEEDBACK_DOCUMENTING_SUCCESS]: postFeedbackDocumentingSuccess,
  [Types.POST_FEEDBACK_DOCUMENTING_FAILURE]: postFeedbackDocumentingFailure,
  [Types.UPDATE_FEEDBACK_DOCUMENTING]: updateFeedbackDocumenting,
});

/* ------------- Selectors ------------- */
export const getCurrentJourney = state => state.feedback.currentJourney;

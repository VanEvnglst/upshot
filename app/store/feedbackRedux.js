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
    documenting: { ...defaultState },
    preparing: { ...defaultState },
    teamMembers: { ...defaultState },
  },
  chosenFlow: {},
  feedbackFlow: { ...defaultState },
  feedbackType: { ...defaultState },
  relatedTopics: { ...defaultState },
  journeys: { ...defaultState },
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchFeedbackFlow: [''],
  fetchFeedbackFlowSuccess: ['feedbackFlowList'],
  fetchFeedbackFlowFailure: ['error'],
  fetchFeedbackType: [''],
  fetchFeedbackTypeSuccess: ['feedbackTypeList'],
  fetchFeedbackTypeFailure: ['error'],
  fetchFeedbackTopics: [''],
  fetchFeedbackTopicsSuccess: ['relatedTopicsList'],
  fetchFeedbackTopicsFailure: ['error'],
  setFeedbackFlow: ['chosenFlow'],
  // fetchTeamMembers: [''],
  // fetchTeamMembersSuccess: null,
  // fetchTeamMembersFailure: ['error'],
  // postFeedbackJourney: [''],
  // postFeedbackJourneySuccess: null,
  // postFeedbackJourneyFailure: ['error'],
  // postFeedbackDocumenting: [''],
  // postFeedbackDocumentingSuccess: null,
  // postFeedbackDocumentingFailure: ['error'],
  // updateFeedbackDocumenting: [''],
});

export const FeedbackTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const fetchFeedbackFlow = state =>
  state.merge({
    feedbackFlow: {
      fetching: true,
    },
  });

const fetchFeedbackFlowSuccess = (state, { feedbackFlowList }) => {
  return state.merge({
    feedbackFlow: {
      fetching: false,
      data: feedbackFlowList,
    },
  });
};

const fetchFeedbackFlowFailure = (state, { error }) =>
  state.merge({
    feedbackFlow: {
      fetching: false,
      error,
    },
  });

const fetchFeedbackType = state =>
  state.merge({
    feedbackType: {
      fetching: true,
    },
  });

const fetchFeedbackTypeSuccess = (state, { feedbackTypeList }) => {
  return state.merge({
    feedbackType: {
      fetching: false,
      data: feedbackTypeList,
    },
  });
};

const fetchFeedbackTypeFailure = (state, { error }) =>
  state.merge({
    feedbackType: {
      fetching: false,
      error,
    },
  });

const fetchFeedbackTopics = state =>
  state.merge({
    relatedTopics: {
      fetching: true,
    },
  });
const fetchFeedbackTopicsSuccess = (state, { relatedTopicsList }) => {
  return state.merge({
    relatedTopics: {
      fetching: false,
      data: relatedTopicsList,
    },
  });
};
const fetchFeedbackTopicsFailure = (state, { error }) =>
  state.merge({
    relatedTopics: {
      fetching: false,
      error,
    },
  });

const setFeedbackFlow = (state, { chosenFlow }) =>
  state.merge({
    chosenFlow,
  });
// const fetchTeamMembers = state => state.merge({});
// const fetchTeamMembersSuccess = state => state.merge({});
// const fetchTeamMembersFailure = state => state.merge({});
// const postFeedbackJourney = state => state.merge({});
// const postFeedbackJourneySuccess = state => state.merge({});
// const postFeedbackJourneyFailure = state => state.merge({});
// const postFeedbackDocumenting = state => state.merge({});
// const postFeedbackDocumentingSuccess = state => state.merge({});
// const postFeedbackDocumentingFailure = state => state.merge({});
// const updateFeedbackDocumenting = state => state.merge({});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_FEEDBACK_FLOW]: fetchFeedbackFlow,
  [Types.FETCH_FEEDBACK_FLOW_SUCCESS]: fetchFeedbackFlowSuccess,
  [Types.FETCH_FEEDBACK_FLOW_FAILURE]: fetchFeedbackFlowFailure,
  [Types.FETCH_FEEDBACK_TYPE]: fetchFeedbackType,
  [Types.FETCH_FEEDBACK_TYPE_SUCCESS]: fetchFeedbackTypeSuccess,
  [Types.FETCH_FEEDBACK_TYPE_FAILURE]: fetchFeedbackTypeFailure,
  [Types.FETCH_FEEDBACK_TOPICS]: fetchFeedbackTopics,
  [Types.FETCH_FEEDBACK_TOPICS_SUCCESS]: fetchFeedbackTopicsSuccess,
  [Types.FETCH_FEEDBACK_TOPICS_FAILURE]: fetchFeedbackTopicsFailure,
  [Types.SET_FEEDBACK_FLOW]: setFeedbackFlow,
  // [Types.FETCH_TEAM_MEMBERS]: fetchTeamMembers,
  // [Types.FETCH_TEAM_MEMBERS_SUCCESS]: fetchTeamMembersSuccess,
  // [Types.FETCH_TEAM_MEMBERS_FAILURE]: fetchTeamMembersFailure,
  // [Types.POST_FEEDBACK_JOURNEY]: postFeedbackJourney,
  // [Types.POST_FEEDBACK_JOURNEY_SUCCESS]: postFeedbackJourneySuccess,
  // [Types.POST_FEEDBACK_JOURNEY_FAILURE]: postFeedbackJourneyFailure,
  // [Types.POST_FEEDBACK_DOCUMENTING]: postFeedbackDocumenting,
  // [Types.POST_FEEDBACK_DOCUMENTING_SUCCESS]: postFeedbackDocumentingSuccess,
  // [Types.POST_FEEDBACK_DOCUMENTING_FAILURE]: postFeedbackDocumentingFailure,
  // [Types.UPDATE_FEEDBACK_DOCUMENTING]: updateFeedbackDocumenting,
});

/* ------------- Selectors ------------- */

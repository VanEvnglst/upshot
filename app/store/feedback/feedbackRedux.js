import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  fetching: false,
  data: null,
  error: null,
};
/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  currentJourney: { ...defaultState },
  chosenFlow: {},
  chosenType: {},
  chosenTeamMember: {},
  feedbackFlow: { ...defaultState },
  feedbackType: { ...defaultState },
  relatedTopics: { ...defaultState },
  teamMembers: { ...defaultState },
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
  setFeedbackType: ['chosenType'],
  setTeamMember: ['chosenTeamMember'],
  fetchTeamMembers: [''],
  fetchTeamMembersSuccess: ['teamMembersList'],
  fetchTeamMembersFailure: ['error'],
  postFeedbackJourney: ['flow', 'teamMemberId'],
  postFeedbackJourneySuccess: ['id'],
  postFeedbackJourneyFailure: ['error'],
  fetchCurrentFeedback: ['journeyId'],
  fetchCurrentFeedbackSuccess: ['id'],
  fetchCurrentFeedbackFailure: ['error'],
  resetFeedbackState: null,
  postCloseFeedbackJourney: ['journeyId'],
  postCloseFeedbackJourneySuccess: null,
  postCloseFeedbackJourneyFailure: ['error'],
});

export const FeedbackTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const fetchFeedbackFlow = state =>
  state.merge({
    feedbackFlow: {
      ...state.get('feedbackFlow'),
      fetching: true,
      error: '',
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
      ...state.get('feedbackType'),
      fetching: true,
      error: '',
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
      ...state.get('relatedTopics'),
      fetching: true,
      error: '',
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

const setFeedbackType = (state, { chosenType }) =>
  state.merge({
    chosenType,
  });

const setTeamMember = (state, { chosenTeamMember }) =>
  state.merge({
    ...state.get('chosenTeamMember'),
    chosenTeamMember,
  });

const fetchTeamMembers = state =>
  state.merge({
    teamMembers: {
      ...state.get('teamMembers'),
      fetching: true,
      data: [],
      error: '',
    },
  });

const fetchTeamMembersSuccess = (state, { teamMembersList }) => {
  return state.merge({
    teamMembers: {
      fetching: false,
      data: teamMembersList,
    },
  });
};
const fetchTeamMembersFailure = (state, error) =>
  state.merge({
    teamMembers: {
      fetching: false,
      error,
    },
  });

const postFeedbackJourney = state =>
  state.merge({
    ...state.get('currentJourney'),
    currentJourney: {
      fetching: true,
      error: '',
    },
  });

const postFeedbackJourneySuccess = (state, { id }) => {
  return state.merge({
    currentJourney: {
      fetching: false,
      data: id,
    },
  });
};
const postFeedbackJourneyFailure = state => state.merge({});

const fetchCurrentFeedback = state =>
  state.merge({
    currentJourney: {
      ...state.get('currentJourney'),
      fetching: true,
      error: '',
    },
  });

const postCloseFeedbackJourney = state =>
  state.merge({
    ...state.get('currentJourney'),
    currentJourney: {
      fetching: true,
      error: '',
    },
  });

const postCloseFeedbackJourneySuccess = state =>
  state.merge({
    currentJourney: {
      fetching: false,
    },
  });

const postCloseFeedbackJourneyFailure = (state, { error }) =>
  state.merge({
    currentJourney: {
      fetching: false,
      error,
    },
  });

const fetchCurrentFeedbackSuccess = (state, { id }) => {
  return state.merge({
    currentJourney: {
      ...state.get('currentJourney'),
      fetching: false,
      data: id,
    },
  });
};

const fetchCurrentFeedbackFailure = state => state.merge({});

const resetFeedbackState = state =>
  state.merge({
    currentJourney: {
      ...defaultState,
    },
  });

/* ------------- Hookup Reducers To Types ------------- */
export const feedbackReducer = createReducer(INITIAL_STATE, {
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
  [Types.SET_FEEDBACK_TYPE]: setFeedbackType,
  [Types.SET_TEAM_MEMBER]: setTeamMember,
  [Types.FETCH_TEAM_MEMBERS]: fetchTeamMembers,
  [Types.FETCH_TEAM_MEMBERS_SUCCESS]: fetchTeamMembersSuccess,
  [Types.FETCH_TEAM_MEMBERS_FAILURE]: fetchTeamMembersFailure,
  [Types.POST_FEEDBACK_JOURNEY]: postFeedbackJourney,
  [Types.POST_FEEDBACK_JOURNEY_SUCCESS]: postFeedbackJourneySuccess,
  [Types.POST_FEEDBACK_JOURNEY_FAILURE]: postFeedbackJourneyFailure,
  [Types.FETCH_CURRENT_FEEDBACK]: fetchCurrentFeedback,
  [Types.FETCH_CURRENT_FEEDBACK_SUCCESS]: fetchCurrentFeedbackSuccess,
  [Types.FETCH_CURRENT_FEEDBACK_FAILURE]: fetchCurrentFeedbackFailure,
  [Types.RESET_FEEDBACK_STATE]: resetFeedbackState,
  [Types.POST_CLOSE_FEEDBACK_JOURNEY]: postCloseFeedbackJourney,
  [Types.POST_CLOSE_FEEDBACK_JOURNEY_SUCCESS]: postCloseFeedbackJourneySuccess,
  [Types.POST_CLOSE_FEEDBACK_JOURNEY_FAILURE]: postCloseFeedbackJourneyFailure,
});

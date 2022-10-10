import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

const defaultState = {
  fetching: false,
  data: null,
  error: '',
};
/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  currentJourney: {},
  chosenFlow: {},
  chosenType: {},
  chosenTeamMember: {},
  relatedTopics: { ...defaultState },
  teamMembers: { ...defaultState },
  responseData: {},
  exchangeActiveStep: 1,
  exchangeMaxStep: 7,
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setTeamMember: ['chosenTeamMember'],
  fetchTeamMembers: [''],
  fetchTeamMembersSuccess: ['teamMembersList'],
  fetchTeamMembersFailure: ['error'],
  postFeedbackJourney: ['data'],
  postFeedbackJourneySuccess: ['id'],
  postFeedbackJourneyFailure: ['error'],
  fetchCurrentFeedback: ['journeyId'],
  fetchCurrentFeedbackSuccess: ['fetchedJourney'],
  fetchCurrentFeedbackFailure: ['error'],
  resetFeedbackState: null,
  postCloseFeedbackJourney: ['journeyId'],
  postCloseFeedbackJourneySuccess: null,
  postCloseFeedbackJourneyFailure: ['error'],
  setExchangeActiveStep: ['step'],
  setExchangeStatus: ['key', 'data'],
});

export const FeedbackTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const setTeamMember = (state, { chosenTeamMember }) =>
  state.merge({
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
    currentJourney: {
      ...state.get('currentJourney'),
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
const postFeedbackJourneyFailure = (state, { error }) => state.merge({
  currentJourney: {
    fetching: false,
    error
  },
});

const fetchCurrentFeedback = state => {
  return state.merge({
      fetching: true,
      error: '',
  });
};

const postCloseFeedbackJourney = state =>
  state.merge({
    currentJourney: {
      ...state.get('currentJourney'),
      fetching: true,
      error: '',
    },
  });

const postCloseFeedbackJourneySuccess = state =>
  state.merge({
    currentJourney: {
      ...state.get('currentJourney'),
      fetching: false,
    },
  });

const postCloseFeedbackJourneyFailure = (state, { error }) =>
  state.merge({
      fetching: false,
      error,
  });

const fetchCurrentFeedbackSuccess = (state, { fetchedJourney }) => {
  return state.merge({
      fetching: false,
      currentJourney: fetchedJourney
  });
};

const fetchCurrentFeedbackFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

const resetFeedbackState = state =>
  state.merge({
    currentJourney: {
      ...defaultState,
    },
  });

const setExchangeActiveStep = (state, { step }) => {
  if (state.get('exchangeActiveStep') >= state.get('exchangeMaxStep')) {
    return;
  }
   return state.merge({
    exchangeActiveStep: step
  })
}

const setExchangeStatus = (state, { key, data }) =>
  state.merge({
    [key]: data
  })


/* ------------- Hookup Reducers To Types ------------- */
export const feedbackReducer = createReducer(INITIAL_STATE, {
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
  [Types.SET_EXCHANGE_STATUS]: setExchangeStatus,
  [Types.SET_EXCHANGE_ACTIVE_STEP]: setExchangeActiveStep
});

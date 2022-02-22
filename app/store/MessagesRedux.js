import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  id: null, 
  messages: []
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchMessages: [''],
  fetchMessagesSuccess: ['messagesList'],
  fetchMessagesFailure: ['error'],
});

/* ------------- Reducers ------------- */
export const MessagesTypes = Types;
export default Creators;

const fetchMessages = state => state.merge({
  fetching: true,
  error: '',
});

const fetchMessagesSuccess = (state, { messagesList }) => state.merge({
  fetching: false,
  messages: messagesList
});

const fetchMessagesFailure = (state, { error }) => state.merge({
  fetching: false,
  error
});

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_MESSAGES]: fetchMessages,
  [Types.FETCH_MESSAGES_SUCCESS]: fetchMessagesSuccess,
  [Types.FETCH_MESSAGES_FAILURE]: fetchMessagesFailure,
});
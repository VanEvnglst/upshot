import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  fetching: false,
  error: '',
  id: null, 
  messages: [],
  body: {}
});

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  fetchMessages: [''],
  fetchMessagesSuccess: ['messagesList'],
  fetchMessagesFailure: ['error'],
  fetchMessage: ['messageId'],
  fetchMessageSuccess: ['messageBody'],
  fetchMessageFailure: ['error'],
  postMessageResponse: [],
  postMessageResponseSuccess: null,
  postMessageResponseFailure: ['error']
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


const fetchMessage = state => state.merge({
  fetching: true,
  error: '',
});

const fetchMessageSuccess = (state, { messageBody }) => state.merge({
  fetching: false,
  body: messageBody,
});

const fetchMessageFailure = (state, { error }) => state.merge({
  fetching: false,
  error
});

const postMessageResponse = state => state.merge({
  fetching: true,
  error: ''
});

const postMessageResponseSuccess = state => state.merge({
  fetching: false,
});

const postMessageResponseFailure = (state , { error }) => state.merge({
  fetching: false,
  error,
});


/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.FETCH_MESSAGES]: fetchMessages,
  [Types.FETCH_MESSAGES_SUCCESS]: fetchMessagesSuccess,
  [Types.FETCH_MESSAGES_FAILURE]: fetchMessagesFailure,
  [Types.FETCH_MESSAGE]: fetchMessage,
  [Types.FETCH_MESSAGE_SUCCESS]: fetchMessageSuccess,
  [Types.FETCH_MESSAGE_FAILURE]: fetchMessageFailure,
  [Types.POST_MESSAGE_RESPONSE]: postMessageResponse,
  [Types.POST_MESSAGE_RESPONSE_SUCCESS]: postMessageResponseSuccess,
  [Types.POST_MESSAGE_RESPONSE_FAILURE]: postMessageResponseFailure,
});
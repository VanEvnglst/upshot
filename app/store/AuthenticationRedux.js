import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  isSignedIn: false,
  newSignUp: false,
  error: '',
  fetching: false,
});

const { Types, Creators } = createActions({
  signInUser: ['data'],
  signInUserSuccess: null,
  signInUserFailure: ['error'],
  signOutUser: [''],
  setUserSignedIn: [''],
  fetchServer: ['data'],
  fetchServerSuccess: [''],
  fetchServerFailure: ['error'],
  signUpUser: ['data'],
  signUpUserSuccess: null,
  signUpUserFailure: ['error'],
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const signInUser = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const signInUserSuccess = state =>
  state.merge({
    ...state.get('isSignedIn'),
    fetching: false,
    isSignedIn: true,
    error: '',
  });

const signInUserFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });
const signOutUser = state => state.merge({ ...INITIAL_STATE });

const setUserSignedIn = state =>
  state.merge({
    ...state.get('isSignedIn'),
    isSignedIn: true,
  });

const fetchServer = state =>
  state.merge({
    fetching: true,
  });

const fetchServerSuccess = state =>
  state.merge({
    fetching: false,
  });

const fetchServerFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

  const signUpUser = state =>
  state.merge({
    fetching: true,
    error: '',
  });

const signUpUserSuccess = state =>
  state.merge({
    ...state.get('newSignUp'),
    fetching: false,
    newSignUp: true,
    error: '',
  });

const signUpUserFailure = (state, { error }) =>
  state.merge({
    fetching: false,
    error,
  });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_USER]: signInUser,
  [Types.SIGN_IN_USER_SUCCESS]: signInUserSuccess,
  [Types.SIGN_IN_USER_FAILURE]: signInUserFailure,
  [Types.SIGN_OUT_USER]: signOutUser,
  [Types.SET_USER_SIGNED_IN]: setUserSignedIn,
  [Types.FETCH_SERVER]: fetchServer,
  [Types.FETCH_SERVER_SUCCESS]: fetchServerSuccess,
  [Types.FETCH_SERVER_FAILURE]: fetchServerFailure,
  [Types.SIGN_UP_USER]: signUpUser,
  [Types.SIGN_UP_USER_SUCCESS]: signUpUserSuccess,
  [Types.SIGN_UP_USER_FAILURE]: signUpUserFailure,
});

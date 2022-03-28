import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';
import { TurboModuleRegistry } from 'react-native';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  isSignedIn: false,
  error: '',
  fetching: false,
});

const { Types, Creators } = createActions({
  signInUser: ['data'],
  signInUserSuccess: null,
  signInUserFailure: ['signInUserError'],
  signOutUser: [''],
  setUserSignedIn: [''],
  fetchServer: ['data'],
  fetchServerSuccess: [''],
  fetchServerFailure: ['error'],
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
  });

const signInUserFailure = (state, { error}) => state.merge({
  fetching: false,
  error
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

const fetchServerFailure = (state, error) =>
  state.merge({
    fetching: false,
    error
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
});

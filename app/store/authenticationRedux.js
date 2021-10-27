import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  isSignedIn: false,
  signInError: '',
  loading: false,
});

const { Types, Creators } = createActions({
  signInUser: ['data'],
  signInUserSuccess: null,
  signInUserFailure: ['signInUserError'],
  signOutUser: [''],
  setUserSignedIn: ['']
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const signInUser = state =>
  state.merge({
    loading: true,
    signInError: '',
  });
const signInUserSuccess = state =>
  state.merge({
    loading: false,
    isSignedIn: true,
  });
const signInUserFailure = state => state.merge({});
const signOutUser = state => state.merge({ ...INITIAL_STATE });

const setUserSignedIn = state => state.merge({
  isSignedIn: true
})

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_USER]: signInUser,
  [Types.SIGN_IN_USER_SUCCESS]: signInUserSuccess,
  [Types.SIGN_IN_USER_FAILURE]: signInUserFailure,
  [Types.SIGN_OUT_USER]: signOutUser,
  [Types.SET_USER_SIGNED_IN]: setUserSignedIn,
});

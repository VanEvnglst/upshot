import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Map({
  isSignedIn: false,
  signInError: '',
});

const { Types, Creators } = createActions({
  signInUser: ['username', 'password'],
  signInUserSuccess: null,
  signInUserFailure: ['signInUserError'],
  signOutUser: [''],
});

export const AuthenticationTypes = Types;
export default Creators;

/* ------------- Reducers ------------- */
const signInUser = state => state.merge({});
const signInUserSuccess = state => state.merge({});
const signInUserFailure = state => state.merge({});
const signOutUser = state => state.merge({ ...INITIAL_STATE });

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_IN_USER]: signInUser,
  [Types.SIGN_IN_USER_SUCCESS]: signInUserSuccess,
  [Types.SIGN_IN_USER_FAILURE]: signInUserFailure,
  [Types.SIGN_OUT_USER]: signOutUser,
});



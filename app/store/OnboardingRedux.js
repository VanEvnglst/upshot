import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  onboardingLoading: false,
  userId: null,
  onboardingError: {},
});


const { Types, Creators } = createActions({
  signUpUser: ['data'],
  signUpUserSuccess: null,
  signUpUserFailure: ['error'],

});

export const OnboardingTypes = Types;
export default Creators;

const signUpUser = state => state.merge({
  onboardingLoading: true,
  onboardingError: {}
});

const signUpUserSuccess = state => state.merge({
  onboardingLoading: false,
});

const signUpUserFailure = state => state.merge({
  onboardingLoading: false
});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_USER]: signUpUser,
  [Types.SIGN_UP_USER_SUCCESS]: signUpUserSuccess,
  [Types.SIGN_UP_USER_FAILURE]: signUpUserFailure,
});
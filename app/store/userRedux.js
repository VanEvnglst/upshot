import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  firstName: 'Ivan',
});

const { Types, Creators } = createActions({
  setPassword: [''],
});

export const UserTypes = Types;
export default Creators;

const setPassword = state => state.merge({});

export const userReducers = createReducer(INITIAL_STATE, {
  [Types.SET_PASSWORD]: setPassword,
});
/* ------------- Selectors ------------- */
export const getFirstName = state => state.user.firstName;

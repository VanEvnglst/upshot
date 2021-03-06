import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  firstName: 'Ivan',
});

const { Types, Creators } = createActions({
  setUser: ['user'],
  setPassword: [''],
});

export const UserTypes = Types;
export default Creators;

const setUser = (state, { user }) => state.merge({ user });
const setPassword = state => state.merge({});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PASSWORD]: setPassword,
  [Types.SET_USER]: setUser,
});
/* ------------- Selectors ------------- */
// export const getUser = state => state.user;

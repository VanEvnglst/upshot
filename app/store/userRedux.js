import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  firstName: '',
  lastName: '',
  role: 0,
});

const { Types, Creators } = createActions({
  setUser: ['user'],
  setPassword: [''],
});

export const UserTypes = Types;
export default Creators;

const setUser = (state, { user }) => {
  return state.merge({
    firstName: user.first_name,
    lastName: user.last_name,
    role: user.role_id,
  });
};
const setPassword = state => state.merge({});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PASSWORD]: setPassword,
  [Types.SET_USER]: setUser,
});

/* ------------- Selectors ------------- */
// export const getUser = state => state.user;

import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  userName: '',
  role: 0,
});

const { Types, Creators } = createActions({
  setUserName: ['user'],
  setUserRole: ['role'],
  setPassword: [''],
});

export const UserTypes = Types;
export default Creators;

const setUserName = (state, { user }) => {
  return state.merge({
    userName: user,
  });
};

const setUserRole = (state, { role }) => {
  return state.merge({
    role: role
  })
}
const setPassword = state => state.merge({});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PASSWORD]: setPassword,
  [Types.SET_USER_NAME]: setUserName,
  [Types.SET_USER_ROLE]: setUserRole,
});


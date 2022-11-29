import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  userName: '',
  role: 0,
  selectedStaff: {
    name: '',
    initials: '',
  }
});

const { Types, Creators } = createActions({
  setUserName: ['user'],
  setUserRole: ['role'],
  setPassword: [''],
  setSelectedStaff: ['staff'],
  resetSelectedStaff: [''],
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

const setSelectedStaff = (state, { staff }) =>
  state.merge({
    selectedStaff: staff
  })

const resetSelectedStaff = state => 
  state.merge({
    ...state.get('selectedStaff'),
    selectedStaff: '',
  })
const setPassword = state => state.merge({});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_PASSWORD]: setPassword,
  [Types.SET_USER_NAME]: setUserName,
  [Types.SET_USER_ROLE]: setUserRole,
  [Types.SET_SELECTED_STAFF]: setSelectedStaff,
  [Types.RESET_SELECTED_STAFF]: resetSelectedStaff,
});


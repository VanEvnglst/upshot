import { createReducer, createActions } from 'reduxsauce';
import { Map } from 'immutable';

export const INITIAL_STATE = Map({
  title: '',
  message: '',
  actions: null,
});

const { Types, Creators } = createActions({
  setNotification: [''],
  setNotificationSuccess: null,
  setNotificationFailure: ['error'],
});

export const NotificationTypes = Types;
export default Creators;

const setNotification = state => state.merge({});
const setNotificationSuccess = state => state.merge({});
const setNotificationFailure = state => state.merge({});

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SET_NOTIFICATION]: setNotification,
  [Types.SET_NOTIFICATION_SUCCESS]: setNotificationSuccess,
  [Types.SET_NOTIFICATION_FAILURE]: setNotificationFailure,
});

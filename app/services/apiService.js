import Config from 'react-native-config';
import { upshotAPI } from '../config/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { select } from '@redux-saga/core/effects';

export default {
  signIn: async payload => {
    const params = new URLSearchParams();
    params.append('email', payload.email);
    params.append('passwd', payload.password);
    return upshotAPI.post('/login', params);
  },

  signUp: async data => {
    const { email, password, firstName, lastName, token, role } = data;
    const params = new URLSearchParams();
    params.append('email', email);
    params.append('passwd', password);
    params.append('firstname', firstName);
    params.append('lastname', lastName);
    params.append('token', token);
    params.append('role', role);

    return upshotAPI.post('/signup', params);
  },

  getFeedbackType: async () => {
    return upshotAPI.get('/feedback/feedback-type');
  },

  getFeedbackFlow: async () => {
    return upshotAPI.get('/feedback/feedback-flow');
  },

  getFeedbackTopics: async () => {
    return upshotAPI.get('/feedback/feedback-topics');
  },

  getTeamMembers: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    return upshotAPI.get(`/${uniqueId}/get_staff`);
  },

  getTrivias: async () => {
    return upshotAPI.get('/trivias');
  },
  postNewJourney: async data => {
    const params = new URLSearchParams();
    params.append('flow_type', data);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/journey`, params);
  },

  postFeedbackDocumenting: async data => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();
    const {
      journeyId,
      teamMemberId,
    } = data;
    params.append('journey_id', journeyId);
    params.append('staff_id', teamMemberId);
    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, params);
  },

  updateDocumenting: async data => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();
    const { step2, step3, dateSelected, docuId } = data;
    console.log('ste', step3.data);
    debugger;
    params.append('documenting_id', docuId);
    params.append('topic_id', step3.data);
    params.append('incident_date', dateSelected);
    params.append('pos_or_cor', step2.data.id);
    params.append('reminder_date', reminderDate);

    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, params);
  },

  getOpenFeedbackJourneys: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.get(`/${uniqueId}/feedback/journeys/list-open`);
  },

  getClosedFeedbackJourneys: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.get(`/${uniqueId}/feedback/journeys/list-closed`);
  },

  getCurrentFeedbackJourney: async journeyId => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();

    params.append('journey_id', journeyId);
    return upshotAPI.post(`/${uniqueId}/feedback/journey/get`, params);
  },

  getCurrentDocumenting: async documentingId => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();

    params.append('documenting_id', documentingId);
    return upshotAPI.post(`/${uniqueId}/feedback/documenting/get`, params);
  },

  postFeedbackPreparing: async journeyId => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();

    params.append('journey_id', journeyId);

    return upshotAPI.post(`/${uniqueId}/feedback/preparing`);
},

  getCurrentPreparing: async preparingId => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();

    params.append('preparing_id', preparingId);
    return upshotAPI.post(`/${uniqueId}/feedback/preparing/get`, params);
  },
};

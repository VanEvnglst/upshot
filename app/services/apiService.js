import Config from 'react-native-config';
import { upshotAPI } from '../config/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  signIn: async payload => {
    const params = new URLSearchParams();
    params.append('email', payload.email);
    params.append('passwd', payload.password);
    debugger;
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
      feedbackType,
      topicId,
      incidentDate,
      reminderDate,
    } = data;
    params.append('journey_id', journeyId);
    params.append('staff_id', teamMemberId);
    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, params);
  },

  updateDocumenting: async data => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();

    const { documentingId, feedbackType, topicId, incidentDate, reminderDate} = data;
    params.append('documenting_id', documentingId);
    params.append('topic_id', topicId);
    params.append('incident_date', incidentDate);
    params.append('pos_or_cor', feedbackType);
    params.append('reminder_date', reminderDate);

    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, params);
  },

  getOpenFeedbackJourneys: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    
    return upshotAPI.get(`/${uniqueId}/feedback/journeys/list-open`);
  },

  getClosedFeedbackJourneys: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.get(`/${uniqueId}/feedback/journeys/list-closed`)
  }
};

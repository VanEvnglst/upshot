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
    params.append('feedback-type',data);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/journey/new`, params);
  },

  postFeedbackDocumenting: async data => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    const params = new URLSearchParams();
    const {} = data;
    params.append('journey_id', data)
    params.append('staff_id')
    params.append('topic_id')
    params.append('incident_date')
    params.append('reminder')
    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, params);
  },
  updateDocumenting: async () => {},
};

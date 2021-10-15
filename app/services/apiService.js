import Config from 'react-native-config';
import { upshotAPI } from '../config/apiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  signIn: async ({ email, password }) => {
    const payload = { email, passwd: password };
    debugger;
    return upshotAPI.post('/login', payload);
  },

  signUp: async data => {
    const { email, password, firstName, lastName, role, token } = data;
    const payload = {
      email,
      passwd: password,
      firstname: firstName,
      lastname: lastName,
      role,
      token,
    };
    console.log('data', payload);
    debugger;
    return upshotAPI.post('/signup', payload);
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
  postNewJourney: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    return upshotAPI.post(`/${uniqueId}/journey/new`);
  },
  postFeedbackDocumenting: async () => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    return upshotAPI.post(`/${uniqueId}/feedback/documenting`);
  },
  updateDocumenting: async () => {},
};

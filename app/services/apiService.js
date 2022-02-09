import Config from 'react-native-config';
import { upshotAPI } from '../config/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default {
  signIn: async params => {
    return upshotAPI.post('/login', params);
  },

  signUp: async params => {
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
  postNewJourney: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/journey`, params);
  },

  postCloseJourney: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`${uniqueId}/feedback/journey/close`, params);
  },

  postFeedbackDocumenting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, params);
  },

  updateDocumenting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/edit`, params);
  },

  updateDocumentingReminder: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    
    return upshotAPI.post(`/${uniqueId}/feedback/documenting/edit`, params);
  },

  postCloseDocumenting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/close`, params);
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

  getCurrentDocumenting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/get`, params);
  },

  postFeedbackPreparing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing`, params);
  },

  getCurrentPreparing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing/get`, params);
  },

  updateFeedbackPreparing: async data => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing/edit`, data);
  },

  postClosePreparing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing/close`, params);
  },

  postFeedbackDiscussing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/`, params);
  },

  getCurrentDiscussing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/get`, params);
  },

  updateFeedbackDiscussing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/edit`, params);
  },

  postCloseDiscussing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/close`, params);
  },

  postFeedbackReflecting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/`, params);
  },

  getCurrentReflecting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/get`, params);
  },

  updateFeedbackReflecting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/edit`, params);
  },

  postCloseReflecting: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/close`, params);
  },

  getStaffRatings: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/get_staff_feedback`,params);
  },

  getReflectingCriteria: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/getcriteria`, params);
  },

  postFeedbackSharing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing`, params);
  },

  getCurrentSharing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing/get`, params);
  },
  
  updateFeedbackSharing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing/edit`, params);
  },

  postCloseSharing: async params => {
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing/close`, params);
  }
};

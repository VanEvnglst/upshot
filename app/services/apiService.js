import Config from 'react-native-config';
import { create } from 'apisauce';
import { upshotDirectory } from 'app/config/ApiConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setAPI = url => {
  const api = create({
    baseURL: `http://${url}/api`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return api;
};

export default {
  getDirectory: async () => {
    return upshotDirectory.get('/directory/');
  },

  signIn: async payload => {

    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    return upshotAPI.post('/login', payload);
  },

  signUp: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    return upshotAPI.post('/signup', params);
  },

  getFeedbackType: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    return upshotAPI.get('/feedback/feedback-type');
  },

  getFeedbackFlow: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    return upshotAPI.get('/feedback/feedback-flow');
  },

  getFeedbackTopics: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    return upshotAPI.get('/feedback/feedback-topics');
  },

  getTeamMembers: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    return upshotAPI.get(`/${uniqueId}/get_staff`);
  },

  getTrivias: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    return upshotAPI.get('/trivias');
  },
  postNewJourney: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/journey`, payload);
  },

  postCloseJourney: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`${uniqueId}/feedback/journey/close`, params);
  },

  postFeedbackDocumenting: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting`, payload);
  },

  updateDocumenting: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/edit`, payload);
  },

  updateDocumentingReminder: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/edit`, payload);
  },

  postCloseDocumenting: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/close`, payload);
  },

  getOpenFeedbackJourneys: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.get(`/${uniqueId}/feedback/journeys/list-open`);
  },

  getClosedFeedbackJourneys: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.get(`/${uniqueId}/feedback/journeys/list-closed`);
  },

  getCurrentFeedbackJourney: async journeyId => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');
  
    const payload = {
      journey_id: journeyId
    };
    return upshotAPI.post(`/${uniqueId}/feedback/journey/get`, payload);
  },

  getCurrentDocumenting: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/documenting/get`, payload);
  },

  postFeedbackPreparing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing`, payload);
  },

  getCurrentPreparing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing/get`, payload);
  },

  updateFeedbackPreparing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing/edit`, payload);
  },

  postClosePreparing: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/preparing/close`, params);
  },

  postFeedbackDiscussing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/`, payload);
  },

  getCurrentDiscussing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/get`, payload);
  },

  updateFeedbackDiscussing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/edit`, payload);
  },

  postCloseDiscussing: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/discussing/close`, payload);
  },

  postFeedbackReflecting: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/`, payload);
  },

  getCurrentReflecting: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/get`, params);
  },

  updateFeedbackReflecting: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/edit`, params);
  },

  postCloseReflecting: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/reflecting/close`, params);
  },

  getStaffRatings: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(
      `/${uniqueId}/feedback/reflecting/get_staff_feedback`,
      params,
    );
  },

  getReflectingCriteria: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(
      `/${uniqueId}/feedback/reflecting/getcriteria`,
      params,
    );
  },

  postFeedbackSharing: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing`, params);
  },

  getCurrentSharing: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing/get`, params);
  },

  updateFeedbackSharing: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing/edit`, params);
  },

  postCloseSharing: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/feedback/sharing/close`, params);
  },

  getFrontlinerMessages: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(
      `/${uniqueId}/feedback/frontliner/messages/get`,
      params,
    );
  },

  getMessage: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(
      `/${uniqueId}/feedback/frontliner/messages/body`,
      params,
    );
  },

  postMessageResponse: async params => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(
      `/${uniqueId}/feedback/frontliner/messages/responsd`,
      params,
    );
  },
};

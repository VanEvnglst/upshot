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
    return upshotAPI.post('/signin', params);
  },

  // getFeedbackType: async () => {
  //   const url = await AsyncStorage.getItem('baseURL');
  //   const upshotAPI = await setAPI(url);
  //   return upshotAPI.get('/feedback/feedback-type');
  // },

  // getFeedbackFlow: async () => {
  //   const url = await AsyncStorage.getItem('baseURL');
  //   const upshotAPI = await setAPI(url);
  //   return upshotAPI.get('/feedback/feedback-flow');
  // },

  // getFeedbackTopics: async () => {
  //   const url = await AsyncStorage.getItem('baseURL');
  //   const upshotAPI = await setAPI(url);
  //   return upshotAPI.get('/feedback/feedback-topics');
  // },

  getTeamMembers: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');
    return upshotAPI.post(`/${uniqueId}/get_staff`);
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

  getCurrentFeedbackJourney: async journeyId => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_current_journey`, journeyId);
  },

  getLayerOneTopics: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_general_topics`, payload);
  },

  getLayerTwoTopics: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_sub_topics`, payload);
  },

  postCaptureFeedbackMoment: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/capture_fb_moment`, payload);
  },

  postCloseCaptureFeedbackMoment: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/close_fb_capture`, payload);
  },

  postRecordEMEntry: async payload => { 
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/record_em_entry`, payload);
  },

  postEditEMEntry: async payload => { 
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/edit_em_entry`, payload);
  },

  getEMEntry: async payload => { 
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_em_entry`, payload);
  },

  postCloseRecordEntry: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/close_em_recording_entries`, payload);
  },

  getLSAOverviewQuestion: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
  
    return upshotAPI.get(`/lsa_overview_questions`);
  },

  getLSAExtendedQuestions: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
  
    return upshotAPI.get(`/lsa_extended_questions`);
  },

  postLSAExtendedAnswers: async payload => { 
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/lsa_test_extended`, payload);
  },
  getFeedbackPortfolio: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_fb_portfolio`);
  },

  postOverviewTest: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/lsa_test_overview`, payload);
  },

  getBaselineScores: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = await setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_lsa_scores`, payload);
  },

  getFrontlinerFeedbackList: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/fl_get_all_feedback`);
  },

  getFrontlinerFeedback: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/fl_get_feedback`, payload);
  },

  postFrontlinerFeedbackResponse: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/record_fl_response`, payload);
  },

  postFaceToFaceSchedule: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/schedule_face_to_face`, payload);
  },

  getResponseFromFrontliner: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_feedback_exchange`, payload);
  },

  postFeedbackExchange: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/record_em_response`, payload);
  },

  postRecordingFLAssessment: async payload => { 
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/fl_fb_assessment`, payload);
  },

  getManagerFeedbackResponse: async payload => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_em_and_fl_responses`, payload);
  },

  getUserActivity: async () => {
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/get_home_stats`);
  },

  postFileUpload: async payload => { 
    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/upload-file`, payload);
  },

  postCaptureAttachment: async payload => { 

    const url = await AsyncStorage.getItem('baseURL');
    const upshotAPI = setAPI(url);
    const uniqueId = await AsyncStorage.getItem('uniqueId');

    return upshotAPI.post(`/${uniqueId}/post_capture_fb_media`, payload);
  },
  
  getOngoingJourney: async () => {
  
  const url = await AsyncStorage.getItem('baseURL');
  const upshotAPI = setAPI(url);
  const uniqueId = await AsyncStorage.getItem('uniqueId');
  
  return upshotAPI.post(`/${uniqueId}/get_all_journey_status`);
  },
};

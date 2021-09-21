import Config from 'react-native-config';
import { upshotAPI } from '../config/apiConfig';

export default {
  getFeedbackType: async () => {
    return upshotAPI.get('/feedback/feedback-type');
  },

  getFeedbackFlow: async () => {
    return upshotAPI.get('/feedback/feedback-flow');
  },

  getFeedbackTopics: async () => {
    return upshotAPI.get('/feedback/feedback-topics');
  },

  getTeamMembers: async uniqueId => {
    return upshotAPI.get(`/${uniqueId}/get_staff`);
  },

  getTrivias: async () => {
    return upshotAPI.get('/trivias');
  },
  postNewJourney: async uniqueId => {
    return upshotAPI.post(`/${uniqueId}/journey/new`);
  },
  postFeedbackDocumenting: async uniqueId => {
    return upshotAPI.post(`/${uniqueId}/feedback/documenting`);
  },
  updateDocumenting: async () => {},
};

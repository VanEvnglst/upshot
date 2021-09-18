import Config from 'react-native-config';
import { upshotAPI } from '../config/api-config';

export default { 
  getFeedbackType: async () => {
    return upshotAPI.get('/journey/posorcors')
  },

  getFeedbackFlow: async () => {
    return upshotAPI.get('/journey/preporspot')
  },

  getFeedbackTopics: async () => {
    return upshotAPI.get('/journey/topics')
  },

  postNewJourney: async () => {
    //return upshotAPI.post('');
  },
  postFeedbackDocumenting: async () => {

  },
  updateDocumenting: async () => {

  },
}
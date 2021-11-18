import { create } from 'apisauce';
import Config from 'react-native-config';

export const upshotAPI = create({
  baseURL: 'http://18.138.8.34/api',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

import { create } from 'apisauce';
import Config from 'react-native-config';

export const upshotAPI = create({
  baseURL: 'http://18.138.8.34/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const upshotDirectory = create({
  baseURL: 'http://52.76.215.10/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

import { Platform } from 'react-native';

const isIos = () => {
  return Platform.OS === 'ios';
}

const isAndroid = () => {
  return Platform.OS === 'android'
};

export default {
  isIos,
  isAndroid,
};
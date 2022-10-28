import { Platform, Dimensions, PixelRatio } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const SCREEN_HEIGHT = Dimensions.get('window').height;

// based on iPhone 11 Pro scale
const scale = SCREEN_WIDTH / 375;
const scaleHeight = SCREEN_HEIGHT / 812;

const normalize = (size, forHeight) => {
  const newSize = size * (forHeight ? scaleHeight : scale)
  return Math.round(PixelRatio.roundToNearestPixel(newSize))
}


const isIos = () => {
  return Platform.OS === 'ios';
}

const isAndroid = () => {
  return Platform.OS === 'android'
};

export default {
  isIos,
  isAndroid,
  normalize,
};
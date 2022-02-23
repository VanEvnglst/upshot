import { StyleSheet, Dimensions } from 'react-native';
import Colors from 'app/theme/colors';

const { width, height } = Dimensions.get('screen');

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    opacity: 0.9,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    height: height,
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: height / 8,
  },
  image: {
    marginTop: 13,
    height: 18,
    width: 18,
  },
  activity: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
});

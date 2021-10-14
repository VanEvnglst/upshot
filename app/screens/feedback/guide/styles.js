import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textTitle: {
    marginBottom: 10,
  },
  contentDescription: {
    lineHeight: 24,
  },
  signPostContainer: {
    marginTop: 20,
    flex: 2,
    marginBottom: 50,
  },
  contentContainer: {
    flexDirection: 'row'
  },
  textContainer: {
    flex: 2,
    marginLeft: 20,
  },
  fabStyle: {
    position: 'absolute',
    bottom: 0,
    alignSelf: 'center',
    backgroundColor: Colors.primary,
  },
  mediumTextStyle: {
    color: Colors.mediumBlack
  },
  lightTextStyle: {
    color: Colors.lightBlack
  },
  guideText: {
    marginTop: 5,
  }
});

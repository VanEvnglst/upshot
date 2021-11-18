import { StyleSheet } from 'react-native';
import { Colors } from 'react-native-paper';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
  },
  btnContainer: {
    marginTop: 30,
    alignItems: 'flex-end',
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  overlineText: {
    color: Colors.lightBlack
  },
  descriptionContainer: {
    paddingRight: 15,
    marginBottom: 30,
  },
  stepTitleText: {
    color: Colors.mediumBlack
  },
  stepDescriptionText: {
    lineHeight: 24,
    marginTop: 20,
    color: Colors.mediumBlack,
  }
});

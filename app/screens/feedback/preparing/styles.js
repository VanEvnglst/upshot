import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default containerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
  },
  btnContainer: {
    flex: 1,
    marginTop: 30,
    alignItems: 'flex-end',
    marginBottom: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  overlineText: {
    color: Colors.lightBlack
  },
  stepTitleText: {
    color: Colors.mediumBlack,
    marginTop: 30,
    marginBottom: 20,
  },
  progressBar: {
    marginVertical: 10,
    borderRadius: 4,
    height: 4,
  },
  descriptionContainer: {
    paddingRight: 15,
    marginBottom: 30,
  },
  stepDescriptionText: {
    lineHeight: 24,
    marginTop: 20,
    color: Colors.mediumBlack,
  },
});

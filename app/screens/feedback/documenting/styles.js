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
    marginBottom: 20,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  overlineText: {
    color: Colors.lightBlack,
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
});

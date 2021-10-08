import { StyleSheet } from 'react-native';
import Colors from '../../../../theme/colors';

export default styles = StyleSheet.create({
  container: {
    paddingRight: 15,
    marginBottom: 30
  },
  stepTitleText: {
    color: Colors.mediumBlack
  },
  descriptionText: {
    marginTop: 20,
    lineHeight: 24,
    color: Colors.mediumBlack
  },
  guideContainer: {
    marginVertical: 30,
    flexDirection: 'row',
  },
  guideTitle: {
    color: Colors.primaryDark
  },
  guideContent: {
    flex: 2,
    marginLeft: 25,
    paddingRight: 15,
  },
  guideText: {
    marginTop: 8,
    color: Colors.lightBlack,
    lineHeight: 20,
  }
});

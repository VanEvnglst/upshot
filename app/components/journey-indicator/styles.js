import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    padding: 16,
    borderWidth: 0.12,
    borderRadius: 2,
    marginBottom: 15,
    borderColor: Colors.black,
  },
  disabledCard: {
    height: 60,
    justifyContent: 'center',
  },
  inProgressCard: {
    height: 180,
    backgroundColor: Colors.primaryDark,
    borderColor: 'transparent',
  },
  doneCard: {
    height: 100,
  },
  disabledText: {
    color: Colors.opaqueBlack,
  },
  descriptionText: {
    marginTop: 10,
    opacity: 0.74,
    lineHeight: 20,
  },
  currentText: {
    color: Colors.white,
  },
  currentDescText: {
    opacity: 0.74,
  },
  buttonText: {
    marginTop: 25,
  },
  reviewText: {
    color: Colors.primary,
  },
  doneTextTitle: {
    color: Colors.mediumBlack,
    lineHeight: 24,
  },
});

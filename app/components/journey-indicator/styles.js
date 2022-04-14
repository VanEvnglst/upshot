import { StyleSheet, Platform } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    padding: 16,
    borderWidth: Platform.OS === 'android' ? 0.12 : 0.18,
    borderRadius: 2,
    marginBottom: 15,
    borderColor: Platform.OS === 'android' ? Colors.black : 'rgba(0,0,0,0.4)',
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

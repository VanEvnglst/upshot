import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    marginLeft: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 15,
    borderColor: 'rgba(0,0,0, 0.3)',
  },
  disabledCard: {
    height: 50,
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
    opacity: 0.35,
  },
  descriptionText: {
    marginTop: 20,
    opacity: 0.74,
  },
  currentText: {
    color: Colors.white,
  },
  buttonText: {
    marginTop: 25,
  },
  reviewText: {
    color: Colors.primaryDark,
  },
});

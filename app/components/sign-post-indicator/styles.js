import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  postInProgress: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: Colors.primaryDark,
  },
  postLine: {
    width: 1,
    backgroundColor: Colors.black,
    opacity: 0.12,
    height: 70,
  },
  disabledLine: {
    height: 50,
  },
  doneLine: {
    height: 90,
  },
  postLineCurrent: {
    height: 180,
  },
  disabled: {
    backgroundColor: '#F2E7FE',
  },
});

import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';

export default styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // alignSelf: 'flex-start'
  },
  postInProgress: {
    width: 24,
    height: 24,
    borderRadius: 24,
    backgroundColor: Colors.primaryDark,
  },
  postLine: {
    width: 1,
    backgroundColor: 'gray',
    opacity: 0.3,
    height: 70,
  },
  disabledLine:{
    height: 40,
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

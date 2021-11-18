import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    width: 24,
    height: 24,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: Colors.secondaryDark,
  },
  showHintContainer: {
    backgroundColor: Colors.secondaryDark,
    borderColor: Colors.white,
  },
  iconStyle: {
    color: Colors.secondaryDark,
  },
  showHintIcon: {
    color: Colors.white,
  },
});

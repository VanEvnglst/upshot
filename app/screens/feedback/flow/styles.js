import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  contentContainer: {
    flex: 5,
    justifyContent: 'center',
    padding: 10,
  },
  labelPadding: {
    paddingBottom: 30,
  },
  btnContainer: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: Colors.primaryDark,
  },
  disabledBtn: {
    backgroundColor: Colors.black,
    opacity: 0.04,
  },
  disabledText: {
    color: Colors.opaqueBlack,
  },
  btnText: {
    color: Colors.white,
  },
});

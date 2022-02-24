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
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: 'rgba(0,0,0,0.04)',
  },
  enabledBtn: {
    backgroundColor: Colors.primaryDark,
  },
  disabledText: {
    color: Colors.opaqueBlack,
  },
  btnText: {
    color: Colors.white,
  },
});

import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    marginTop: normalize(50), 
    paddingHorizontal: normalize(24)
  },
  inputField: {
    height: 48,
    paddingHorizontal: normalize(10),
    width: '100%',
    marginBottom: normalize(24),
    borderWidth: 0.5,
    borderColor: Colors.neutral4,
    borderRadius: 6,
  },
  labelText: {
    marginBottom: 4,
    color: Colors.neutral3
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: normalize(50),
  },
  button: {
    width: '100%',
    marginTop: normalize(30),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledBtn: {
    backgroundColor: Colors.neutral5
  },
  enabledBtn: {
    backgroundColor: Colors.neutral3
  },
  disabledButtonText: {
    color: Colors.neutral3,
    textTransform: 'capitalize'
  },
  enabledBtnText: {
    color: Colors.white,
    textTransform: 'capitalize'
  },
});
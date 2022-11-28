import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import { DeviceUtil } from 'app/utils';

const { normalize } = DeviceUtil;

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: normalize(20),
    borderBottomWidth: 0.5, 
    paddingBottom: normalize(15)
  },
  headerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalize(24)
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  headerText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    paddingLeft: 30,
  },
  buttonRightText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500'
  },
  formContainer: {
    flex: 1,
    marginTop: normalize(50), 
    paddingHorizontal: normalize(24)
  },
  form: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    height: 48,
    paddingHorizontal: normalize(10),
    width: '100%',
    marginBottom: normalize(24),
    borderWidth: 0.5,
    borderColor: Colors.neutral4,
    borderRadius: 6,
    color: '#667080'
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
  showPasswordContainer: {
    height: normalize(50),
    position: 'relative',
    left: normalize(280),
    bottom: normalize(65),
    width: normalize(50),
  },
});

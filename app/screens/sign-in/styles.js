import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    marginTop: 20,
    borderBottomWidth: 0.5, 
    paddingBottom: 15
  },
  headerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
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
    marginTop: 50, 
    paddingHorizontal: 24
    // backgroundColor: Colors.white,
  },
  form: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    height: 48,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 24,
  },
  labelText: {
    marginBottom: 4,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#667080'
  },
  button: {
    width: '100%',
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  logoContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
  formContainer: {
    flex: 2,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: Colors.white,
  },
  form: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    margin: 20,
    width: '95%',
    height: 60,
    paddingHorizontal: 10,
  },
  button: {
    width: '95%',
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

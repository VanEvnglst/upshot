import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1, // 2
  },
  headerText: {
    color: Colors.mediumBlack,
  },
  guideContainer: {
    flex: 1,
    marginTop: 30,
    marginBottom: 20,
  },
  guideText: {
    lineHeight: 30,
  },
  imageContainer: {
    flex: 1,
    marginBottom: 20 
  },
  btnContainer: {
    marginBottom: 30
  },
  button: {
    height: 50, 
    justifyContent: 'center', 
    alignItems: 'center'
  }
});
import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: { 
    height: 200, 
    width: '100%' 
  },
  contentContainer: {
    marginTop: 40,
  },
  contentText: {
    lineHeight: 28,
    marginTop: 35,
    width: '90%',
    color: Colors.mediumBlack,
  },
  btnContainer: {
    flex: 1,
    marginTop: 40,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  button: {
    height: 55,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

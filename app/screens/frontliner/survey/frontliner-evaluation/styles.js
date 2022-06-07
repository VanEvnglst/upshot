import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';


export default styles = StyleSheet.create({
  container: { 
    flex: 1,
  },
  contentContainer: {
    marginVertical: 30,
  },
  questionContainer: {
    marginBottom: 30,
    alignItems: 'center',
    width: '80%',
    alignSelf: 'center',
  },
  questionText: {
    color: Colors.mediumBlack,
    lineHeight: 24,
  },
  sliderContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    width: '85%'
  },
  spacer: {
    marginVertical: 30,
    height: 2,
    backgroundColor: Colors.gray
  }
})
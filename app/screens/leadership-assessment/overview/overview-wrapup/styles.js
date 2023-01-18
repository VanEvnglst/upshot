import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  progressBar: {
    height: 4,
    borderRadius: 4,
    marginTop: 20,
  },
  imageContainer: {
    marginTop: 84,
    alignSelf: 'center',
    width: 200,
    height: 200,
    backgroundColor: '#FFF0C3',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 115,
    height: 115,
  },
  contentContainer: {
    flex: 1,
    marginTop: 84,
    alignItems: 'center',
  },
  titleText: {
    color: '#667080',
  },
  descriptionText: {
    marginTop: 12,
    color: '#667080',
    maxWidth: '90%',
    textAlign: 'center',
  },
  btnContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    marginLeft: 5,
    backgroundColor: '#667080',
    width: '100%',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.white,
  },
  spacer: {
    height: 100,
  },
});
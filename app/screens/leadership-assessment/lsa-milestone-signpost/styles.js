import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'blue',
  },
  image: {
    width: 120,
    height: 120,
  },
  contentContainer: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
  },
  addedMargin: {
    marginTop: 50,
  },
  completionText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
    color: '#667080',
  },
  titleText: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 36,
    color: '#667080',
    textAlign: 'center',
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    marginTop: 12,
    color: '#667080',
    maxWidth: '90%',
    textAlign: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#667080',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: 'white',
  },
  spacer: {
    height: 100,
  },
});

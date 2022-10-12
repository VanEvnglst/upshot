import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 21
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 148
  },
  image: {
    width: 146,
    height: 146,
  },
  contentContainer: {
    justifyContent:'center',
    alignItems: 'center',
    marginHorizontal: 14,
    marginTop: 32,
    minWidth: 333,
    minHeight: 92,
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
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    color: '#FFFFFF',
    textAlign: 'center',

  },
  descriptionText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    marginTop: 12,
    color: '#B1B5C3',
    maxWidth: '90%',
    textAlign: 'center',
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 280
  },
  button: {
    backgroundColor: '#FFFFFF',
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: 12
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 16,
    color: '#353945',
  },
  spacer: {
    height: 100,
  },
});

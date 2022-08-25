import { StyleSheet } from 'react-native';


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 24,
  },
  progressBar: {
    marginLeft: 3,
    borderRadius: 4,
    paddingRight: 19,
    marginTop: 12,
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
  },
  contentContainer: {
    flex: 1,
  },
  guideTitleText: {
    fontSize: 32,
    color: '#667080',
    fontWeight: '700',
    lineHeight: 36,
  },
  guideDescriptionText: {
    color: '#667080',
    marginTop: 27,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22,
  },
  btnContainer: {
    marginBottom: 30,
  },
  button: {
    marginTop: 12,
    backgroundColor: '#667080',
    justifyContent: 'center',
    alignItems: 'center'
  },
  noteText: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
    color: '#667080',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  spacer: { height: 50 }
});
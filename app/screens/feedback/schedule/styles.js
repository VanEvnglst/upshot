import { StyleSheet, Platform } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23262F'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    flex: 1,
    paddingLeft: 24,
  },
  headerTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    flex: 2,
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
    fontWeight: '700',
  },
  headerSave: {
    flex: 1,
    alignItems: 'flex-end',
    paddingRight: 24,
  },
  saveText: {
    fontSize: 16,
    lineHeight: 22,
    color: '#FFFFFF',
  },
  stepsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 20,
    paddingHorizontal: 24,
    borderBottomWidth: 0.3,
  },
  activeStep: {
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  inactiveStep: {
    opacity: 0.5,
    backgroundColor: '#BAC0CA',
    height: 4,
    borderRadius: 4,
    width: 50,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 30,
  },
  selectedNameContainer: {
    flexDirection: 'row',
    borderWidth: 0.3,
    paddingVertical: 5,
    paddingHorizontal: 8,
    height: 35,
    borderRadius: 6,
    alignItems: 'center',
    maxWidth: '60%',
    marginBottom: 8,
  },
  selectedAvatar: {
    width: 24,
    height: 24,
    borderRadius: 21,
    backgroundColor: '#667080',
    marginRight: 4,
    opacity: 0.6,
  },
  selectedName: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },
  questionContainer: {
    marginTop: 15,
    maxWidth: '95%',
  },
  mainQuestionText: {
    fontSize: 24,
    lineHeight: 30,
    fontWeight: '700',
    color: '#667080',
    // marginBottom: 24,
  },
  highlightedText: {
    color: '#A76AFF',
  },
  logDateText: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  },

  textInputStyle: {
    ...Platform.select({
      ios: {
        height: '100%'
      }
    })
  },
  
});

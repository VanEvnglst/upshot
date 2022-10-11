import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353945',
  },
  coverCardContainer: {
    height: '88%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginTop: 70,
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    lineHeight: 16,
    color: 'white',
    fontWeight: '700',
  },
  subtitleText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'white',
    fontWeight: '400',
  },
  stepContainer: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  gradientContainer: {
    flex: 7,
    borderBottomRightRadius: 24,
    borderBottomLeftRadius: 24,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 24,
    marginTop: 80,
  },
  questionContainer: {
    minHeight: 30,
    backgroundColor: 'white',
    borderRadius: 4,
    maxWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  questionText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
  originalFeedbackContainer: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalFeedbackText: {
    fontSize: 12,
    lineHeight: 20,
    fontWeight: '600',
    color: 'white',
    marginRight: 10,
  },
  image: {
    width: 60,
    height: 38,
  },
  questionText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
  entryText: {
    color: 'white',
    marginTop: 15,
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
  },
  entryContainer: {
    marginTop: 30,
    flex: 1,
  },
  textInputContainer: {
    height: 48,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#23262F',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#777E90',
    paddingHorizontal: 16,
  },
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nameContainer: {
    flex: 1,
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: 'white',
  },
  managerNameText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: 'white',
  },
  descriptionText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
  },
  callToActionContainer: {
    flex: 1,
    paddingHorizontal: 16,
    justifyContent: 'center',
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
  },
  sendButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 25,
  },
  nextButton: {
    height: 48,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    flexDirection: 'row',
  },
  nextButtonText: {
    fontSize: 16,
    marginRight: 4,
    lineHeight: 16,
    fontWeight: '700',
    color: '#353945',
  },
  answerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '30%',
    flex: 1,
    zIndex: -1,
  },
  userGreetingText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
    marginBottom: 8,
  },
  guideQuestionText: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: '400',
    textAlign: 'center',
    color: 'white',
  },
  bubbleContainer: {
    flex: 1,
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    backgroundColor: '#23262F',
    borderBottomLeftRadius: 24,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    maxHeight: 100,
    width: 320,
    marginRight: 16,
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 30,
  },
  bubbleText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'white',
    fontWeight: '400',
  },
  noneProvidedText: {
    fontStyle: 'italic',
    opacity: 0.5,
  }
});

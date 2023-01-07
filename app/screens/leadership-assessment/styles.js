import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';

const { normalize } = DeviceUtil;

export default containerStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flex: 3,
  },
  questionHeader: {
    marginTop: 46,
  },
  content: {
    marginTop: 24,
  },
  guideQuestionText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080'
  },
  questionContainer: {
    minHeight: normalize(160),
    marginTop: 24,
    maxWidth: '90%'
  },
  questionText: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 30,
    color: '#667080',
  },
  optionsButton: {
    marginTop: 24,
    borderRadius: 24,
    height: normalize(40),
    minWidth: normalize(321),
    backgroundColor: '#EEF1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionsText: {
    fontSize: 14,
    color: '#667080',
  },
  counterContainer: {
    height: normalize(60),
    marginTop: 63,
    alignItems: 'center',
  },
  counterGuideText: {
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22,
    textAlign: 'center',
    color: '#667080',
  },
  questionCounterContainer: {
    flexDirection: 'row',
  },
  questionCounterText: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    color: '#667080',
  },
  maxQuestionCounterText: {
    marginTop: 4,
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
    color: '#667080',
    opacity: 0.5,
  },
});

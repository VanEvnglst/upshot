import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    marginTop: DeviceUtil.isIos() ? 60 : 30,
    borderBottomWidth: 0.3,
    paddingBottom: 16,
  },
  headerTitleText: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '700',
    color: '#667080',
    marginBottom: 8,
  },
  headerSubtitleText: {
    color: '#667080',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: 16,
    marginTop: 30,
    height: '70%',
  },
  journeyCard: {
    marginTop: 20,
    minHeight: 172,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#BAC0CA',
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 24,
    borderTopWidth: 5,
  },
  journeyCardNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    borderBottomWidth: 0.3,
    paddingBottom: 12,
  },
  avatarIcon: {
    width: 24,
    height: 24,
    borderColor: '#667080',
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 12,
  },
  nameText: {
      color: '#667080',
      fontWeight: '700',
      fontSize: 16,
      lineHeight: 14,
      paddingTop: 3,
  },
  dateText: {
    color: '#667080',
    marginTop: 8,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 14,
  },
  feedbackTypeIcon: {
    width: 16,
    height: 16,
    marginRight: 12,
  },
  feedbackTypeText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
    
  },
});

import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    justifyContent: 'flex-start',
  },
  journeyCard: {
    marginHorizontal: 24,
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
  journeyCardStatusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  journeyCardStatus: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
    borderWidth: 1,
    borderRadius: 4,
  },
  journeyCardStatusText: {
    fontSize: 10,
    lineHeight: 10,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  iconColor: {
    color: '#667080',
  },
  journeyCardNameContainer: {
    flexDirection: 'row',
    marginTop: 12,
    borderBottomWidth: 0.3,
    paddingBottom: 12,
  },
  directReportNameText: {
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
  avatarIcon: {
    width: 24,
    height: 24,
    borderColor: '#667080',
    borderWidth: 1,
    borderRadius: 12,
    marginRight: 12,
  },
  headerTitleText: {
    fontSize: 32,
                lineHeight: 36,
                fontWeight: '700',
                color: '#667080',
                marginBottom: 8,
  },
  floatingAction: {
    position: 'absolute',
          bottom: 20,
          right: 28,
          backgroundColor: '#DBE3FF',
          borderWidth: 1,
          borderColor: '#A0B3F3',
          width: 50,
          height: 50,
          borderRadius: 12,
          justifyContent: 'center',
          alignItems: 'center',
  },
  progressBar: {
    width: 340,
    height: 6,
    marginLeft: 3,
    borderRadius: 4,
    paddingRight: 19,
  },
  spacer: {
    height: 100
  },
  // overlineText: {
  //   alignSelf: 'flex-start',
  //   paddingLeft: 5,
  //   marginBottom: 10,
  // },
  // horizontalCardContainer: {
  //   marginTop: 20,
  // }
});

import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral1,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingTop: 70,
    paddingBottom: 13,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderColor: Colors.neutral3,
    backgroundColor: Colors.neutral1,
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
    color: Colors.white,
    marginBottom: 8,
  },
  headerIcon: {
    width: 24,
    height: 24,
    marginBottom: 10,
  },
  spacer: {
    height: 100,
  },
  greetingText: {
    color: Colors.white,
  },
  subHeaderContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: Colors.neutral3,
  },
  welcomeSubHeader: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  welcomeText: {
    color: Colors.white,
  },
  welcomeDescriptionText: {
    color: Colors.neutral4,
    maxWidth: '90%',
  },
  startNowButton: {
    height: 40,
    backgroundColor: Colors.primary,
    borderRadius: 90,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  buttonText: {
    color: Colors.white,
    textTransform: 'capitalize',
  },
  contentContainer: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  assessmentProgressContainer: {
    height: 90,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(110, 217, 98, 0.08)',
    borderColor: 'rgba(58, 181, 73, 0.3)',
    borderWidth: 1,
  },
  profileProgress: {
    width: 46,
    height: 46,
    borderWidth: 3,
    borderColor: Colors.neutral3,
    borderRadius: 23,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileProgressText: {
    color: Colors.white,
  },
  profileTextContainer: {
    maxWidth: '80%',
  },
  profileHeaderText: {
    color: Colors.white,
  },
  profileDescriptionText: {
    color: Colors.neutral5,
  },
  cardContainer: {
    marginBottom: 8,
    minHeight: 65,
    borderRadius: 16,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.neutral2,
  },
  progressIcon: {
    width: 32,
    height: 32,
  },
  homeLabelText: {
    color: Colors.white,
  },
  journeyDataGradient: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginRight: 12,
  },
  forwardIcon: {
    marginLeft: 12,
    paddingRight: 9,
    color: Colors.neutral4,
  },
  alignStart: {
    flex: 1,
  },
  descriptionText: {
    color: Colors.neutral4,
  },
  highlightedDescText: {
    color: Colors.white,
  },
  subDescText: {
    color: Colors.neutral4,
  },
  feedbackTypeContainer: {
    height: 25,
    paddingHorizontal: 8,
    paddingVertical: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    maxWidth: '65%',
  },
  feedbackTypeText: {
    textTransform: 'uppercase',
  },
  correctiveContainer: {
    borderColor: '#rgba(240, 98, 147, 0.5)',
    backgroundColor: 'rgba(240, 98, 147, 0.1)',
  },
  correctiveText: {
    color: Colors.correctiveFeedback,
  },
  positiveContainer: {
    borderColor: 'rgba(58, 181, 73, 0.5)',
    backgroundColor: 'rgba(58, 181, 73, 0.1)',
  },
  positiveText: {
    color: Colors.positiveFeedback,
  },
  journeyCardContainer: {
    borderRadius: 12,
    padding: 16,
    backgroundColor: 'rgba(119, 126, 145, 0.1)',
    borderWidth: 1,
    borderColor: Colors.neutral3,
    width: 320,
    marginRight: 12,
  },
  journeyDescriptionText: {
    color: Colors.neutral5,
  },
  discussionAvatar: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
  },
});

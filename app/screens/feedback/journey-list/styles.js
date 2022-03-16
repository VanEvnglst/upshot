import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  screenTitle: {
    color: Colors.primary900,
    paddingLeft: 8,
  },
  floatingAction: {
    alignSelf: 'center',
    width: 200,
    backgroundColor: Colors.primary,
  },
  floatingActionText: {
    color: Colors.white,
  },
  labelContainer: {
    marginTop: 40
  },
  overlineText: {
    paddingLeft: 8,
    color: Colors.mediumBlack,
  },
  addedMargin: {
    marginTop: 30,
    marginBottom: 15,
  },
  inProgressCard: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.outline,
    marginTop: 15,
  },
  inProgressContent: {
    padding: 16,
    height: 190,
  },
  inProgressText: {
    flex: 1,
    marginTop: 25,
    marginBottom: 20,
  },
  btnContainer: {
    alignItems: 'flex-start',
  },
  inProgressBtn: {
    color: Colors.primary,
  },
  feedbackForText: {
    marginBottom: 6,
    color: Colors.mediumBlack,
  },
  feedbackDetailsContainer: {
    flexDirection: 'row'
  },
  feedbackDetailsText: {
    color: Colors.lightBlack,
  },
  feedbackDetailsTextSpacer: {
    marginBottom: 7,
  },
  historyCard: {
    borderRadius: 4,
    backgroundColor: Colors.primary50,
    height: 80,
    width: 120,
    marginRight: 15,
  },
  historyCardContent: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 17,
  },
  historyTeammateText: {
    color: Colors.mediumBlack,
    marginBottom: 6,
  },
  historyDateText: {
    color: Colors.lightBlack
  },
  historyContainer: {
    marginBottom: 20
  },
});

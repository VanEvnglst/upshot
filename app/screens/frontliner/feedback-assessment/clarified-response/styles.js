import { StyleSheet } from 'react-native';

export default containerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23262F'
  },
  contentContainer: {
    flex: 3,
    marginTop: 15,
    marginHorizontal: 24
  },
  progressBar: {
    marginLeft: 3,
    borderRadius: 4,
    paddingRight: 19,
    marginTop: 12,

  },
  mainContentContainer: {
    paddingHorizontal: 24,
    marginTop: 30,
    paddingBottom: 20,
    borderBottomWidth: 1,
  },
  headerContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 22,
    color: "#FFFFFF",
    minWidth: 172,
    textAlign: 'center',
  },
  cancelText: {
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  managerName: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#FFFFFF',
  },
  topicText: {
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 20,
    color: '#B1B5C3',
  },
  ratingText: {
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 24,
    color: '#B1B5C3', 
  },
  questionText: {
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
    marginTop: 8,
    color: '#FFFFFF',
  },
  ratingLabel: {
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    color: '#FCFCFD',
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 16,
  },
  btnText: {
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 16,
    textAlignVertical: 'center'
  },

  
});

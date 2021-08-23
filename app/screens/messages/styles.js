import { StyleSheet } from 'react-native';

const SPACING = 20;
const AVATAR_SIZE = 70;
export default styles = StyleSheet.create({
  labelStyle: {
    marginTop: 15,
    marginLeft: 15,
  },
  reminderContainer: {
    flex: 1,
    marginVertical: 15,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: 'grey',
  },
  contentContainer: {
    padding: 10,
  },
  reminderHeaderContainer: { 
    marginBottom: 20 
  },
  readMoreContainer: {
    height: 50,
    justifyContent: 'flex-end',
  },
  messagesContainer: {
    flex: 2,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    paddingLeft: 0,
    marginBottom: SPACING,
    backgroundColor: '#fff',
  },
  messageHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 5,
  },
  textMessage: {
    fontSize: 14,
    opacity: 0.7,
  },
  // textMessage: {
  //   fontSize: 12,
  //   opacity: 0.8,
  //   color: '#0099cc',
  // },
  content: {
    marginLeft: 15,
  },
    // avatar: {
  //   width: AVATAR_SIZE,
  //   height: AVATAR_SIZE,
  //   borderRadius: AVATAR_SIZE,
  //   marginRight: SPACING / 2,
  // },
});

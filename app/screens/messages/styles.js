import { StyleSheet } from 'react-native';
import Colors from '../../theme/colors';
import Fonts from '../../theme/fonts';

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
    borderColor: 'rgba(0,0,0,0.12)',
  },
  contentContainer: {
    padding: 10,
  },
  reminderHeaderContainer: {
    marginBottom: 20,
  },
  reminderTitle: {
    color: Colors.primary,
  },
  textSnippet: {
    marginTop: 20,
    lineHeight: 22,
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
    marginBottom: 5,
  },
  textMessage: {
    opacity: 0.8,
    color: '#0099cc',
  },
  unreadTextMessage: {
    opacity: 1.0,
    fontFamily: Fonts.fontFamily.RalewaySemiBold,
  },
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

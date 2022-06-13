import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

const SPACING = 20;
const AVATAR_SIZE = 70;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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
});

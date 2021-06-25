import { StyleSheet } from 'react-native';

const SPACING = 20;
const AVATAR_SIZE = 70;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE,
    marginRight: SPACING / 2,
  },
  messageCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: SPACING,
    marginBottom: SPACING,
    borderRadius: 12,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    // opacity,
    // transform: [{ scale }],
  },
  textName: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 8,
  },
  messageHeader: {
    fontSize: 14,
    opacity: 0.7,
  },
  textMessage: {
    fontSize: 12,
    opacity: 0.8,
    color: '#0099cc',
  },
  content: {
    marginLeft: 15,
  },
});

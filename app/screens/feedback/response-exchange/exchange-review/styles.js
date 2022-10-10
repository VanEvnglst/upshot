import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FCFCFD',
    flex: 1,
  },
  headerContainer: {
    marginTop: 70,
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
  backButton: {
    marginRight: 16,
  },
  reviewHeaderContainer: {
    flex: 2,
  },
  headerTitleText: {
    fontSize: 24,
    lineHeight: 30,
    color: '#667080',
    fontWeight: '700',
  },
  headerSubtitleText: {
    fontSize: 14,
    lineHeight: 18,
    color: '#667080',
    fontWeight: '400',
    marginTop: 5,
  },
  contentContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  avatarContainer: {
    flexDirection: 'row',
  },
  cardContainer: {
    marginTop: 16,
    borderRadius: 12,
    borderWidth: 0.4,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderColor: '#BAC0CA',
  },
  cardLabelText: {
    color: '#777E90',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 22,
  },
  cardContentText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '400',
    color: '#777E90',
    marginTop: 8,
  },
  labelAlignEnd: {
    alignSelf: 'flex-end',
  },
  replyContainer: {
    marginTop: 24,
  },
  inputContainer: {
    marginTop: 8,
    borderColor: '#E6E8EC',
    borderRadius: 6,
    borderWidth: 0.5,
    backgroundColor: '#F4F6F9',
    paddingVertical: 13,
    paddingHorizontal: 12,
    minHeight: 170,
    paddingTop: 15,
  },
  btnContainer: {
    marginTop: 30,
    marginBottom: 40,
  },
  button: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#667080'
  },
  nameAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: 'white',
  },
  managerNameText: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '700',
    color: '#667080',
  },
  roleText: {
    fontSize: 14,
    lineHeight: 22,
    fontWeight: '400',
    color: '#667080',
  }
});

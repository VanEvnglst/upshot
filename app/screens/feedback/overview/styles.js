import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#353945',
  },
  headerContainer: {
    paddingHorizontal: 24,
    marginTop: 80,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 0.3,
    borderBottomColor: '#777E90',
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  headerTitleText: {
    fontSize: 16,
    lineHeight: 16,
    color: 'white',
    fontWeight: '700',
  },
  contentContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  avatarText: {
    fontSize: 16,
    lineHeight: 18,
    fontWeight: '700',
    color: 'white',
  },
  responderText: {
    marginTop: 12,
    color: 'white',
    fontWeight: '700',
    fontSize: 24,
    lineHeight: 32,
  },
  responderDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: 'white',
    fontWeight: '400',
  },
  cardContainer: {
    marginTop: 32,
  },
  card: {
    minHeight: 56,
    backgroundColor: '#353945',
    borderWidth: 0.5,
    borderColor: '#777E90',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: 'center',
    marginTop: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStatus: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#3772FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitleText: {
    marginLeft: 14,
    flex: 8,
    textTransform: 'uppercase',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
    color: 'white',
  },
  nameAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  managerInputText: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: '#777E90',
    marginBottom: 5,
  },
  managerInputContent: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: '400',
    color: 'white',
  },
  inputContainer: {
    marginTop: 18,
  },
  clarificationContainer: {
    marginTop: 12,
  },
});

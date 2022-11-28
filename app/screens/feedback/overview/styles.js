import { StyleSheet } from 'react-native';
import { DeviceUtil } from 'app/utils';
import Colors from 'app/theme/colors';

const { normalize } = DeviceUtil;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.neutral3,
  },
  headerContainer: {
    paddingHorizontal: normalize(24),
    marginTop: normalize(80),
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: normalize(18),
    borderBottomWidth: normalize(0.3),
    borderBottomColor: Colors.neutral4,
  },
  headerTitleContainer: {
    flex: 2,
    alignItems: 'center',
  },
  headerTitleText: {
    color: Colors.white,
  },
  contentContainer: {
    marginTop: normalize(24),
    paddingHorizontal: normalize(24),
  },
  responderText: {
    marginTop: normalize(12),
    color: Colors.white,
  },
  responderDescription: {
    color: Colors.white,
  },
  cardContainer: {
    marginTop: normalize(32),
  },
  card: {
    minHeight: normalize(56),
    backgroundColor: Colors.neutral3,
    borderWidth: normalize(0.5),
    borderColor: Colors.neutral4,
    borderRadius: normalize(12),
    paddingVertical: normalize(12),
    paddingHorizontal: normalize(16),
    justifyContent: 'center',
    marginTop: normalize(8),
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardStatus: {
    width: normalize(22),
    height: normalize(22),
    borderRadius: normalize(11),
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledCardStatus: {
    backgroundColor: '#68738F',
  },
  enabledCardStatus: {
    backgroundColor: Colors.blue100,
  },
  cardTitleText: {
    marginLeft: normalize(14),
    flex: 8,
    textTransform: 'uppercase',
    color: Colors.white,
  },
  disabledCardTitleText: {
    color: Colors.neutral4,
  },
  nameAvatar: {
    width: normalize(42),
    height: normalize(42),
    borderRadius: normalize(21),
    marginRight: normalize(10),
  },
  managerInputText: {
    color: Colors.neutral4,
    marginBottom: normalize(5),
  },
  managerInputContent: {
    color: Colors.white,
  },
  inputContainer: {
    marginTop: normalize(18),
  },
  clarificationContainer: {
    marginTop: normalize(12),
  },
  noneProvidedText: {
    color: Colors.neutral4,
    marginBottom: normalize(5),
  },
  btnCotnainer: {
    paddingHorizontal: normalize(24),
    borderTopWidth: normalize(0.3),
    borderTopColor: Colors.neutral4,
    backgroundColor: Colors.neutral3,
    height: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: normalize(30),
  },
  button: {
    borderRadius: normalize(12),
    height: normalize(48),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    width: '100%',
  },
  buttonContent: {
    paddingTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginRight: normalize(4),
    color: Colors.neutral3,
  },
});

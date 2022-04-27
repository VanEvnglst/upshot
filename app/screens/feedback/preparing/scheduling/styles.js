import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: { 
     flex: 7,
  },
  selectionContainer: {
    flex: 1,
    marginTop: 30,
  },
  hintCard: {
    backgroundColor: 'rgba(0,0,0,0.04)',
    borderRadius: 16,
    alignItems: 'center',
    paddingVertical: 15,
    marginVertical: 20,
  },
  hintCardText: {
    color: Colors.primary900,
    padding: 20,
    lineHeight: 24,
    fontWeight: '700',
    textAlign: 'center',
    width: '85%',
  },
  spacer: {
    marginBottom: 10,
  },
  btnContainer: { 
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  inviteBtn: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    padding: 20,
    width: 350,
    height: 550,
  },
  alertConfirmationContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  saveModal: {
    padding: 20,
    width: 300,
    height: 140,
  },
  saveModalTextContainer: {
    flex: 1,
  },
  saveModalText: {
    marginTop: 10,
  },
  saveModalBtnContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginTop: 20,
  }
});

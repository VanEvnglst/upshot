import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default containerStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  contentContainer: {
    flex: 3
  },
  btnContainer: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  overlineText: {
    color: Colors.lightBlack,
  },
  stepTitleText: {
    color: Colors.mediumBlack,
  },
  progressBar: {
    marginVertical: 10,
    borderRadius: 4,
    height: 4,
  },
  modal: {
    padding: 20,
    width: 300,
    height: 140,
  },
  modalTextContainer: {
    flex: 1,
  },
  modalText: {
    marginTop: 10,
  },
  modalBtnContainer: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 20,
  },
  stepDescriptionText: {
    lineHeight: 24,
    marginTop: 10,
    marginBottom: 20,
    width: '90%',
    color: Colors.mediumBlack
  },
  soloBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20
  },
});

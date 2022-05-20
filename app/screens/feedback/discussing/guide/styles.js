import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  headerText: {
    color: Colors.meiumBlack,
  },
  descriptionContainer: {
    marginTop: 20,
  },
  footNoteContainer: {
    marginTop: 15,
    marginBottom: 20,
  },
  descStyle: {
    lineHeight: 24,
    color: Colors.mediumBlack,
  },
  contentContainer: {
    marginTop: 20,
    marginBottom: 40,
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  btnContainer: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: Colors.primaryDark,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: Colors.white,
  },
  contentStyle: {
    flex: 2,
    marginLeft: 20,
    paddingTop: 10,
  },
  guidePostContainer: {
    marginTop: 30,
    flexDirection: 'row'
  },
  guideTitle: {
    color: Colors.primaryDark,
  },
  guideDesc: {
    color: Colors.lightBlack,
    lineHeight: 20,
    marginTop: 10,
  },
});

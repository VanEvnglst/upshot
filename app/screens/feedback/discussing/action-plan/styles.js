import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlineText: {
    color: Colors.lightBlack,
  },
  titleText: {
    color: Colors.mediumBlack,
    marginTop: 30,
    marginBottom: 20,
  },
  actionPlanContainer: {
    marginTop: 30,
  },
  inputSpacer: {
    marginBottom: 20
  },
  addItemButton: {
    borderWidth: 0.5,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  addItemText: {
    color: Colors.mediumBlack,
  },
  btnContainer: {
    marginBottom: 30,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
    flexDirection: 'row',
  },
});
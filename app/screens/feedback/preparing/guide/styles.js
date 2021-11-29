import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';

export default styles = StyleSheet.create({
  descriptionContainer: {
    marginTop: 20,
  },
  descStyle: {
    lineHeight: 24,
    color: Colors.mediumBlack,
  },
  guideStyle: {
    lineHeight: 24,
    marginTop: 10,
    color: Colors.mediumBlack,
  },
  listStyle: {
    marginTop: 20,
    flex: 1,
  },
  contentStyle: {
    flex: 2,
    marginLeft: 20,
    paddingTop: 10,
  },
  headerText: {
    color: Colors.mediumBlack,
  },
  descriptionText: {
    color: Colors.mediumBlack,
  },
  stepText: {
    color: Colors.primaryDark,
    marginBottom: 5,
  },
  textTitle: {
    color: Colors.lightBlack,
    width: 150,
  },
  btnContainer: {
    flex: 1,
    marginBottom: 20,
    justifyContent: 'flex-end'
  },
  button: {
    backgroundColor: Colors.primaryDark
  },
  btnText: {
    color: Colors.white,
  }
});

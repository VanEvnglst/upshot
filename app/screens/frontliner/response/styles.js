import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import Fonts from 'app/theme/fonts';

const { fontFamily } = Fonts;

export default styles = StyleSheet.create({
  container: {
    flex: 3,
    marginTop: 30,
  },
  headerText: {
    color: Colors.black,
  },
  messageCard: {
    borderWidth: 1,
    borderColor: Colors.outline,
    borderRadius: 8,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  nameContainer: {
    flexDirection: 'row',
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  nameContent: {
    marginLeft: 20,
  },
  senderContainer: {
    flexDirection: 'row',
  },
  senderNameText: {
    color: Colors.mediumBlack,
    fontFamily: fontFamily.RalewaySemiBold,
  },
  dateText: {
    color: Colors.lightBlack,
    marginLeft: 10,
  },
  receipientNameText: {
    color: Colors.lightBlack,
    marginTop: 6,
  },
  contentContainer: {
    paddingLeft: 5,
  },
  content: {
    marginTop: 30,
  },
  contentHeader: {
    color: Colors.secondaryDark,
    marginBottom: 10,
  },
  contentBody: {
    color: Colors.mediumBlack,
  },
  frontlinerQuestion: {
    color: Colors.primaryDark,
    marginBottom: 20, 
  },
  responseContainer: {
    paddingLeft: 5, 
    marginTop: 30, 
    flex: 1
  },
  btnContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
    marginVertical: 30,
  },
  button: {
    alignSelf: 'flex-end',
  },
});

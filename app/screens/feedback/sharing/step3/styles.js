import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import Fonts from 'app/theme/fonts';

const { fontFamily} = Fonts;

export default styles = StyleSheet.create({
content: {
  flex: 3,
},
reviewCard: {
  borderWidth: 1, 
  borderColor: Colors.outline, 
  borderRadius: 8, 
  padding: 20,
},
nameContainer: {
  flexDirection: 'row',
},
avatar: {
  height: 40, 
  width: 40
},
nameContent: {
  marginLeft: 20
},
staffNameText: {
  color: Colors.lightBlack,
  marginTop: 6
},
managerNameText: {
  color: Colors.mediumBlack,
  fontFamily: fontFamily.RalewaySemiBold
},
message: {
  color: Colors.mediumBlack
},
editButton: {
  marginVertical: 20
},
editContainer: {
  flexDirection: 'row'
},
editIcon: {
  color: Colors.primaryDark,
},

editText: {
  color: Colors.primaryDark,
  marginLeft: 10,
},
earContainer: {
  marginTop: 20
},
earContent: {
  marginBottom: 30,
},
overlineEAR: {
  color: Colors.secondaryDark,
  marginBottom: 10,
},
bodyText: {
  color: Colors.mediumBlack
},
});

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center'
},
nameAvatar: {
  width: 42,
  height: 42,
  borderRadius: 21,
  marginRight: 10,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 1,
  borderColor: 'white'
},
initialsText: {
  fontSize: 16,
  lineHeight: 18,
  fontWeight: '700',
  color: 'white'
},
nameText: {
  fontSize: 16,
  lineHeight: 24,
  fontWeight: '700',
  color: 'white'
},
positionText: {
  fontSize: 14,
  lineHeight: 24,
  fontWeight: '400',
  color: 'white'
},
});
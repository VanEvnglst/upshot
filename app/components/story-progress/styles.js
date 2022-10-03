import { StyleSheet } from 'react-native';

export default StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%'
},
stepContainer: {
  height: 4,
  borderRadius: 4,
  minWidth: 50,
},
activeStep: {
  backgroundColor: 'white',
},
inactiveStep: {
  opacity: 0.5,
  backgroundColor: 'white',
}
});

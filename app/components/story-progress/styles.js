import { StyleSheet } from 'react-native';

const ITEM_SIZE = 42;

export default StyleSheet.create({
container: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
},
stepContainer: {
  height: 4,
  borderRadius: 4,
  width: 42,
  marginRight: 8,
},
activeStep: {
  backgroundColor: 'white',
},
inactiveStep: {
  opacity: 0.5,
  backgroundColor: 'white',
}
});

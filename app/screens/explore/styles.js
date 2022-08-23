import { StyleSheet } from 'react-native';


const PRIMARY_COLOR = '#667080';

export default styles = StyleSheet.create({ 
container: { 
  flex: 1,
},
headerContainer: {
  flexDirection: 'row', 
  alignItems: 'center',
  justifyContent: 'space-between',
},
headerIconsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '25%'
},
headerTitleText: {
  fontSize: 32,
  color: PRIMARY_COLOR,
  fontWeight: '700'
},
addedPadding: {
  paddingHorizontal: 16
},
addedMargin: {
  marginTop: 20
},
viewSpacer: {
  height: 100
},
searchContainer: {
  marginTop: 16, height: 40, borderWidth: 0.5, borderColor: '#667080', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 14, paddingVertical: 8, borderRadius: 6, marginBottom: 20,
},
searchText: {marginLeft: 12, fontSize: 16, lineHeight: 22, fontWeight: '400', color: '#667080' },
cardContainer: {
  marginHorizontal: 16,
  borderWidth: 0.5,
  borderColor:PRIMARY_COLOR,
  borderRadius: 6,
  minHeight: 242
},
cardImageContainer: {
  flex: 2, minHeight: 165
},
recommendedBadge: { height: 26,
  backgroundColor: '#727CD9', 
  alignSelf: 'flex-end', 
  minWidth: 150, 
  borderTopRightRadius: 6, 
  borderBottomLeftRadius: 6, 
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: 8,
},
recommendedBadgeText: {
  fontWeight: '700',
  color: 'white',
  fontSize: 12,
  lineHeight: 22
},
cardContentContainer: {
  flex: 1, 
  borderTopWidth: 0.5, 
  borderColor: PRIMARY_COLOR, 
  paddingHorizontal: 8, 
  paddingTop: 12, 
  paddingBottom: 8,
},
cardTitleText: {
  fontSize: 20,
  lineHeight: 26,
  fontWeight: '700',
  color: PRIMARY_COLOR
},
cardDescriptionText: {
  marginTop: 30,
  fontSize: 12,
  lineHeight: 18,
  fontWeight: '400',
  color: PRIMARY_COLOR,
  maxWidth: '90%',
  paddingBottom: 8,
},
catergoryContainer: {
  marginTop: 20, borderTopWidth: 0.5, borderColor: PRIMARY_COLOR, paddingHorizontal: 16, paddingTop: 20
},
categoryTitleText: {
  fontSize: 24, color: PRIMARY_COLOR, lineHeight: 30, fontWeight: '700', marginBottom: 4
},
categoryDescriptionText: {
  color: PRIMARY_COLOR, fontWeight: '400', fontSize: 16, lineHeight: 22,
}
});
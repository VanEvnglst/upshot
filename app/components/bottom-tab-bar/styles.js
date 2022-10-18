import { StyleSheet } from 'react-native';


export default StyleSheet.create({
  container: {
    backgroundColor: '#141416',
  },
  tabBarContainer: {
    height: 105,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#141416',
    paddingHorizontal: 24,
    paddingTop: 12,
    paddingBottom: 44,
    borderWidth: 1,
    borderColor: '#353945',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  focusedTab: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 14,
    backgroundColor: 'rgba(252, 252, 253, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    borderRadius: 12,
  },
  tabIcon: {
    width: 24,
    height: 24,
  },
  addIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#246BFD',
    justifyContent: 'center',
    alignItems: 'center',
  }

})
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingVertical: 10,
  },
  headerLeftContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  headerRightContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 10,
    paddingBottom: 8,
  },
  headerTitleContainer: {
    flex: 4,
    alignItems: 'center',
  },
  iconStyle: {
    width: 24,
    height: 24,
  },
  headerLeftLabel: {
    fontSize: 16,
  },

});

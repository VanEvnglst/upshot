import { StyleSheet } from 'react-native';
import Colors from 'app/theme/colors';
import Fonts from 'app/theme/fonts';

const SPACING = 10;

export default styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    marginVertical: SPACING,
    backgroundColor: Colors.white,
    maxHeight: 80,
  },
  image: {
    alignSelf: 'flex-start',
    height: 50, 
    width: 50, 
    borderRadius: 25
  },
  content: {
    marginLeft: 15,
    flex: 1,
  },
  headerContent: {
    flexDirection: 'row',
  },
  messageTitle: {
    color: Colors.mediumBlack,
    marginBottom: 8,
    flex: 3,
  },
  unreadDateText: {
    fontWeight: '700'
  },
  dateText: {
    color: Colors.lightBlack,
    flex: 1,
  },
  messageSubtitle: {
    color: Colors.mediumBlack
  },
  unreadMessageSubtitle: {
    fontFamily: Fonts.fontFamily.RalewaySemiBold,
  },
  responseContainer: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  responseIndicator: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: Colors.primaryDark,
    marginRight: 15,
  },
  responseRequiredText: {
    color: Colors.primaryDark
  }
  
})
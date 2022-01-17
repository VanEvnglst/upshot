import { StyleSheet, Dimensions, Platform } from 'react-native';
import Colors from 'app/theme/colors';

const { width } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.8;
const ITEM_HEIGHT = ITEM_SIZE * 1.6;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;
export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    width: ITEM_SIZE,
  },
  card: {
    backgroundColor: Colors.gray,
    height: ITEM_HEIGHT,
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowRadius: 30,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    elevation: 4,
    // borderRadius: 18,
    // shadowColor: '#000',
    // shadowRadius: 30,
    // shadowOpacity: 0.5,
    // shadowOffset: {
    //   width: 0,
    //   height: 0,
    // },
    // padding: 12,
    //backgroundColor: Colors.width,
  },
  cardSpacer: {
    width: EMPTY_ITEM_SIZE,
  },
  cardTitle: {
    color: Colors.primaryDark,
  },
  cardContentContainer: {
    marginTop: 20,
    flex: 1,
  },
  cardContent: {
    color: Colors.mediumBlack,
    lineHeight: 24,
  },
  cardGuideContainer: {
    alignItems: 'center', 
    alignSelf: 'center' 
  },
  guideText: {
    marginTop: 20,
    color: Colors.lightBlack
  },
  singleBtnContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  endMeetingBtn: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderWidth: 0.5,
  },
  endMeetingBtnText: {
    color: Colors.primaryDark,
  },
  btnContainer: {},
});

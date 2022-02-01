import { StyleSheet } from 'react-native';
import Fonts from 'app/theme/fonts';

const { size, letterSpacing, fontFamily } = Fonts;
export default styles = StyleSheet.create({
  text: {
    //marginVertical: 5,
  },
  h1: {
    fontSize: size.h1,
    letterSpacing: letterSpacing.h1,
    fontFamily: fontFamily.Shrikhand,
  },
  h2: {
    fontSize: size.h2,
    letterSpacing: letterSpacing.h2,
    fontFamily: fontFamily.Shrikhand,
  },
  h3: {
    fontSize: size.h3,
    letterSpacing: letterSpacing.h3,
    fontFamily: fontFamily.Shrikhand,
  },
  h4: {
    fontSize: size.h4,
    letterSpacing: letterSpacing.h4,
    fontFamily: fontFamily.Shrikhand,
  },
  h5: {
    fontSize: size.h5,
    letterSpacing: letterSpacing.h5,
    fontFamily: fontFamily.Shrikhand,
  },
  h6: {
    fontSize: size.h6,
    letterSpacing: letterSpacing.h6,
    fontFamily: fontFamily.RalewayMedium,
  },
  subtitle1: {
    fontSize: size.body1,
    letterSpacing: letterSpacing.subtitle1,
    fontFamily: fontFamily.RalewayRegular,
  },
  subtitle2: {
    fontSize: size.body2,
    letterSpacing: letterSpacing.subtitle2,
    fontFamily: fontFamily.RalewaySemiBold,
  },
  body1: {
    fontSize: size.body1,
    letterSpacing: letterSpacing.body1,
    fontFamily: fontFamily.RalewayRegular,
  },
  body2: {
    fontSize: size.body2,
    letterSpacing: letterSpacing.body2,
    fontFamily: fontFamily.RalewayRegular,
  },
  button: {
    fontSize: size.body2,
    letterSpacing: letterSpacing.button,
    textTransform: 'uppercase',
    fontFamily: fontFamily.RalewaySemiBold,
  },
  caption: {
    fontSize: size.caption,
    letterSpacing: letterSpacing.caption,
    fontFamily: fontFamily.RalewayRegular,
  },
  overline: {
    fontSize: size.overline,
    letterSpacing: letterSpacing.overline,
    textTransform: 'uppercase',
    fontFamily: fontFamily.RalewayRegular,
  },
});

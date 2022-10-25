import { StyleSheet } from 'react-native';
import Fonts from 'app/theme/fonts';

const { size, letterSpacing, lineHeight, fontWeight, fontFamily } = Fonts;

export default styles = StyleSheet.create({
  text: {
    //marginVertical: 5,
  },
  hero: {
    fontSize: size.hero,
    letterSpacing: letterSpacing.hero,
    lineHeight: lineHeight.heero
  },
  h1: {
    fontSize: size.h1,
    letterSpacing: letterSpacing.h1,
    lineHeight: lineHeight.h1,
  },
  h2: {
    fontSize: size.h2,
    letterSpacing: letterSpacing.h2,
    lineHeight: lineHeight.h2,
  },
  h3: {
    fontSize: size.h3,
    letterSpacing: letterSpacing.h3,
    lineHeight: lineHeight.h3,
  },
  h4: {
    fontSize: size.h4,
    letterSpacing: letterSpacing.h4,
    lineHeight: lineHeight.h4,
  },
  body1: {
    fontSize: size.body1,
    lineHeight: lineHeight.body1
  },
  body2: {
    fontSize: size.body2,
    lineHeight: lineHeight.body2
  }, 
  caption1: {
    fontSize: size.caption1,
    lineHeight: lineHeight.caption1,
  },
  caption2: {
    fontSize: size.caption2,
    lineHeight: lineHeight.caption2,
  },
  caption3: {
    fontSize: size.caption3,
    lineHeight: lineHeight.caption3,
  },
  button: {
    fontSize: size.body2,
    lineHeight: lineHeight.caption3,
  },
  smallButton: {
    fontSize: size.caption1,
    lineHeight: lineHeight.caption3,
  },
  hairlineLarge: {
    fontSize: size.body2,
    lineHeight: lineHeight.caption3,
    textTransform: 'uppercase',
  },
  hairlineSmall: {
    fontSize: size.caption2,
    lineHeight: lineHeight.hairline,
    textTransform: 'uppercase',
  },
  boldWeight: {
    fontWeight: fontWeight.bold,
  },
  semiBoldWeight: {
    fontWeight: fontWeight.semiBold,
  },
  mediumWeight: {
    fontWeight: fontWeight.medium,
  },
  regularWeight: {
    fontWeight: fontWeight.regular,
  }
});

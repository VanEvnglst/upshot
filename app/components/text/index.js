import React from 'react';
import { Text as TextComponent } from 'react-native';

import styles from './styles';

const Text = ({ children, style, type }) => {
  return (
    <TextComponent
      style={[
        style,
        type === 'h1' && styles.h1,
        type === 'h2' && styles.h2,
        type === 'h3' && styles.h3,
        type === 'h4' && styles.h4,
        type === 'h5' && styles.h5,
        type === 'h6' && styles.h6,
        type === 'subtitle1' && styles.subtitle1,
        type === 'subtitle2' && styles.subtitle2,
        type === 'body1' && styles.body1,
        type === 'body2' && styles.body2,
        type === 'button' && styles.button,
        type === 'caption' && styles.caption,
        type === 'overline' && styles.overline,
      ]}>
      {children}
    </TextComponent>
  );
};

export default Text;

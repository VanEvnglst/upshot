import React from 'react';
import { View, Image } from 'react-native';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';
import Colors from 'app/theme/colors';

const SliderComponent = props => {
  const {
    leftImage,
    rightImage,
    minValue,
    maxValue,
    step,
    value,
    onSlidingStart,
    onSlidingComplete,
  } = props;

  return (
    <View style={{ flexDirection: 'row' }}>
      <Image source={leftImage} />
      <Slider
        minimumValue={minValue}
        maximumValue={maxValue}
        style={{ width: '85%', height: 25 }}
        step={step}
        value={value}
        thumbTintColor={Colors.primaryDark}
        minimumTrackTintColor={Colors.primaryDark}
        maximumTrackTintColor={Colors.primary}
        //thumbImage={Images.sliderPin}
        onSlidingStart={onSlidingStart}
        onSlidingComplete={onSlidingComplete}
      />
      <Image source={rightImage} />
    </View>
  );
};

export default SliderComponent;

Slider.propTypes = {};

Slider.defaultProps = {};

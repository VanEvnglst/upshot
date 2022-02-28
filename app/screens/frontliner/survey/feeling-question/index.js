import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const FeelingQuestion = props => {
  const { survey } = labels.frontliner;
  const [feelingValue, setFeelingValue] = useState(0);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 30 }}>
        <Text type="h6" testID={'txt-feelingQuestion-label'}>
          {survey.feeling}
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Slider
          leftImage={Images.thumbsDownEmoji}
          rightImage={Images.thumbsUpEmoji}
          minValue={1}
          maxValue={10}
          step={1}
          value={feelingValue}
          onSlidingStart={value => handleSliderValue(value)}
          onSlidingComplete={value => handleSliderValue(value)}
        />
      </View>
      <View style={containerStyles.btnContainer}>
        <Button
          mode='text'
        >{labels.common.back}</Button>
        <Button
          mode='contained'
        >{labels.common.next}</Button>
      </View>
    </View>
  );
};

export default FeelingQuestion;

FeelingQuestion.propTypes = {};

FeelingQuestion.defaultProps = {};

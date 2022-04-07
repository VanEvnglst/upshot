import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
// import Slider from '@react-native-community/slider';
import { Text, Slider } from 'app/components';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import { getReflectingStep, getReflectStep1Data } from 'app/store/selectors';
import labels from 'app/locales/en';
import Colors from 'app/theme/colors';
import styles from './styles';
import Images from 'app/assets/images';
import containerStyles from '../styles';

const ReflectingStep1 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);
  const stepData = useSelector(getReflectStep1Data);
  const [feelingValue, setFeelingValue] = useState(3);
  const [didSliderMove, setDidSliderMove] = useState(false);

  useEffect(() => {
    if (stepData.data) 
    setFeelingValue(stepData.data);
  }, [stepData]);

  const handleSliderValue = value => {
    setFeelingValue(value);
    setDidSliderMove(true);
  };
  const handleNext = () => {
    if (didSliderMove)
      dispatch(ReflectingActions.setReflectingData('step1', feelingValue));
    else dispatch(ReflectingActions.setReflectingData('step1', 0));
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
  };

  return (
    <View style={{ flex: 1 }}>
      <View>
        <Text
          type="h6"
          style={containerStyles.stepTitleText}
          testID={'txt-reflectingStep1-label'}>
          {feedbackReflecting.howDidYouFeel}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flex: 3,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Slider
          leftImage={Images.sadEmoji}
          rightImage={Images.happyEmoji}
          minValue={1}
          maxValue={10}
          step={1}
          value={feelingValue}
          onSlidingStart={value => handleSliderValue(value)}
          onSlidingComplete={value => handleSliderValue(value)}
        />
        {/* <View style={{ flexDirection: 'row' }}>
          <Image source={Images.sadEmoji} />
          <Slider
            minimumValue={0}
            maximumValue={5}
            style={{ width: '85%', height: 25 }}
            step={1}
            value={feelingValue}
            thumbTintColor={Colors.primaryDark}
            minimumTrackTintColor={Colors.primaryDark}
            maximumTrackTintColor={Colors.primary}
            //thumbImage={Images.sliderPin}
            onSlidingStart={value => setFeelingValue(value)}
            onSlidingComplete={value => setFeelingValue(value)}
            // thumbTouchSize={{width: 50, height: 60}}
          />
          <Image source={Images.happyEmoji} />
        </View> */}
      </View>
      <View style={styles.btnContainer}>
        <Button mode="contained" onPress={() => handleNext()}>
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default ReflectingStep1;

ReflectingStep1.propTypes = {};

ReflectingStep1.defaultProps = {};

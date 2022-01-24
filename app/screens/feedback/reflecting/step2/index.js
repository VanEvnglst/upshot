import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import { getReflectingStep, getReflectStep2Data } from 'app/store/selectors';
import reflectingQuestions from 'app/models/ReflectingQuestions';
import labels from 'app/locales/en';
import Colors from 'app/theme/colors';
import Images from 'app/assets/images';
import containerStyles from '../styles';

const ReflectingStep2 = props => {
  const { route } = props;
  const { feedbackReflecting } = labels;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);
  const stepData = useSelector(getReflectStep2Data);
  const [state, setState] = useState({
    provideInfo: 3,
    calmFeedback: 3,
    listenToEmployee: 3,
    gaveFeedbackSoon: 3,
    establishRapport: 3,
    clearlyStatePurpose: 3,
    involveEmployee: 3,
    documentAndSend: 3,
  });
  const [sliderMovement, setSliderMovement] = useState({
    provideInfo: false,
    calmFeedback: false,
    listenToEmployee: false,
    gaveFeedbackSoon: false,
    establishRapport: false,
    clearlyStatePurpose: false,
    involveEmployee: false,
    documentAndSend: false,
  });

  useEffect(() => {
    if (stepData.data) {
      const existingDataArr = Object.keys(stepData.data);
      const valueArr = Object.values(stepData.data);
      for (i = 0; i < existingDataArr.length; i++ ) {
        setSliderValue(existingDataArr[i],valueArr[i]);
      }
      // dataArr.forEach(item => setSliderValue(item[key], item[value]))
      // stepData.data.split(',');
    }
    //setSliderValue(stepData.data)
  }, [stepData]);

  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  };
  const handleNext = async () => {
    let results = Object.keys(sliderMovement).filter(
      key => sliderMovement[key] === false,
    );
    results.forEach((item, i) => setSliderValue(item, 0));
    debugger;
      dispatch(ReflectingActions.setReflectingData('step2', state));
      dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
  };

  const validateSliderMovement = () => {};

  const setSliderValue = (key, value) => {
    setState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSliderValue = (key, value) => {
    setSliderValue(key, value);
    setSliderMovement(prevState => ({
      ...prevState,
      [key]: true,
    }));
  };

  // const QuestionForm = ({ name, item }) => {
  //   return (
  //     <View>
  //       <View style={{ marginTop: 30 }}>
  //         <View style={{ marginBottom: 30, alignItems: 'center', width: '80%', alignSelf: 'center'}}>
  //           <Text type="body1">{item.question}</Text>
  //         </View>
  //         <View style={{ alignSelf: 'center', alignItems: 'center', width: '85%'}}>
  //         <Slider
  //           leftImage={Images.thumbsDownEmoji}
  //           rightImage={Images.thumbsUpEmoji}
  //           minValue={1}
  //           maxValue={5}
  //           step={1}
  //           value={name}
  //           onSlidingStart={value => handleSliderValue(item.key, value)}
  //           onSlidingComplete={value => handleSliderValue(item.key, value)}
  //         />
  //         </View>
  //         <View style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }} />
  //       </View>
  //     </View>
  //   );
  // };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            // testID={'txt-reflectingStep2-label'}
          >
            {feedbackReflecting.howDidyouDo}
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.provideInfo}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.provideInfo}
              onSlidingStart={value => handleSliderValue('provideInfo', value)}
              onSlidingComplete={value =>
                handleSliderValue('provideInfo', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.calmFeedback}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.calmFeedback}
              onSlidingStart={value => handleSliderValue('calmFeedback', value)}
              onSlidingComplete={value =>
                handleSliderValue('calmFeedback', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.listenToEmployee}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.listenToEmployee}
              onSlidingStart={value =>
                handleSliderValue('listenToEmployee', value)
              }
              onSlidingComplete={value =>
                handleSliderValue('listenToEmployee', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.gaveFeedbackSoon}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.gaveFeedbackSoon}
              onSlidingStart={value =>
                handleSliderValue('gaveFeedbackSoon', value)
              }
              onSlidingComplete={value =>
                handleSliderValue('gaveFeedbackSoon', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.establishRapport}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.establishRapport}
              onSlidingStart={value =>
                handleSliderValue('establishRapport', value)
              }
              onSlidingComplete={value =>
                handleSliderValue('establishRapport', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.clearlyStatePurpose}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.clearlyStatePurpose}
              onSlidingStart={value =>
                handleSliderValue('clearlyStatePurpose', value)
              }
              onSlidingComplete={value =>
                handleSliderValue('clearlyStatePurpose', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.involveEmployee}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.involveEmployee}
              onSlidingStart={value =>
                handleSliderValue('involveEmployee', value)
              }
              onSlidingComplete={value =>
                handleSliderValue('involveEmployee', value)
              }
            />
          </View>
          <View
            style={{ marginTop: 30, height: 2, backgroundColor: '#f5f5f5' }}
          />
        </View>
        <View style={{ marginTop: 30, marginBottom: 20 }}>
          <View
            style={{
              marginBottom: 30,
              alignItems: 'center',
              width: '80%',
              alignSelf: 'center',
            }}>
            <Text type="body1">{feedbackReflecting.documentAndSend}</Text>
          </View>
          <View
            style={{ alignSelf: 'center', alignItems: 'center', width: '85%' }}>
            <Slider
              leftImage={Images.thumbsDownEmoji}
              rightImage={Images.thumbsUpEmoji}
              minValue={1}
              maxValue={5}
              step={1}
              value={state.documentAndSend}
              onSlidingStart={value =>
                handleSliderValue('documentAndSend', value)
              }
              onSlidingComplete={value =>
                handleSliderValue('documentAndSend', value)
              }
            />
          </View>
        </View>
        <View style={containerStyles.btnContainer}>
          <Button mode="text" onPress={() => handleBack()}>
            Back
          </Button>
          <Button mode="contained" onPress={() => handleNext()}>
            Next
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default ReflectingStep2;

ReflectingStep2.propTypes = {};

ReflectingStep2.defaultProps = {};

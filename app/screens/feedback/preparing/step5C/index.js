import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep, getPrepStep5CData } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep5C = () => {
  const { checkOut } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep5CData);
  const [touchbaseDetails, setTouchbaseDetails] = useState([]);
  const [additionalTouchbase, setAdditionalTouchbase] = useState('');

  useEffect(() => {
    //if(stepData.data)
  }, [stepData]);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.updateFeedbackPreparing(
      {
      touchbaseDetails,
      additionalTouchbase
    }
    ));
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleTouchbaseText = text => setAdditionalTouchbase(text);

  const checkSelectedValue = item => {
    return touchbaseDetails.some(detail => detail === item);
  };

  const handleSelectedValue = item => {
    let newList = touchbaseDetails;
    if (checkSelectedValue(item))
      newList = newList.filter(touchBase => touchBase !== item);
    else newList = [...newList, item];
    setTouchbaseDetails(newList);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text
            type="h6"
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep5C-title'}>
            {checkOut.step}: {checkOut.title}
          </Text>
          <Text
            style="body1"
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep5C-description'}>
            {checkOut.checkoutDate}
          </Text>
        </View>
        <View style={{ height: 340 }}>
          <ButtonSelection
            type={'Check'}
            title={checkOut.checkoutTouchbase}
            selected={checkSelectedValue(checkOut.checkoutTouchbase)}
            onPress={() => handleSelectedValue(checkOut.checkoutTouchbase)}
            testID={'btn-preparingStep5C-detail'}
            style={{ height: 120 }}
          />
          <TextInput
            label={labels.common.inputHint}
            placeholder={labels.common.inputHint}
            testID={'input-preparingStep5C-somethingElse'}
            onChangeText={text => handleTouchbaseText(text)}
            value={additionalTouchbase}
          />
        </View>
      </KeyboardAvoidingView>

      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep5C-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep5C-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep5C;

PreparingStep5C.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep5C.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};

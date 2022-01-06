import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep, getPrepStep5BData } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep5B = () => {
  const { checkOut } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep5BData);
  const [acknowledgeDetails, setAcknowledgeDetails] = useState();
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    // if(stepData.data)
  },[stepData]);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    // dispatch(PreparingActions.setPreparingData())
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const checkSelectedValue = item => {
    return acknowledgeDetails.some(detail => detail == item);
  }

  const handleSelectedValue = item => {
    let newList = acknowledgeDetails;
    if(checkSelectedValue(item))
      newList = newList.filter(newDetail => newDetail.id !== item.id);
    else newList = [...newList, item];
    setAcknowledgeDetails(newList);
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text 
            type="h6" 
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep5B-title'}  
          >
            {checkOut.step}: {checkOut.title}
          </Text>
          <Text 
            style="body1" 
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep5B-description'}
          >
            {checkOut.checkoutAcknowledge}
          </Text>
        </View>
        <ButtonSelection
          type={'Check'}
          title={checkOut.checkoutInput}
          selected={checkSelectedValue()}
          onPress={() => handleSelectedValue()}
          testID={'btn-preparingStep5B-detail'}
        />
        <TextInput
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint}
          testID={'input-preparingStep5B-somethingElse'}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
      <Button
          mode='text'
          onPress={() => handleBack()}
          testID={'btn-preparingStep5B-back'}
        >
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep5B-next'}
        >
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep5B;

PreparingStep5B.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object
};

PreparingStep5B.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};

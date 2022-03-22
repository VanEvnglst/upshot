import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getPreparingStep, getPrepStep5Data } from 'app/store/selectors';
import { preparingCheckout } from 'app/models/PreparingModel';
import { Text, ButtonSelection, TextInput } from 'app/components';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep5 = () => {
  const { checkOut } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep5Data);
  const [checkoutQuestions, setCheckoutDetails] = useState([]);
  const [additionalCheckout, setAdditionalCheckout] = useState('');

  useEffect(() => {
    if(stepData.data)
    if(typeof stepData.data.checkoutQuestions === 'string') {
      const dataArr = stepData.data.checkoutQuestions.split(",");
      setCheckoutDetails(dataArr);
    } else {
      setCheckoutDetails(stepData.data.checkoutQuestions);
    }
  }, [stepData]);


  const handleData = () => {
    dispatch(
      PreparingActions.setPreparingData('step5', {
        checkoutQuestions,
        additionalCheckout,
      }),
    );
  }

  const handleBack = () => {
    handleData();
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    handleData();
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleAddtionalCheckout = text => setAdditionalCheckout(text);

  const checkSelectedValue = item => {
    return checkoutQuestions.some(value => value === item.title);
  };

  const handleSelectedValue = item => {
    let newDetailsList = checkoutQuestions;
    if (checkSelectedValue(item))
      newDetailsList = newDetailsList.filter(
        newDetail => newDetail !== item.title,
      );
    else newDetailsList = [...newDetailsList, item.title];
    setCheckoutDetails(newDetailsList);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text type="h6" style={containerStyles.stepTitleText}>
            {checkOut.step}: {checkOut.title}
          </Text>
          <Text style="body1" style={containerStyles.stepDescriptionText}>
            {checkOut.content}
          </Text>
        </View>
        {preparingCheckout.map((item, i) => (
          <ButtonSelection
            key={item.id}
            type={'Check'}
            title={item.title}
            onPress={() => handleSelectedValue(item)}
            selected={checkSelectedValue(item)}
            testID={'btn-preparingStep5-detail'}
          />
        ))}
        <TextInput
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint}
          style={{ marginTop: 15 }}
          testID={'input-preparingStep5-somethingElse'}
          onChangeText={text => handleAddtionalCheckout(text)}
          value={additionalCheckout}
          description={labels.common.ownQuestionDesc}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep5-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={'contained'}
          testID={'btn-preparingStep5-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep5;

PreparingStep5.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep5.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};

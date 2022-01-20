import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep, getPrepStep3BData } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import { preparingObservations } from 'app/models/PreparingModel';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep3B = () => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const stepData = useSelector(getPrepStep3BData);
  const [observationList, setObservations] = useState([]);
  const [additionalObservation, setAdditionalObservation] = useState('');

  useEffect(() => {
    if(stepData.data) {
    const dataArr = stepData.data.split(',');
    const dataList = [];
    dataArr.forEach((item, i) => 
      dataList.push({
        id: i + 1,
        title: item,
      })),
      setObservations(dataList)
    }    
  }, [stepData]);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(
      PreparingActions.setPreparingData('step3B', {
        observationList,
        additionalObservation,
      }),
    );
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleObservationText = text => {
    setAdditionalObservation(text);
  };

  const handleSelectedObservation = item => {
    let newList = observationList;
    if (checkSelectedObservation(item))
      newList = newList.filter(newObservation => newObservation.id !== item.id);
    else 
      newList  = [...newList, item.title]
    setObservations(newList);
  };

  const checkSelectedObservation = item => {
    return observationList.some(observation => observation === item.title);
  };

  return (
    <View style={containerStyles.container}>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={containerStyles.descriptionContainer}>
            <Text
              type="h6"
              style={containerStyles.stepTitleText}
              testID={'txt-preparingStep3B-title'}>
              {describeDiscuss.step}: {describeDiscuss.title}
            </Text>
            <Text
              type="body1"
              style={containerStyles.stepDescriptionText}
              testID={'txt-preparingStep3B-question'}>
              {describeDiscuss.observationQuestion}
            </Text>
          </View>
          <View style={{ marginBottom: 40 }}>
            {preparingObservations.map((item, i) => (
              <ButtonSelection
                key={item.id}
                testID={'btn-preparingStep3B-observation'}
                title={item.title}
                type={'Check'}
                onPress={() => handleSelectedObservation(item)}
                selected={checkSelectedObservation(item)}
              />
            ))}
            <TextInput
              label={labels.common.inputHint}
              placeholder={labels.common.inputHint}
              style={{ marginTop: 15 }}
              testID={'input-preparingStep3B-additional'}
              onChangeText={text => handleObservationText(text)}
              value={additionalObservation}
            />
          </View>
        </KeyboardAvoidingView>
        <View style={containerStyles.btnContainer}>
          <Button
            mode="text"
            onPress={() => handleBack()}
            testID={'btn-preparingStep3B-back'}>
            {labels.common.back}
          </Button>
          <Button
            onPress={() => handleNext()}
            mode={'contained'}
            testID={'btn-preparingStep3B-next'}>
            {labels.common.next}
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default PreparingStep3B;

PreparingStep3B.propTypes = {
  setPrepActiveStep: PropTypes.func,
  setPreparingData: PropTypes.func,
  activeStep: PropTypes.number,
  stepData: PropTypes.object,
};

PreparingStep3B.defaultProps = {
  setPrepActiveStep: () => {},
  setPreparingData: () => {},
  activeStep: 1,
  stepData: {},
};

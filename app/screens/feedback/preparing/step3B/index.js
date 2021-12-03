import React, { useState } from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { getPreparingStep } from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import preparingObservations from 'app/models/PreparingObservations';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep3B = () => {
  const { describeDiscuss } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  //TODO: useSelector for stepData
  const [observationList, setObservations] = useState([]);
  const [additionalObservation, setAdditionalObservation] = useState();
  const [isCompleted, setCompletion] = useState(false);

  //TODO: handle stepData

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    //TODO: saving of data
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleSelectedObservation = item => {
    let newList = observationList;
    if (checkSelectedObservation(item))
      newList = newList.filter(newObservation => newObservation.id !== item.id);
    else newList = [...newList, item];
    setObservations(newList);

    if (newList.length !== 0) setCompletion(true);
    else setCompletion(false);
  };

  const checkSelectedObservation = item => {
    // if ()
  };

  return (
    <View style={containerStyles.container}>
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
        />
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
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep3B-next'}>
          {labels.common.next}
        </Button>
      </View>
    </View>
  );
};

export default PreparingStep3B;

PreparingStep3B.propTypes = {
  setPrepActiveStep: PropTypes.func,
  activeStep: PropTypes.number,
};

PreparingStep3B.defaultProps = {
  setPrepActiveStep: () => {},
  activeStep: 1,
};

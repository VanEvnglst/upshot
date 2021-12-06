import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { 
  getPreparingStep,
  getPreparingStep4BData
} from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import preparingSuggestions from 'app/models/PreparingModel';
import labels from 'app/locales/en';
import containerStyles from '../styles';

const PreparingStep4B = () => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  // stepData = useSelector(getPreparingStep4BData)
  const [suggestionList, setSuggestionList] = useState([]);
  const [additionalSuggestion, setAdditionalSuggestion] = useState();
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    //TODO: if(stepData.data)
  },[])

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text 
            type="h6" 
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep4B-title'}
          >
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text 
            type="body1" 
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep4B-content'}
          >
            {createActionPlan.getSuggestions}
          </Text>
        </View>
        {preapringSuggestions.map((item, i) => (
          <ButtonSelection
            key={item.id}
            testID={'btn-preparingStep4B-action'}
            type={'Check'}
            title={item.title}
            onPress={() => handleSelectedSuggestion(item)}
            selected={checkSelectedSuggestion(item)}
          />
        ))}
        {/* <ButtonSelection
          type={'Check'}
          title={createActionPlan.suggestionOption1}
        />
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.suggestionOption2}
        />
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.suggestionOption3}
        /> */}
        <TextInput 
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint} 
          style={{ marginTop: 15 }}
          testID={'input-preparingStep4B-additional'}
        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep4B-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep4B-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep4B;

PreparingStep4B.propTypes = {
  setPrepActiveStep: PropTypes.func,
  activeStep: PropTypes.number,
};

PreparingStep4B.defaultProps = {
  setPrepActiveStep: () => {},
  activeStep: 1
};

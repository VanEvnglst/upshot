import React, { useState } from 'react';
import { View, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { 
  getPreparingStep,
  //getPreparingStep4Data
} from 'app/store/selectors';
import { Text, ButtonSelection, TextInput } from 'app/components';
import preparingActionPlan from 'app/models/PreparingModel';
import containerStyles from '../styles';
import labels from 'app/locales/en';

const PreparingStep4 = 
() => {
  const { createActionPlan } = labels.feedbackPreparing;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  // stepData = useSelector(getPreparingStep4Data)
  const [actionPlanList, setActionPlanList] = useState([]);
  const [additionalPlan, setAdditionalPlan] = useState();
  const [isCompleted, setCompletion] = useState(false);

  useEffect(() => {
    //if(stepData.data)
  },[]);

  const handleBack = () => {
    dispatch(PreparingActions.setPrepActiveStep(activeStep - 1));
  };

  const handleNext = () => {
    //TODO: dispatch(PreparingActions.setPreparingData());
    dispatch(PreparingActions.setPrepActiveStep(activeStep + 1));
  };

  const handleSelectedActionPlan = item => {
    let newList = actionPlanList;
    if (checkSelectedActionPlan(item))
      newList = newList.filter(newAction => newAction.id !== item.id);
    else newList = [...newList, item];
    setActionPlanList(newList);

    if (newList.length !== 0) setCompletion(true);
    else setCompletion(false);
  };

  const checkSelectedActionPlan = item => {
    // if ()
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <KeyboardAvoidingView>
        <View style={containerStyles.descriptionContainer}>
          <Text 
            type="h6" 
            style={containerStyles.stepTitleText}
            testID={'txt-preparingStep4-title'}
          >
            {createActionPlan.step}: {createActionPlan.title}
          </Text>
          <Text 
            type="body1" 
            style={containerStyles.stepDescriptionText}
            testID={'txt-preparingStep4-description'}  
          >
            {createActionPlan.content}
          </Text>
        </View>
        {preparingActionPlan.map((item, i) => (
          <ButtonSelection
            key={item.id}
            testID={'btn-preparingStep4-action'}
            type={'Check'}
            title={item.title}
            onPress={() => handleSelectedActionPlan(item)}
            selected={checkSelectedActionPlan(item)}
          />
        ))}
        {/* <ButtonSelection
          type={'Check'}
          title={createActionPlan.brainstormOption1}
        />
        <ButtonSelection
          type={'Check'}
          title={createActionPlan.brainstormOption2}
        /> */}
        <TextInput 
          label={labels.common.inputHint}
          placeholder={labels.common.inputHint} 
          style={{ marginTop: 15 }}
          testID={'input-preparingStep4-additional'}

        />
      </KeyboardAvoidingView>
      <View style={containerStyles.btnContainer}>
        <Button
          mode="text"
          onPress={() => handleBack()}
          testID={'btn-preparingStep4-back'}>
          {labels.common.back}
        </Button>
        <Button
          onPress={() => handleNext()}
          mode={isCompleted ? 'contained' : 'text'}
          testID={'btn-preparingStep4-next'}>
          {labels.common.next}
        </Button>
      </View>
    </ScrollView>
  );
};

export default PreparingStep4;

PreparingStep4.propTypes = {
  setPrepActiveStep: PropTypes.func,
  activeStep: PropTypes.number,
};

PreparingStep4.defaultProps = {
  setPrepActiveStep: () => {},
  activeStep: 1
};

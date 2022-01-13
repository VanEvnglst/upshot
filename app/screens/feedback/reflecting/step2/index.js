import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Slider } from 'app/components';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import { getReflectingStep } from 'app/store/selectors';
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
  const [state, setState] = useState({});

  const handleBack = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep - 1));
  };
  const handleNext = () => {
    dispatch(ReflectingActions.setReflectingActiveStep(activeStep + 1));
  };

  const QuestionForm = item => {
    return (
      <View>
        <View style={{ marginTop: 30 }}>
          <View>
            <Text type="body1">{item.item.question}</Text>
          </View>
          <Slider />
          <View style={{ height: 2, backgroundColor: '#f5f5f5' }} />
        </View>
      </View>
    );
  };

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
        {reflectingQuestions.map((item, index) => (<QuestionForm
            item={item}
            key={item.id}
          />))}
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

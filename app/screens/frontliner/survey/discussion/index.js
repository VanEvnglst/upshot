import React, { useState, useEffect } from 'react';
import { View, Animated } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, ButtonSelection, HintIndicator } from 'app/components';
import labels from 'app/locales/en';
import styles from './styles';


const SurveyDiscussion = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const options = [
    {
      id: 1,
      title: "Yes, we've had our discussion"
    },
    {
      id: 2,
      title: "No, it hasn't happened yet",
    }
  ];
  const [response, setResponse] = useState({
    id: null,
    title: '',
  });
  const [completed, setCompleted] = useState(false);
  const [hint, showHint] = useState(false);

  const handleSelection = item => {
    setResponse(item);
    setCompleted(true);
  }

  const proceedToNextStep = () => {
    // if no navigate to error screen
    navigation.navigate('FrontlinerSurvey');
  }

  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <View style={styles.contentContainer}>
        <Text type='h6' style={styles.labelPadding}>Did you have your discussion....</Text>
        <ButtonSelection
          title={options[0].title}
          type={'Radio'}
          onPress={() => handleSelection(options[0])}
          selected={response.id === options[0].id}
        />
        <ButtonSelection
          title={options[1].title}
          type={'Radio'}
          onPress={() => handleSelection(options[1])}
          selected={response.id === options[1].id}
        />
        <HintIndicator
          showHint={hint}
          onPress={() => showHint(!hint)}
        />
      </View>
      {/* TODO: Add animated view to the hint  */}
      <View style={styles.btnContainer}>
        <Button
          style={[styles.button, !completed ? styles.disabledBtn : styles.enabledBtn]}
          onPress={() => proceedToNextStep()}
          mode='contained'
          disabled={!completed}
        >
          <Text
            type='button'
            style={!completed ? styles.disabledText : styles.btnText}>
              {labels.common.continue}
            </Text>
        </Button>
      </View>
    </Wrapper>
  );
};


export default SurveyDiscussion;

SurveyDiscussion.propTypes = {};

SurveyDiscussion.defaultProps = {};
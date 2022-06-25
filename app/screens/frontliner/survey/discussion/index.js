import React, { useState, useEffect } from 'react';
import { View, Animated, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Header,
  Text,
  ButtonSelection,
  HintIndicator,
} from 'app/components';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getManagerName } from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const SurveyDiscussion = props => {
  const { navigation, route } = props;
  const { message } = route.params;
  const dispatch = useDispatch();
  const managerName = useSelector(getManagerName);
  const options = [
    {
      id: 1,
      title: "Yes, we've had our discussion",
    },
    {
      id: 2,
      title: "No, it hasn't happened yet",
    },
  ];
  const schedPosOptions = [
    {
      id: 1,
      title: "Yes, I read the feedback",
    },
    {
      id: 2,
      title: "No, I haven't seen the message yet",
    }
  ]
  const [response, setResponse] = useState({
    id: null,
    title: '',
  });
  const [completed, setCompleted] = useState(false);
  const [hint, showHint] = useState(false);
  const formatDate = moment(message.incident_date).format('LLLL');
  const dateArr = formatDate.split(',');

  useEffect(() => {
    dispatch(SurveyActions.setDRSurveyStatus('journeyId', message.journey_id));
  }, []);

  const handleContent = () => {
    if (message.pos_or_cor.id === 1)
      return <ScheduledPositiveContent />;
    else
      return <ScheduledCorrectiveContent />;
  }
  const handleSelection = item => {
    setResponse(item);
    setCompleted(true);
  };

  console.log(message);
  const proceedToNextStep = () => {
    if (response.id === 2) {
      if(message.pos_or_cor.id === 2) { 
        const payload = {
          id: message.journey_id,
        }
        dispatch(SurveyActions.postSurveyInvalid(payload));
      }
    }
    else navigation.navigate('SurveyGuide');
  };


  const ScheduledCorrectiveContent = () => {
    return(
      <>
      <View style={styles.contentContainer}>
      <Text type="h6" style={styles.labelPadding}>
          Did you have your discussion with {managerName}?
        </Text>
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
        <HintIndicator showHint={hint} onPress={() => showHint(!hint)} />
      </View>
      {hint && (
        <View style={styles.hintCard}>
          <Image source={Images.surveyHint} resizeMode="contain" />
          <Text type="body2" style={styles.hintCardText}>This discussion was scheduled for {dateArr[0]}, {dateArr[1]}.</Text>
          <Text type='body2' style={styles.hintCardText}>
            It was about {message.feedback_topics[0]}
          </Text>
        </View>
      )}
      </>
    )
  }

  const ScheduledPositiveContent = () => {
    return (
      <>
       <View style={styles.contentContainer}>
      <Text type="h6" style={styles.labelPadding}>
         Have you read your positive feedback from {managerName}?
        </Text>
        <ButtonSelection
          title={schedPosOptions[0].title}
          type={'Radio'}
          onPress={() => handleSelection(schedPosOptions[0])}
          selected={response.id === schedPosOptions[0].id}
        />
        <ButtonSelection
          title={schedPosOptions[1].title}
          type={'Radio'}
          onPress={() => handleSelection(schedPosOptions[1])}
          selected={response.id === schedPosOptions[1].id}
        />
        <HintIndicator showHint={hint} onPress={() => showHint(!hint)} />
      </View>
      {hint && (
        <View style={styles.hintCard}>
          <Image source={Images.surveyHint} resizeMode="contain" />
          <Text type="body2" style={styles.hintCardText}>Positive feedback was sent to your inbox on  </Text>
        </View>
      )}
      </>

    );
  }
  
  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      {handleContent()}
      <View style={styles.btnContainer}>
        <Button
          style={[
            styles.button,
            !completed ? styles.disabledBtn : styles.enabledBtn,
          ]}
          onPress={() => proceedToNextStep()}
          mode="contained"
          disabled={!completed}>
          <Text
            type="button"
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

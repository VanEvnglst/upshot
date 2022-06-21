import React, { useState, useEffect } from 'react';
import { View, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import { getDiscussingId } from 'app/store/selectors';
import {  Text, Wrapper, Header, TextInput } from 'app/components';
import { DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import styles from './styles';

const ActionPlanScreen = props => {
  const { discussingActionPlan } = labels.feedbackDiscussing;
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeDiscussing = useSelector(getDiscussingId);
  const [actionPlan, setActionPlan] = useState({
    specificAction: '',
    whenWillItHappen: '',
    whoWillMakeIt: '',
  });

  const [actionPlanList, setActionPlanList] = useState([]);

  const handleBack = () => {
   navigation.navigate('DiscussingMeeting', {
     type: 'actionPlan',
   });
  };

  const handleNext = () => {
    let planList = [];
    planList.push(actionPlan);
    const discussingData = {
      discussing_id: activeDiscussing,
      plans: planList,
      shouldClose: true
    }
    dispatch(DiscussingActions.updateFeedbackDiscussing(discussingData));
  }

  const handleClose = () => {
    let planList = [];
    planList.push(actionPlan);

    const discussingData = {
      discussing_id: activeDiscussing,
      plans: planList,
      shouldClose: false,
    }
    dispatch(DiscussingActions.setDiscussingStatus('data', actionPlan));
    dispatch(DiscussingActions.updateFeedbackDiscussing(discussingData));
  }

  const handleTextChange = (key, text, index) => {
    setActionPlan(prevState => ({
      ...prevState,
      [key]: text
    }));
  }


  const ActionPlanItem = ({ item, index }) => {
    return (
      <View style={styles.actionPlanContainer}>
        <TextInput
          label={discussingActionPlan.specificAction}
          placeholder={discussingActionPlan.specificAction}
          value={actionPlan.specificAction}
          onChangeText={text => handleTextChange('specificAction', text, index)}
          style={styles.inputSpacer}
        />
        <TextInput
          label={discussingActionPlan.whenWillThisHappen}
          placeholder={discussingActionPlan.whenWillThisHappen}
          value={actionPlan.whenWillItHappen}
          onChangeText={text => handleTextChange('whenWillItHappen', text, index)}
          style={styles.inputSpacer}
        />
        <TextInput
          label={discussingActionPlan.whoWillMakeIt}
          placeholder={discussingActionPlan.whoWillMakeIt}
          value={actionPlan.whoWillMakeIt}
          onChangeText={text => handleTextChange('whoWillMakeIt', text, index)}
          style={styles.inputSpacer}
        />
      </View>
    )
  }


  return (
    <KeyboardAvoidingView
      behavior={DeviceUtil.isIos() ? 'padding' : null}
      style={styles.container}
    >
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => handleClose(),
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps='handled'
        >
          <Text 
            type='overline'
            style={styles.overlineText}
          >{labels.feedbackSignPost.discussing}</Text>
          <View>
          <Text 
            type='h6'
            style={styles.titleText}
          >{discussingActionPlan.title}</Text>
          <Text
            type='body1'
          >{discussingActionPlan.description}</Text>
          </View>
          <View style={{ marginTop: 30}}>
          <TextInput
          label={discussingActionPlan.specificAction}
          placeholder={discussingActionPlan.specificAction}
          value={actionPlan.specificAction}
          onChangeText={text => handleTextChange('specificAction', text, index)}
          style={styles.inputSpacer}
        />
        <TextInput
          label={discussingActionPlan.whenWillThisHappen}
          placeholder={discussingActionPlan.whenWillThisHappen}
          value={actionPlan.whenWillItHappen}
          onChangeText={text => handleTextChange('whenWillItHappen', text, index)}
          style={styles.inputSpacer}
        />
        <TextInput
          label={discussingActionPlan.whoWillMakeIt}
          placeholder={discussingActionPlan.whoWillMakeIt}
          value={actionPlan.whoWillMakeIt}
          onChangeText={text => handleTextChange('whoWillMakeIt', text, index)}
          style={styles.inputSpacer}
        />
          </View>
        </ScrollView>
        <View
          style={styles.btnContainer}>
            <Button
              mode='text'
              onPress={() => handleBack()}
              >{labels.common.back}</Button>
            <Button
              mode='contained'
              onPress={() => handleNext()}
            >Send</Button>
          </View>
      </Wrapper>
    </KeyboardAvoidingView>
  )
}

export default ActionPlanScreen;

ActionPlanScreen.propTypes = {};

ActionPlanScreen.defaultProps = {};
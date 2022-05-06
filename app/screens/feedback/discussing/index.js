import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import { Text, Wrapper, Header, TextInput } from 'app/components';
import { DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackDiscussing = props => {
  const { discussingActionPlan } = labels.feedbackDiscussing;
  const { navigation } = props;
  const dispatch = useDispatch();
  const [actionPlan, setActionPlan] = useState({
    specificAction: '',
    whenWillItHappen: '',
    whoWillMakeIt: '',
  });
  const [actionPlanList, setActionPlanList] = useState([]);

  // console.warn('woop', actionPlanList);
  const handleBack = () => {
    navigation.navigate('DiscussingMeeting', {
      type: 'actionPlan',
    });
  };

  const handleNext = () => {
    dispatch(DiscussingActions.updateFeedbackDiscussing(actionPlan));
  };

  const handleClose = () => {
    // dispatch(DiscusssingActions.update());
  }

  const handleTextChange = (key, text, index) => {
    setActionPlan(prevState => ({
      ...prevState,
      [key]: text,
    }));

    // let planList = [...actionPlanList];
    // let oldItem = planList[index];
    // planList[index] = { ...oldItem, [key]: text };
    //setActionPlan(planList[index]);
      // setActionPlanList(planList);
    // object
    // setActionPlanList(prevState => ({
    //   ...prevState,
    //   [index]: {
    //     ...oldItem,
    //     [key]: text,
    //   }
    // }));
  };

  const handleList = item => {
    // let planList = [...actionPlanList];
    // let oldItem = planList[index];
    // planList[index] = { ...oldItem, [key]: text };
    setActionPlanList(planList);
  };

  const addAnotherItem = () => {
    // setActionPlan(...actionPlanList, actionPlan);
    // const newList = [...actionPlanList, actionPlan];
    // setActionPlanList(newList);
  };

  const ActionPlan = ({ item, index }) => {
    return (
      <View style={styles.actionPlanContainer}>
        <TextInput
          label={discussingActionPlan.specificAction}
          placeholder={discussingActionPlan.specificAction}
          value={actionPlan.specificAction}
          onChangeText={text => handleTextChange('specificAction', text, index)}
          style={styles.inputSpacer}
          // onBlur={text => {
          //   handleList(actionPlanList[index].specificAction);
          //   setActionPlan(defaultState);
          // }}
        />
        <TextInput
          label={discussingActionPlan.whenWillThisHappen}
          placeholder={discussingActionPlan.whenWillThisHappen}
          value={actionPlan.whenWillItHappen}
          // actionPlanist[index]
          onChangeText={text =>
            handleTextChange('whenWillItHappen', text, index)
          }
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
    );
  };

  const renderPlanList = () => {
    return (
      <View>
        {actionPlanList.map((item, i) => (
          <ActionPlan item={item} index={i} />
        ))}
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
    behavior={DeviceUtil.isIos ? 'padding' : null}
    style={styles.container}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => handleClose(),
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          
            <Text type="overline" style={styles.overlineText}>{labels.feedbackSignPost.discussing}</Text>
            <View>
              <Text type="h6" style={styles.titleText}>{discussingActionPlan.title}</Text>
              <Text type="body1">{discussingActionPlan.description}</Text>
            </View>
            <View style={{ marginTop: 30 }}>
        <TextInput
          label={discussingActionPlan.specificAction}
          placeholder={discussingActionPlan.specificAction}
          value={actionPlan.specificAction}
          onChangeText={text => handleTextChange('specificAction', text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label={discussingActionPlan.whenWillThisHappen}
          placeholder={discussingActionPlan.whenWillThisHappen}
          value={actionPlan.whenWillItHappen}
          onChangeText={text => handleTextChange('whenWillItHappen', text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label={discussingActionPlan.whoWillMakeIt}
          placeholder={discussingActionPlan.whoWillMakeIt}
          value={actionPlan.whoWillMakeIt}
          onChangeText={text => handleTextChange('whoWillMakeIt', text)}
          style={{ marginBottom: 20 }}
        />
      </View>
            {/* <FlatList
          bounces={false}
          data={actionPlanList}
          showsVerticalScrollIndicator={false}
          // keyExtractor={item => item.id}
          renderItem={({ item, index}) => {
            return (
              <ActionPlan
                item={item}
              />
            )
          }}
        /> */}
            {/* {actionPlanList.map((item, i) => (
              <ActionPlan item={item} index={i} />
            ))} */}
            {/* {renderPlanList()} */}
            {/* <View>
              <Button
                mode="contained"
                style={styles.addItemButton}
                onPress={() => addAnotherItem()}>
                <Text type="button" style={styles.addItemText}>
                  Add another item
                </Text>
              </Button>
            </View> */}
        </ScrollView>
        <View
          style={styles.btnContainer}>
          <Button mode="text" onPress={() => handleBack()}>
            <Text type="button">{labels.common.back}</Text>
          </Button>
          <Button mode="contained" onPress={() => handleNext()}>
            <Text type="button">Send</Text>
          </Button>
        </View>
      </Wrapper>
    </KeyboardAvoidingView>
  );
};

export default FeedbackDiscussing;

FeedbackDiscussing.propTypes = {};

FeedbackDiscussing.defaultProps = {};

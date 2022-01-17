import React, { useState } from 'react';
import { View, FlatList, KeyboardAvoidingView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import { Text, Wrapper, Header, TextInput } from 'app/components';
import labels from 'app/locales/en';

const FeedbackDiscussing = props => {
  const { discussingActionPlan } = labels.feedbackDiscussing;
  const { navigation } = props;
  const dispatch = useDispatch();
  const [actionPlan, setActionPlan] = useState({
    specificAction: '',
    whenWillItHappen: '',
    whoWillMakeIt: '',
  });
  const [actionPlanList, setActionPlanList] = useState([actionPlan]);

  const handleBack = () => {
    navigation.navigate('DiscussingMeeting', {
      type: 'actionPlan',
    });
  };

  const handleNext = () => {
    dispatch(DiscussingActions.updateFeedbackDiscussing(actionPlan));
  };

  const handleTextChange = (key, text) => {
    setActionPlan(prevState => ({
      ...prevState,
      [key]: text,
    }));
  };

  const addAnotherItem = () => {
    actionPlanList.push(actionPlan)
  };

  const ActionPlan = ({ item, index }) => {
    return (
      <View style={{ marginTop: 30 }}>
        <TextInput
          label={discussingActionPlan.specificAction}
          placeholder={discussingActionPlan.specificAction}
          value={item.specificAction}
          onChangeText={text => handleTextChange('specificAction', text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label={discussingActionPlan.whenWillThisHappen}
          placeholder={discussingActionPlan.whenWillThisHappen}
          value={item.whenWillItHappen}
          onChangeText={text => handleTextChange('whenWillItHappen', text)}
          style={{ marginBottom: 20 }}
        />
        <TextInput
          label={discussingActionPlan.whoWillMakeIt}
          placeholder={discussingActionPlan.whoWillMakeIt}
          value={item.whoWillMakeIt}
          onChangeText={text => handleTextChange('whoWillMakeIt', text)}
          style={{ marginBottom: 20 }}
        />
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => console.log(),
          }}
        />
        <KeyboardAvoidingView>
        <Text type="overline">Discussing</Text>
        <View>
          <Text type="h6">{discussingActionPlan.title}</Text>
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
          <ActionPlan
            key={i}
            item={item}
            index={i}
          />
        ))} */}
        <View>
          <Button
            mode="contained"
            style={{
              borderWidth: 0.5,
              height: 55,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}
            onPress={() => addAnotherItem()}
          >
            <Text type="button" style={{ color: '#000000' }}>
              Add another item
            </Text>
          </Button>
        </View>
        </KeyboardAvoidingView>
        <View
          style={{
            marginBottom: 30,
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            flex: 1,
            flexDirection: 'row',
          }}>
          <Button mode="text" onPress={() => handleBack()}>
            <Text type="button">Back</Text>
          </Button>
          <Button mode="contained" onPress={() => handleNext()}>
            <Text type="button">Next</Text>
          </Button>
        </View>
      </Wrapper>
    </View>
  );
};

export default FeedbackDiscussing;

FeedbackDiscussing.propTypes = {};

FeedbackDiscussing.defaultProps = {};

import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FAB as FloatingAction } from 'react-native-paper';
import { Wrapper, Text, Header, SignPostIndicator } from 'app/components';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import { getChosenFlow } from 'app/store/selectors';
import feedbackJourneySteps from 'app/models/FeedbackJourney';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, common } = labels;
  const dispatch = useDispatch();
  const flow = useSelector(getChosenFlow);
  const [signPost, setSignPost] = useState([]);

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = async () => {
    let content = [];
    if (flow.id === 1) {
      content = feedbackJourneySteps;
    } else {
      content = feedbackJourneySteps.filter(item => item.forOnTheSpot === true);
    }
    await setSignPost(content);
  };

  const handleNavigation = () => {
    dispatch(DocumentingActions.resetDocumentingState());
    navigation.navigate('FeedbackDocumenting');
  };
  return (
    <Wrapper>
      <ScrollView showsVerticalScrollIndicator={false} bouces={false}>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        <View style={styles.container}>
          <Text type="h4" style={[styles.textTitle, styles.mediumTextStyle]}>
            {feedbackSignPost.title}
          </Text>
          <Text
            type="body1"
            style={[styles.contentDescription, styles.mediumTextStyle]}>
            {feedbackSignPost.description}
          </Text>
        </View>
        <View style={styles.signPostContainer}>
          {signPost.map((item, i) => {
            return (
              // TODO: Make separate component
              <View style={styles.contentContainer} key={item.id}>
                <SignPostIndicator isLastItem={i === signPost.length - 1} />
                <View style={styles.textContainer}>
                  <Text type="subtitle1" style={styles.mediumTextStyle}>
                    {item.title}
                  </Text>
                  <Text
                    type="body2"
                    style={[styles.lightTextStyle, styles.guideText]}>
                    {item.description}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
      <FloatingAction
        label={common.start}
        icon="play"
        style={styles.fabStyle}
        uppercase
        onPress={() => handleNavigation()}
      />
    </Wrapper>
  );
};

export default FeedbackGuide;

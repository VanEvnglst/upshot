import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { FAB as FloatingAction } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Wrapper, Text, Header, SignPostIndicator } from 'app/components';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import { getChosenFlow, getChosenType } from 'app/store/selectors';
import scheduledCorrectiveSteps from 'app/models/ScheduledCorrectiveSteps';
import scheduledPositiveSteps from 'app/models/ScheduledPositiveSteps';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, common } = labels;
  const dispatch = useDispatch();
  const flow = useSelector(getChosenFlow);
  const type = useSelector(getChosenType);
  const [signPost, setSignPost] = useState([]);
  const [signPostHeader, setSignPostHeader] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    let content = [];
    if (flow.id === 1) {
      if (type.id === 1) {
        content = scheduledPositiveSteps;
        setSignPostHeader({
          title: feedbackSignPost.scheduledPos,
        });
      } else {
        content = scheduledCorrectiveSteps;
        setSignPostHeader({
          title: feedbackSignPost.scheduledCorr,
        })
      }
    } else {
      // setSignPostHeader({
      //   title: feedbackSignPost.onTheSpotTitle,
      // });
      // content = onTheSpotSteps;
    }
    setSignPost(content);
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
            {signPostHeader.title}
          </Text>
          {/* <Text
            type="body1"
            style={[styles.contentDescription, styles.mediumTextStyle]}>
            {signPostHeader.description}
          </Text> */}
        </View>
        <View style={styles.signPostContainer}>
          {signPost.map((item, i) => {
            return (
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

FeedbackGuide.propTypes = {
  flow: PropTypes.object,
  type: PropTypes.object,
  resetDocumentingState: PropTypes.func,
};

FeedbackGuide.defaultProps = {
  flow: {},
  type: {},
  resetDocumentingState: () => {},
};
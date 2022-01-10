import React from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import PreparingActions from 'app/store/feedback/preparingRedux';
import { Wrapper, Text, Header, SignPostIndicator } from 'app/components';
import labels from 'app/locales/en';
import preparingGuide from 'app/models/PreparingGuide';
import styles from './styles';

const PreparingGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, feedbackPreparing } = labels;
  const dispatch = useDispatch();
  const journeyId = useSelector(
    state => state.feedback.get('currentJourney').data,
  );
  const preparingId = useSelector(state => state.preparing.get('id'));


  const SignPost = ({ item, isLastItem }) => {
    return (
      <View style={{ flexDirection: 'row' }}>
        <SignPostIndicator isLastItem={isLastItem} image={item.image} />
        <View style={styles.contentStyle}>
          <Text type="overline" style={styles.stepText}>
            {item.step}
          </Text>
          <Text type="body2" style={styles.textTitle}>
            {item.content}
          </Text>
        </View>
      </View>
    );
  };

  const handleNavigation = () => {
    dispatch(PreparingActions.resetPreparingState());
    dispatch(PreparingActions.postFeedbackPreparing(journeyId));
  };

  return (
    <Wrapper>
      <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Text type="h4" style={styles.headerText}>
          {feedbackSignPost.preparing}
        </Text>
        <View style={styles.descriptionContainer}>
          <Text type="body1" style={styles.descStyle}>
            {feedbackPreparing.prepareDesc}
          </Text>
          <Text type="body1" style={styles.guideStyle}>
            {feedbackPreparing.fiveStepGuide}
          </Text>
        </View>
        <View style={styles.listStyle}>
          {preparingGuide.map((item, i) => {
            return (
              <SignPost
                key={i}
                item={item}
                isLastItem={i === preparingGuide.length - 1}
              />
            );
          })}
        </View>
        <View style={styles.btnContainer}>
          <Button
            style={styles.button}
            onPress={() => handleNavigation()}
            mode="contained">
            <Text type="button" style={styles.btnText}>
              {labels.common.start}
            </Text>
          </Button>
        </View>
      </ScrollView>
    </Wrapper>
  );
};

export default PreparingGuide;

PreparingGuide.propTypes = {
  preparingGuide: PropTypes.array,
};

PreparingGuide.defaultProps = {
  preparingGuide: [],
};

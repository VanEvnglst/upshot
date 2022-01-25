import React from 'react';
import { View, ScrollView, Image, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text } from 'app/components';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import { getCurrentJourney } from 'app/store/selectors';
import labels from 'app/locales/en';
import discussingGuide from 'app/models/DiscussingGuide';
import styles from './styles';

const DiscussingGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, feedbackDiscussing } = labels;
  const dispatch = useDispatch();
  const journeyId = useSelector(getCurrentJourney);

  const handleNavigation = () => {
    dispatch(DiscussingActions.postFeedbackDiscussing(journeyId.data));
    // navigation.navigate('DiscussingMeeting');
  };

  const GuidePost = ({ item }) => {
    return (
      <View style={{ marginTop: 30, flexDirection: 'row' }}>
        <Image source={item.image} resizeMode="contain" />
        <View style={styles.contentStyle}>
          <Text type="overline" style={styles.guideTitle}>
            {item.title}
          </Text>
          <Text type="body2" style={styles.guideDesc}>
            {item.content}
          </Text>
        </View>
      </View>
    );
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
          {feedbackSignPost.discussing}
        </Text>
        <View style={styles.descriptionContainer}>
          <Text type="body1" style={styles.descStyle}>
            {feedbackDiscussing.discussingDesc}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {discussingGuide.map((item, i) => {
            return <GuidePost key={i} item={item} />;
          })}
        </View>
        <View style={styles.footNoteContainer}>
          <Text type="body1" style={styles.descStyle}>
            {feedbackDiscussing.discussingFootNote}
          </Text>
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

export default DiscussingGuide;

DiscussingGuide.propTypes = {};

DiscussingGuide.defaultProps = {};

import React, { useState, useEffect, useRef } from 'react';
import { View, Animated, Dimensions, Image, ScrollView, Platform } from 'react-native';
import { Button, FAB as FloatingAction } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import { getDiscussingId } from 'app/store/selectors';
import { Header, Text, Wrapper } from 'app/components';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import Colors from 'app/theme/colors';
import styles from './styles';

const { width } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.8;
const ITEM_HEIGHT = ITEM_SIZE * 1.6;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;

const DiscussingMeeting = props => {
  const { navigation, route } = props;
  const { cueCards } = labels.feedbackDiscussing;
  const { createActionPlan } = labels.feedbackPreparing;
  const scrollX = useRef(new Animated.Value(0)).current;
  const dispatch = useDispatch();
  const activeDiscussing = useSelector(getDiscussingId);

  const contentValues = [
    { key: 'empty-left' },
    {
      id: 1,
      title: cueCards.checkIn,
      content: cueCards.checkInContent,
    },
    {
      id: 2,
      title: cueCards.statePurpose,
      content: cueCards.statePurposeContent,
    },
    {
      id: 3,
      title: cueCards.observation,
      content: cueCards.observationContent,
    },
    {
      id: 4,
      title: cueCards.listenDeeply,
      content: cueCards.listenDeeplyContent,
    },
    {
      id: 5,
      title: cueCards.brainstorm,
      content: cueCards.brainstormContent,
    },
    {
      id: 6,
      title: cueCards.evaluateIdeas,
      content: cueCards.evaluateIdeasContent,
    },
    {
      id: 7,
      title: cueCards.nextSteps,
      content: cueCards.nextStepsContent,
    },
    {
      id: 8,
      title: cueCards.checkOut,
      content: cueCards.checkOutContent,
    },
    {
      id: 9,
      title: cueCards.thankAndSupport,
      content: cueCards.thankAndSupportContent,
    },
    { key: 'empty-right' },
  ];

  const data = contentValues.map((item, index) => ({
    key: String(index),
    title: item.title,
    content: item.content,
  }));

  // TODO: implement current discussing when data is final
  // useEffect(() => {
  //   if(activeDiscussing)
  //   dispatch(DiscussingActions.fetchCurrentDiscussing(activeDiscussing));
  // }, []);

  const DiscussionCard = ({ title, content }) => {
    return (
      <View
        style={{
          borderRadius: 10,
          flex: 2,
          backgroundColor: '#F5F5F5aaaa',
          marginHorizontal: 12,
          padding: 20,
        }}>
        <Text type="h5" style={{ color: '#3700B3' }}>
          {title}
        </Text>
        <Text>{content}</Text>
      </View>
    );
  };

  const NextStepsGuide = () => {
    return (
      <View style={styles.guideContainer}>
        <Text type="overline" style={styles.addedGuideTitle}>
          {createActionPlan.defineWhat}
        </Text>
        <Text type="body2" style={styles.addedGuideText}>
          {createActionPlan.defineWhatContent}
        </Text>
        <View style={styles.guideContent}>
          <Text type="overline" style={styles.addedGuideTitle}>
            {createActionPlan.defineWhen}
          </Text>
          <Text type="body2" style={styles.addedGuideText}>
            {createActionPlan.defineWhenContent}
          </Text>
        </View>
        <View style={styles.guideContent}>
          <Text type="overline" style={styles.addedGuideTitle}>
            {createActionPlan.defineWho}
          </Text>
          <Text type="body2" style={styles.addedGuideText}>
            {createActionPlan.defineWhoContent}
          </Text>
        </View>
      </View>
    );
  };

  const handleNext = () => {
    navigation.navigate('FeedbackDiscussing');
  };

  return (
    <View style={{ flex: 1}}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
          snapToInterval={ITEM_SIZE}
          snapToAlignment="start"
          decelerationRate={0}
          bounces={false}
          data={data}
          keyExtractor={item => item.key}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            if (!item.title) {
              return <View style={styles.cardSpacer} />;
            }
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];
            return (
              <View style={styles.cardContainer}>
                <View style={[styles.card, Platform.OS === 'android' && styles.androidCard]}>
                  <View style={styles.headerContainer}>
                    {/* <Image
                        source={Images.lightbulb}
                        resizeMode='contain'
                      /> */}
                    <Image source={Images.quote} resizeMode="contain" />
                    <View
                      style={[styles.headerLine, styles.filledHeaderLine]}
                    />
                  </View>
                  <Text type="h5" style={styles.cardTitle}>
                    {item.title}
                  </Text>
                  <View style={styles.cardContentContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                      <Text type="body1" style={styles.cardContent}>
                        {item.content}
                      </Text>
                      {item.title === cueCards.nextSteps && <NextStepsGuide />}
                    </ScrollView>
                  </View>
                </View>
              </View>
            );
          }}
        />
        {/* {route.params.type === 'actionPlan' ? (
          <View style={styles.btnContainer}></View>
        ) : ( */}

        {/*  <Text type="button" style={styles.endMeetingBtnText}>
                End Meeting
              </Text>
            </Button> */}
        {/* <FloatingAction.Group
          style={styles.floatingAction}
          labelTextColor={Colors.primaryDark}
          // label={'End Meeting'}
          uppercase
          // icon={'stop'}
          actions={[
            { 
              icon: 'stop',
              
            }
          ]}
        /> */}
        <Button
          mode='contained'
          style={styles.floatingAction}
          onPress={() => handleNext()}
        >
          <Text type='button' style={styles.floatingLabel}>End Meeting</Text>
        </Button>
        {/* <View
         
          
        </View>
        
      
      <View
        style={{
          justifyContent: 'flex-end',
          height: 65,
          backgroundColor: 'blue',
        }}
      /> */}
      </Wrapper>
    </View>
  );
};

export default DiscussingMeeting;

DiscussingMeeting.propTypes = {};
DiscussingMeeting.defaultProps = {};

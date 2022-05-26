import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import DiscussingActions from 'app/store/feedback/DiscussingRedux';
import { Text, Header, Wrapper, Loader } from 'app/components';
import { getDiscussingId, getDiscussingFetching, getDiscussingPlans } from 'app/store/selectors';
import labels from 'app/locales/en';
import styles from './styles';

const DiscussingReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const discussingId = useSelector(getDiscussingId);
  const isLoading = useSelector(getDiscussingFetching);
  const actionPlanList = useSelector(getDiscussingPlans);

  useEffect(() => {
    async function retrieveData() {
      await dispatch(DiscussingActions.fetchCurrentDiscussing(discussingId));
    }
    retrieveData();
  }, []);

  const ActionPlanItem = ({ item, index }) => {
    
    const itemContent = `${item.specificAction}\n\n${item.whenWillItHappen}\n\n${item.whoWillMakeIt}`;

    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemCount}>
          <View style={styles.countBadge}>
            <Text type='overline'>{index + 1}</Text>
          </View>
          <View style={styles.countLine}/>
        </View>
        <View style={styles.itemContent}>
          <Text type='body2' style={styles.bodyText}>{itemContent}</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Wrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
        <Header 
          headerLeft={{
            onPress: () => navigation.goBack()
          }}
        />
        <Text type='overline' style={styles.overlineText}>{labels.common.review}</Text>
        <Text type='h6' style={styles.headerText}>Part 3 - Discussing</Text>
        <View style={styles.contentContainer}>
          <Text type='overline' style={[styles.overlineText, styles.titleSpacer]}>Action Plan</Text>
          {actionPlanList.map((item, index) => (
            <ActionPlanItem
              key={index} 
              item={item}
              index={index}
            />
          ))}
        </View>
        </ScrollView>
      </Wrapper>
      {isLoading && <Loader />}
    </View>
  )
};

export default DiscussingReview;

DiscussingReview.propTypes = {
  discussingId: PropTypes.number,
  isLoading: PropTypes.bool,
  actionPlanList: PropTypes.array,
  fetchCurrentDiscussing: PropTypes.func,
};

DiscussingReview.defaultProps = {
  discussingId: 1,
  isLoading: false,
  actionPlanList: [],
  fetchCurrentDiscussing: () => {}, 
};
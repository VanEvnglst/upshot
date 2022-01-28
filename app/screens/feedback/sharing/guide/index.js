import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { Wrapper, Text, Header, SignPostIndicator } from 'app/components';
import sharingGuide from 'app/models/SharingGuide';
import labels from 'app/locales/en';
import styles from './styles';

const SharingGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, feedbackSharing } = labels;
  const dispatch = useDispatch();

  const SignPost = ({ item, isLastItem }) => {
    return (
      <View style={{ flexDirection: 'row'}}>
        <SignPostIndicator
          isLastItem={isLastItem}
          image={item.image}
        />
        <View style={styles.contentStyle}>
          <Text 
            type='overline'
            style={styles.stepText}
          >
            {item.step}
          </Text>
          <Text
            type='body2'
            style={styles.textTitle}
          >
            {item.content}
          </Text>
        </View>
      </View>
    );
  };

  const handleNavigation = () => {
    navigation.navigate('FeedbackSharing');
  }

  return (
    <Wrapper>
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Text
          type='h4'
          style={styles.headerText}
        >
          {feedbackSignPost.sharing}
        </Text>
        <View
          style={styles.descriptionContainer}
        >
          <Text
            type='body1'
            style={styles.descStyle}
          >
            {feedbackSharing.description}
          </Text>
        </View>
        <View
          style={styles.listStyle}
        >
          {sharingGuide.map((item, i) => {
            return (
              <SignPost
                key={i}
                item={item}
                isLastIem={i === sharingGuide.length - 1}
              />
            );
          })}
        </View>
        <View
          style={styles.btnContainer}
        >
          <Button
            style={styles.button}
            onPress={() => handleNavigation()}
            mode='contained'
          >
            <Text
              type='button'
              style={styles.btnText}
            >{labels.common.start}</Text>
          </Button>
        </View>
      </ScrollView>
    </Wrapper>
  )
}

export default SharingGuide;

SharingGuide.propTypes = {};

SharingGuide.defaultProps = {};
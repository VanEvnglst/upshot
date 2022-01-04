import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';
import labels from 'app/locales/en';
import styles from './styles';

const ReflectingGuide = props => {
  const { navigation } = props;
  const { feedbackSignPost, feedbackReflecting } = labels;

  const handleNavigation = () => {
    navigation.navigate('FeedbackReflecting');
  };

  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <Text type="h4">{feedbackSignPost.reflecting}</Text>
      <View style={{ flex: 1 }}></View>
      <View>
        <Button
          style={{ height: 50 }}
          onPress={() => handleNavigation()}
          mode="contained">
          <Text type="button">{labels.common.start}</Text>
        </Button>
      </View>
    </Wrapper>
  );
};

export default ReflectingGuide;

ReflectingGuide.propTypes = {};

ReflectingGuide.defaultProps = {};

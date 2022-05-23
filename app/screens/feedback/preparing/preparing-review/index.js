import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';
// import { }
import PreparingActions from 'app/store/feedback/PreparingRedux';
// import styles from './styles';

const PreparingReview = props => {
  const { navigation } = props;
  return (
  <View style={{ flex: 1}}>
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack()
        }}
      />
      <Text type='overline'>Review</Text>
      <Text type='h6'>Part 2 - Preparing</Text>
      <View
        style={{
          marginTop: 30,
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
        }}>
          <Text type='body1' style={{
            lineHeight: 48
          }}>Data 1</Text>
          <Text type='body1' style={{ textDecorationLine: 'underline'}}>
            data underline
          </Text>
        </View>
    </Wrapper>
    </View>
  );
};

export default PreparingReview;


PreparingReview.propTypes = {};

PreparingReview.defaultProps = {};
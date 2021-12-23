import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';

const DocumentingReview = props => {
  const { navigation } = props;

  const handleNavigation = () => {
    console.log('press')
  }
  
  return (
  <Wrapper>
    <Header
      headerLeft={{
        onPress: () => navigation.goBack()
      }}
    />
    <Text type='overline'>Review</Text>
    <Text type='h6'>Part 1 - Documenting</Text>
    <View style={{ marginTop: 20, flexDirection: 'row', flexWrap: 'wrap'}}>
      <Text type='body1' style={{ lineHeight: 48}}>I want to give
      </Text>
      <TouchableOpacity
        onPress={() => handleNavigation()}
      >
        <Text type='body1'>corrective feedback</Text>
      </TouchableOpacity>
    </View>
  </Wrapper>);
};

export default DocumentingReview;

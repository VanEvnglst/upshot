import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Header, Text, Wrapper } from 'app/components';

const DiscussingMeeting = props => {
  const { navigation } = props;

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
        <Text type="h5">{title}</Text>
        <Text>{content}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => navigation.goBack(),
          }}
        />
        <View
          style={{
            borderRadius: 10,
            flex: 2,
            backgroundColor: '#F5F5F5',
            marginHorizontal: 12,
            padding: 20,
          }}>
          <Text type="h5">Check in</Text>
        </View>
        <View
          style={{
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button mode="text" onPress={() => console.log('End meeting')}>
            <Text type="button">End Meeting</Text>
          </Button>
        </View>
      </Wrapper>
      <View
        style={{
          justifyContent: 'flex-end',
          height: 65,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};

export default DiscussingMeeting;

DiscussingMeeting.propTypes = {};
DiscussingMeeting.defaultProps = {};

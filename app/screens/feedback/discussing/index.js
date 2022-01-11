import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Wrapper, Header, TextInput } from 'app/components';
import labels from 'app/locales/en';

const FeedbackDiscussing = props => {
  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => console.log(),
          }}
        />
        <Text type="overline">Discussing</Text>
        <View>
          <Text type="h6"></Text>
          <Text type="body1"></Text>
        </View>
        <View>
          <TextInput />
          <TextInput />
          <TextInput />
        </View>
        <View>
          <Button
            mode="contained"
            style={{
              borderWidth: 0.5,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white'
            }}>
            <Text type="button" style={{ color: '#000000'}}>Add another item</Text>
          </Button>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Button mode="text">
            <Text type="button">Back</Text>
          </Button>
          <Button mode="contained">
            <Text type="button">Send</Text>
          </Button>
        </View>
      </Wrapper>
    </View>
  );
};

export default FeedbackDiscussing;

FeedbackDiscussing.propTypes = {};

FeedbackDiscussing.defaultProps = {};

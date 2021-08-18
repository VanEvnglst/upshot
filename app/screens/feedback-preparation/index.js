import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Wrapper, Button, ButtonSelection, ShowHintIndicator } from '../../components';
import discussionTypes from '../../enums/discussion-type';
import styles from './styles';
import labels from '../../locales/en';
import SignPost from '../sign-post';

const FeedbackPreparation = () => {
  const [discussion, selectDiscussion] = useState();
  const [hint, showHint] = useState(false);

  useEffect(() => {
    console.log('types', discussionTypes, hint);
  }, []);

  const _handleSelection = type => {
    selectDiscussion(type);
  };

  const renderItem = ({ item }) => {
    console.warn('item', item);
    return <ButtonSelection title={item.id} type={'Radio'} />;
  };

  // const HintBtn = () => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => showHint(!hint)}
  //       style={{
  //         width: 24,
  //         height: 24,
  //         borderRadius: 12,
  //         backgroundColor: hint ? 'green' : 'white',
  //         borderWidth: 1,
  //         borderColor: 'green',
  //         alignItems: 'center',
  //         justifyContent: 'center',
  //         marginTop: 10,
  //       }}>
  //       <Text style={{ color: hint ? 'white' : 'green', fontWeight: 'bold' }}>
  //         {' '}
  //         ?{' '}
  //       </Text>
  //     </TouchableOpacity>
  //   );
  // };

  return (
    <>
      <Wrapper>
        <View style={{ flex: 5, justifyContent: 'center', padding: 10 }}>
          <Text style={{ paddingBottom: 30 }}>
            {labels.feedbackIntro.action}
          </Text>
          {discussionTypes.map((item, i) => (
            <ButtonSelection
              title={item.title}
              type={'Radio'}
              content={item.hint}
              showHint={hint}
              onPress={() => _handleSelection()}
            />
          ))}
          <ShowHintIndicator />
          {/* <HintBtn /> */}
          <SignPost />
        </View>
        <View style={{ flex: 1, marginBottom: 20, justifyContent: 'flex-end' }}>
          <Button onPress={() => console.log('nav')} block disabled>
            Continue
          </Button>
        </View>
      </Wrapper>
    </>
  );
};

export default FeedbackPreparation;

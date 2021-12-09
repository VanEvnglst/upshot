import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { Text, Wrapper, Header } from 'app/components';
import Images from 'app/assets/images';
import confirmationModel from 'app/models/ConfirmationModel';

const FeedbackConfirmation = props => {
  const { navigation, route } = props;
  const [content, setContent] = useState('Hello');

  useEffect(() => {
    handleContent();
  }, []);

  const handleContent = () => {
    // get route.params.type
    // const confirmationContent = confirmationModel.find(x => x.type === route.params.type)
    //setContent(content);
  };

  return (
    <Wrapper>
      <Header
        headerRight={{
          onPress: () => navigation.goBack(),
        }}
      />
      <View style={{ flex: 1 }}>
        <Image source={Images.confirmation} resizeMode="cover" />
      </View>
      <View style={{ flex: 2 }}>
        <Text type="h4">You did it!</Text>
        <Text type="body1">{content}</Text>
      </View>
    </Wrapper>
  );
};

export default FeedbackConfirmation;

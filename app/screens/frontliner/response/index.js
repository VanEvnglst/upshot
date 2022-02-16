import React, { useState, useEffect} from 'react';
import { View, ScrollView, Animated, Image } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux'; 
import { Wrapper, Text, Header, ButtonSelection, TextInput } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const ResponseScreen = props => {
const { navigation } = props;

useEffect(() => {

},[]);

const handleBack = () => {
  navigation.navigate('Messages');
  //TODO: reset message state on API integration
}

const DiscussionMessage = () => {
  return (
    <View style={styles.contentContainer}>
    <View style={styles.content}>
    <Text type='overline'
      style={styles.contentHeader}
    >What</Text>
    <Text type='body2'
      style={styles.contentBody}
    >Data</Text>
    </View>
    <View style={styles.content}>
    <Text type='overline'
      style={styles.contentHeader}
    >When</Text>
    <Text type='body2'
      style={styles.contentBody}
    >Data</Text>
    </View>
  </View>
  )
}

const ActionPlanMessage = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.content}>
      <Text type='overline'
        style={styles.contentHeader}
      >What</Text>
      <Text type='body2'
        style={styles.contentBody}
      >Data</Text>
      </View>
      <View style={styles.content}>
      <Text type='overline'
        style={styles.contentHeader}
      >When</Text>
      <Text type='body2'
        style={styles.contentBody}
      >Data</Text>
      </View>
    </View>
  )
}

return (
  <Wrapper>
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
    >
    <Header
      headerLeft={{
        onPress: () => handleBack(),
      }}
    />
    <Text type='h6' style={styles.headerText}>Discussion title</Text>
    <View style={styles.container}>
      <View style={styles.messageCard}>
        <View style={styles.nameContainer}>
          <Image
            source={Images.avatar}
            style={styles.avatar}
          />
          <View style={styles.nameContent}>
            <View style={styles.senderContainer}>
            <Text type='caption' style={styles.senderNameText}>
              From EM
            </Text>
            <Text type='caption' style={styles.dateText}>10:00 AM</Text>
            </View>
            <Text type='caption' style={styles.receipientNameText}>
              to me
            </Text>
          </View>
        </View>
        <ActionPlanMessage />
      </View>
      <View style={styles.responseContainer}>
        <Text type='h6' style={styles.frontlinerQuestion}>Can you make it?</Text>
        <ButtonSelection
          title={"Yes, I'm available"}
        />
        <ButtonSelection
          title={"No, can we reschedule?"}
        />
      </View>
    </View>
    <View style={styles.btnContainer}>
      <Button
      mode='contained'
      >Send</Button>
    </View>
    </ScrollView>
  </Wrapper>
)
};

export default ResponseScreen;

ResponseScreen.propTypes = {};

ResponseScreen.defaultProps = {};
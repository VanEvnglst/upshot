import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Wrapper, InputField } from 'app/components';
import { SampleLocalNotif } from 'app/services/notification-service';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { useDispatch } from 'react-redux';

const Profile = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleButtonPress = () => {
    SampleLocalNotif();
  };

  const signOut = () => {
    dispatch(AuthenticationActions.signOutUser());
  }

  const handleNavigation = () => {
    navigation.navigate("Assessment", { screen: 'Leadership Assessment Extended'});
    // NavigationService.navigate('Home', { screen: 'Home' }
  }

  return (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
    <Button
      mode='contained'
      style={{ marginVertical: 30, marginHorizontal: 16 }}
      onPress={() => signOut()}
      >Sign out</Button>   
      
      <Button
        mode='contained'
        style={{ marginBottom: 5, marginHorizontal: 16 }}
        onPress={() => navigation.navigate('Feedback', {screen: 'Capture Feedback Recap'})}
    >Feedback Recap</Button> 
    </View>

    
  );
};

export default Profile;

Profile.propTypes = {};

Profile.defaultProps = {};
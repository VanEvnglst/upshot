import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView } from 'react-native';
import PushNotification from 'react-native-push-notification';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Wrapper, InputField } from 'app/components';
import { BaselineScore, ExtendedLeadershipAssessment, AssessmentBreakDown } from 'app/screens';
import { SampleLocalNotif } from 'app/services/notification-service';

const Profile = props => {
  const { navigation } = props;
  const [value, setValue] = useState('');

  const handleButtonPress = () => {
    SampleLocalNotif();
  };

  const handleNavigation = () => {
    navigation.navigate("Assessment", { screen: 'Leadership Assessment Extended'});
    // NavigationService.navigate('Home', { screen: 'Home' }
  }

  return (
    <View
      style={{ flex: 1 }}
    >

      <View style={{ flex: 1 }}>
        <AssessmentBreakDown {...props} />
    {/* <BaselineScore {...props}/> */}
    </View>
    
           
            </View>
  );
};

export default Profile;

Profile.propTypes = {};

Profile.defaultProps = {};
import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Header, Wrapper } from 'app/components';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';

const SurveyGuide = props => {
  const { navigation } = props;
  const { survey } = labels.frontliner;

  const handleNavigation = () => {
    navigation.navigate('FrontlinerSurvey');
  }
  
  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <Text type="h4">{survey.title}</Text>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, marginTop: 30, marginBottom: 20 }}>
          <Text type="body1" style={{ lineHeight: 30 }}>
            {survey.descHelp} {survey.descCont} {survey.descLast}
          </Text>
        </View>
        <View style={{ flex: 1, marginBottom: 20}}>
          <Image
            source={Images.surveyGuide}
            resizeMode='contain'
          />
        </View>
        <View style={{ marginBottom: 30}}>
          <Button
            style={{ height: 50, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => handleNavigation()}
            mode='contained'
          ><Text type='button'>{labels.common.start}</Text>
          </Button>
        </View>
      </View>
    </Wrapper>
  );
};

export default SurveyGuide;

SurveyGuide.propTypes = {};

SurveyGuide.defaultProps = {};

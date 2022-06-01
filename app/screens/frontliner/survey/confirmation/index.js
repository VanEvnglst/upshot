import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Wrapper, Header } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';



const SurveyConfirmation = props => {
  const { navigation, route } = props;

  const handleClose = () => {

  }

  const handleContent = () => {
    //TODO: handle if confirmation or no survey
    const image = route.params && route.params.type === 'no event' ? Images.noRatings : Images.confirmation;
    const content = route.params && route.params.type === 'no event' ? 'No event' : 'Confirmation screen';

    return (
      <>
        <View>
          <Image
            source={image}
          />
          <View style={styles.contentContainer}>
            <Text>{content}</Text>
          </View>
        </View>
      </>
    )
  }

  return (
    <View style={styles.container}>
      <Wrapper>
        <ScrollView
          showsVerticalScrollIndicator={false}
        >
          <Header
            headerRight={{
              onPress: () => {}
            }}
          />
          {handleContent()}
          <View style={styles.btnContainer}>
            <View
              style={{
                marginBottom: 20,
                flex: 1
              }}>
                <Button
                  mode='contained'
                  onPress={() => console.log('close')}
                  >Close</Button>
              </View>
          </View>
          {/* <View>
            <Image
              source={Images.confirmation}
              resizeMode='cover'
            />
          </View>
          <View style={styles.contentContainer}>
          </View> */}
        </ScrollView>
      </Wrapper>
    </View>
  )
}


export default SurveyConfirmation;

SurveyConfirmation.propTypes = {};

SurveyConfirmation.defaultProps = {};
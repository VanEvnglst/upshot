import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { GradientBackground, StoryProgress } from 'app/components';
import ResponseActions from 'app/store/frontliner/ResponseRedux';

import Images from 'app/assets/images';
import styles from './styles';

const AdditionalResponse = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerResponse.get('maxStep'));
  const activeStep = useSelector(state => state.frontlinerResponse.get('activeStep'));
  const translation = useRef(new Animated.Value(0)).current;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [additionalClarification, setAdditionalClarification] = useState('');

  useEffect(() => {
    Animated.timing(translation, {
      toValue: showAnswerContainer ? -650 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showAnswerContainer]);


  const handleGoBack = () => {
    dispatch(ResponseActions.setResponseActiveStep(activeStep - 1));
  }

  const handleNext = () => {
    dispatch(ResponseActions.setResponseActiveStep(activeStep  + 1));
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: '88%',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          transform: [
            { translateY: translation }
          ]
        }}
        >
          <GradientBackground
        colors={['#90D0C5', '#47A9A3']}
        style={styles.gradientContainer}>
        <View
          style={styles.headerContainer}>
              <TouchableOpacity 
              accessibilityRole="button" 
              onPress={() => handleGoBack()}>
            <Icon 
              name="chevron-back-outline" 
              size={24}
              color={'white'}
            />
            </TouchableOpacity>
          <View
            style={styles.titleContainer}>
            <Text style={styles.titleText}>Corrective Feedback</Text>
            <Text style={styles.subtitleText}>Date logged</Text>
          </View>
          <View>
            <TouchableOpacity accessibilityRole="button" onPress={() => navigation.navigate('Explore')}>
              <Text style={{ color: 'white', fontWeight: '800'}}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.stepContainer}>
        <StoryProgress
            length={maxStep}
            activeStep={activeStep}
          />
        </View>
        <View style={styles.contentContainer}>
          <View
            style={styles.questionContainer}>
            <Text style={styles.questionText}>Other things I'd like to tell you</Text>
          </View>
          <View style={{ marginTop: 30 }}>
            <Image
              source={Images.quotationEmoji}
              resizeMode='contain'
              style={styles.image}
            />
            <Text style={styles.entryText}>Is everything alright? I noticed that you lacked enthusiasm when you greeted the customers this morning and don't seem like your usual self today."</Text>
          </View>
          <View style={styles.nameContainer}>
            <View style={styles.nameAvatar}>
              <LinearGradient
                style={styles.nameAvatar}
                colors={['#C883FF', '#6587FF']}
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0.7, y: 1 }}
              >
                <Text style={styles.avatarText}>MN</Text>
              </LinearGradient>
            </View>
            <View>
              <Text style={styles.managerNameText}>Manager name</Text>
              <Text style={styles.descriptionText}>Shift Manager</Text>
            </View>
          </View>
        </View>
      </GradientBackground>
        </Animated.View>
        <View style={{ 
        flex: 1, 
        paddingHorizontal: 16, 
        justifyContent: 'center',
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0}}>
        <View style={styles.actionContainer}>
        <TextInput
          onPressOut={() => setShowAnswerContainer(false)}
            style={[
              styles.textInputContainer,
              {
                width: showAnswerContainer ? '90%' : '70%'
              }]}
              placeholder='I need clarifications about...'
              placeholderTextColor={'#B1B5C3'}
              >
            </TextInput>
          {!showAnswerContainer &&
          (<TouchableOpacity
          onPress={() => handleNext()}
            style={{
                height: 48, 
                width: 100, 
                justifyContent: 'center', 
                alignItems: 'center', 
                backgroundColor: 'white',
                borderRadius: 12}}>
              <Text>{`Next`}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      {showAnswerContainer && <View style={{ zIndex: -1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, flex: 1}}>
        <Text style={{ fontSize: 24, lineHeight: 32, fontWeight: '400', textAlign: 'center', color: 'white'}}>What do you think about what your manager said?</Text>
        </View>}
    </View>
  )
}

export default AdditionalResponse;

AdditionalResponse.propTypes = {};

AdditionalResponse.defaultProps = {};
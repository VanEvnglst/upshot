import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';
import { GradientBackground, StoryProgress } from 'app/components';
import PropTypes from 'prop-types';
import Images from 'app/assets/images';
import styles from './styles';
import EventObservationResponse from './event-observation';
import ImpactResponse from './impact-response';
import ContinueResponse from './continue-response';
import DoLessResponse from './do-less-response';
import StopDoingResponse from './stop-doing-response';
import AdditionalResponse from './additional-response';
import FrontlinerResponseReview from '../feedback-response-review';

const FeedbackResponse = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerResponse.get('maxStep'));
  const activeStep = useSelector(state => state.frontlinerResponse.get('activeStep'));
  const translation = useRef(new Animated.Value(0)).current;
  const [showAnswerContainer, setShowAnswerContainer] = useState(false);
  const [eventClarification, setEventClarification] = useState('');

  useEffect(() => {
    Animated.timing(translation, {
      toValue: showAnswerContainer ? -650 : 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  }, [showAnswerContainer]);

  const handleTextChange = () => {

  }

  const handleStepContent = () => {
    switch(activeStep) {
      case 1:
        return <EventObservationResponse/>;
      case 2:
        return <ImpactResponse/>;
      case 3:
        return <ContinueResponse />;
      case 4:
        return <DoLessResponse />;
      case 5:
        return <StopDoingResponse />;
      case 6: 
        return <AdditionalResponse />;
      case 7:
        return <FrontlinerResponseReview />;
    }
  }

  return (
    <View style={styles.container}>
      {handleStepContent()}
      {/* <Animated.View
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
        colors={['#E4BCA2', '#F2976A']}
        style={styles.gradientContainer}>
        <View
          style={styles.headerContainer}>
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
            <Text style={styles.questionText}>The event that I observed...</Text>
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
          onPress={() => navigation.navigate('Impact Response')}
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
        <Text style={{ fontSize: 24, lineHeight: 32, fontWeight: '400', textAlign: 'center', color: 'white'}}>What do you think about the observation?</Text>
        </View>} */}
    </View>
  );
};

export default FeedbackResponse;

FeedbackResponse.propTypes = {};

FeedbackResponse.defaultPropst = {};

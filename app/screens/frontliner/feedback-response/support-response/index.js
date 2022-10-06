import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { StoryProgress } from 'app/components';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import {
  getFLFeedbackData,
  getFLResponseActiveStep,
  getFLResponseMaxStep,
} from 'app/store/selectors';
import Images from 'app/assets/images';
import styles from './styles';
import { isInputEvent } from 'formik';

const SupportResponse = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(getFLResponseMaxStep);
  const activeStep = useSelector(getFLResponseActiveStep);
  const frontlinerFeedback = useSelector(getFLFeedbackData);
  const dateLogged = moment(frontlinerFeedback.date).format('llll');
  const [othersValue, setOthersValue] = useState('');
  const [isInputActive, setIsInputActive] = useState(false);
  const [supportValues, setSupportValues] = useState([]);

  const supportOptions = [
    {
      id: 1,
      suggestion: 'Can you suggest a training program that I can join?',
    },
    {
      id: 2,
      suggestion: 'Can we have coaching sessions?',
    },
    {
      id: 3,
      suggestion: 'Can you give more frequent feedback on my progress?',
    },
    {
      id: 4,
      suggestion: 'Others (Please specify)',
    },
  ];

  const handleGoBack = () => {
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep - 1));
  };

  const checkSelectedValue = item => {
    return supportValues.some(support => support.id === item.id);
  };

  const handleSupport = item => {
    let newSupportList = supportValues;

    if (checkSelectedValue(item))
      newSupportList = newSupportList.filter(
        newValue => newValue.id !== item.id,
      );
    else newSupportList = [...newSupportList, item];
    setSupportValues(newSupportList);

    console.warn('table', newSupportList);
    if (
      newSupportList.find(
        element => element.suggestion === 'Others (Please specify)',
      )
    )
      setIsInputActive(true);
    else setIsInputActive(false);
  };

  const handleReviewResponse = async () => {
    if (
      supportValues.find(
        element => element.suggestion === 'Others (Please specify)',
      )
    ) {
      let addedList = supportValues;
      addedList = [...addedList, { id: 5, suggestion: othersValue }];
      setSupportValues(addedList);
    }
    dispatch(
      FrontlinerFeedbackActions.setResponseData('support', supportValues),
    );
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep + 1));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}>
          <Icon name="chevron-back-outline" size={24} color={'white'} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>
            {frontlinerFeedback.cor_or_pos} Feedback
          </Text>
          <Text style={styles.subtitleText}>{dateLogged}</Text>
        </View>
        <View>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => navigation.navigate('Explore')}>
            <Icon name={'close-outline'} size={24} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.stepContainer}>
        <StoryProgress length={maxStep} activeStep={activeStep} />
      </View>
      <View style={styles.contentContainer}>
        <Image
          source={Images.quotationEmoji}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.entryText}>
          How can I support you to be better?
        </Text>
        <View style={{ marginTop: 40 }}>
          {supportOptions.map((item, i) => (
            <View
              key={i}
              style={{
                marginTop: 24,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 4,
                  backgroundColor: checkSelectedValue(item)
                    ? '#3772FF'
                    : '#23262F',
                  marginRight: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                onPress={() => handleSupport(item)}>
                {checkSelectedValue(item) && (
                  <Icon name="checkmark-outline" size={20} color={'white'} />
                )}
              </TouchableOpacity>
              <Text
                style={{
                  maxWidth: '80%',
                  fontSize: 16,
                  lineHeight: 24,
                  fontWeight: '400',
                  color: 'white',
                }}>
                {item.suggestion}
              </Text>
            </View>
          ))}
          <TextInput
            placeholder="Can you guide me on..."
            value={othersValue}
            onChangeText={text => setOthersValue(text)}
            style={{
              marginTop: 15,
              width: '90%',
              alignSelf: 'flex-end',
              backgroundColor: isInputActive ? '#141416' : '#353945',
              borderWidth: 1,
              borderColor: '#777E90',
              borderRadius: 12,
              minHeight: 48,
              paddingHorizontal: 16,
              color: 'white',
            }}
            editable={isInputActive}
            placeholderTextColor={'#B1B5C3'}
          />
        </View>
      </View>
      <View
        style={{
          marginBottom: 30,
          paddingHorizontal: 24,
          justifyContent: 'flex-end',
        }}>
        <Button
          mode="contained"
          onPress={() => handleReviewResponse()}
          style={{
            height: 48,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
          }}>
          <Text
            style={{
              color: '#667080',
              fontWeight: '700',
              textTransform: 'capitalize',
            }}>
            Review Responses
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default SupportResponse;

SupportResponse.propTypes = {};

SupportResponse.defaultProps = {};

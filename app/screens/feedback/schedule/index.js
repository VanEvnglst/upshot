import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  KeyboardAvoidingView,
  BackHandler,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
} from 'react-native';
import { DateTimePicker } from 'app/components';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import CaptureMomentActions from 'app/store/feedback/CaptureFeedbackMomentRedux';
import styles from './styles';

const ScheduleDiscussion = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const entryStep = useSelector(state =>
    state.captureMoment.get('entryActiveStep'),
  );
  const dateNow = new Date();
  const nextHour = dateNow.setTime(dateNow.getTime() + 1 * 60 * 60 * 1000);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setShowDate] = useState(
    moment(dateNow).format('ddd [·] MMM DD, YYYY'),
  );
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [startTime, setStartTime] = useState(
    moment(nextHour).format('hh:[00] A'),
  );
  const [endTime, setEndTime] = useState(moment(nextHour).format('hh:[30] A'));
  const [timePickerID, setTimePickerID] = useState('');
  const [locationDetails, setLocationDetails] = useState('');

  const handleScheduleDiscussion = () => {
    const scheduleDetails = {
      date: selectedDate,
      startTime: startTime,
      endTime: endTime,
      location: locationDetails,
    };

    dispatch(CaptureMomentActions.setEntryActiveStep(entryStep + 1));
    dispatch(
      CaptureMomentActions.setFeedbackMomentData(
        'f2fSchedule',
        scheduleDetails,
      ),
    );
    navigation.navigate('Record Feedback Entry');
  };

  const handleDateConfirm = date => {
    setShowDate(moment(date).format('ddd [·] MMM DD, YYYY'));
    setDatePickerVisibility(false);
  };

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const showTimePicker = id => {
    setTimePickerVisibility(true);
    setTimePickerID(id);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
    setTimePickerID('');
  };

  const handleTimeConfirm = (confirmTime, id) => {
    if (id === 'startTimeID') {
      setStartTime(moment(confirmTime).format('hh:mm A'));
      setTimePickerVisibility(false);
      setTimePickerID('');
    } else if (id === 'endTimeID') {
      setEndTime(moment(confirmTime).format('hh:mm A'));
      setTimePickerVisibility(false);
      setTimePickerID('');
    }
  };

  const handleTextChange = newText => {
    setLocationDetails(newText);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => {}}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Schedule Discussion</Text>
        </View>

        <View style={styles.headerSave}>
          <TouchableOpacity
            acccessibilityRole="button"
            onPress={() => navigation.navigate('Home')}>
            <Text style={styles.saveText}>X</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.nameText}>Andre Castro</Text>
        <Text style={styles.infoHeaderTitle}>Set a 1-on-1</Text>
        <Text style={styles.infoSubHeader}>
          Schedule a time to discuss the feedback
        </Text>
      </View>

      <View
        style={{ margin: 24, borderTopWidth: 1, borderTopColor: '#B1B5C3' }}>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
          <Icon name="calendar-outline" size={24} color="#777E90" />
          <Text
            style={{
              color: '#FFFFFF',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 24,
              paddingLeft: 5,
            }}>
            Schedule Details
          </Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              color: '#B1B5C3',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 12,
              textTransform: 'uppercase',
            }}>
            Date
          </Text>
          <TouchableOpacity onPress={() => showDatePicker()}>
            <View
              style={{
                minWidth: 327,
                height: 48,
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderWidth: 2,
                borderColor: '#353945',
                borderRadius: 12,
                alignItems: 'center',
                marginTop: 12,
              }}>
              <Text
                style={{
                  color: '#FCFCFD',
                  fontWeight: '500',
                  fontSize: 14,
                  lineHeight: 24,
                  marginLeft: 18,
                }}>
                {selectedDate}
              </Text>
              <Icon
                name="chevron-down-circle-outline"
                size={24}
                color="#777E90"
                style={{ marginRight: 10 }}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <DateTimePicker
            isVisible={isDatePickerVisible}
            mode={'date'}
            display={Platform.OS === 'android' ? 'calendar' : 'inline'}
            minimumDate={new Date()}
            onCancel={() => hideDatePicker()}
            onConfirm={handleDateConfirm}
          />
        </View>

        <View
          style={{
            marginTop: 24,
            minWidth: 327,
            flexDirection: 'row',
            justifyContent: 'flex-start',
          }}>
          <View style={{ minWidth: 157.5, justifyContent: 'flex-start' }}>
            <Text
              style={{
                color: '#B1B5C3',
                fontWeight: '700',
                fontSize: 12,
                lineHeight: 12,
                textTransform: 'uppercase',
                width: 157.5,
              }}>
              Start time
            </Text>
            <TouchableOpacity onPress={() => showTimePicker('startTimeID')}>
              <View
                style={{
                  height: 48,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 2,
                  borderColor: '#353945',
                  borderRadius: 12,
                  alignItems: 'center',
                  marginTop: 12,
                }}>
                <Text
                  style={{
                    color: '#FCFCFD',
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 24,
                    marginLeft: 18,
                  }}>
                  {startTime}
                </Text>
                <Icon
                  name="chevron-down-circle-outline"
                  size={24}
                  color="#777E90"
                  style={{ marginRight: 10 }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              minWidth: 157.5,
              justifyContent: 'flex-start',
              marginLeft: 12,
            }}>
            <Text
              style={{
                color: '#B1B5C3',
                fontWeight: '700',
                fontSize: 12,
                lineHeight: 12,
                textTransform: 'uppercase',
              }}>
              End time
            </Text>
            <TouchableOpacity onPress={() => showTimePicker('endTimeID')}>
              <View
                style={{
                  height: 48,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  borderWidth: 2,
                  borderColor: '#353945',
                  borderRadius: 12,
                  alignItems: 'center',
                  marginTop: 12,
                }}>
                <Text
                  style={{
                    color: '#FCFCFD',
                    fontWeight: '500',
                    fontSize: 14,
                    lineHeight: 24,
                    marginLeft: 18,
                  }}>
                  {endTime}
                </Text>
                <Icon
                  name="chevron-down-circle-outline"
                  size={24}
                  color="#777E90"
                  style={{ marginRight: 10 }}
                />
              </View>
            </TouchableOpacity>
          </View>

          <DateTimePicker
            isVisible={isTimePickerVisible}
            mode={'time'}
            display={'spinner'}
            onCancel={() => hideTimePicker()}
            onConfirm={confirmTime =>
              handleTimeConfirm(confirmTime, timePickerID)
            }
            date={dateNow}
          />
        </View>

        <View style={{ marginTop: 24 }}>
          <Text
            style={{
              color: '#B1B5C3',
              fontWeight: '700',
              fontSize: 12,
              lineHeight: 12,
              textTransform: 'uppercase',
            }}>
            Location
          </Text>
          <View
            style={{
              minWidth: 327,
              height: 48,
              justifyContent: 'center',
              borderWidth: 2,
              borderColor: '#353945',
              borderRadius: 12,
              marginTop: 12,
              textAlignVertical: 'center',
            }}>
            <TextInput
              style={{
                color: '#FCFCFD',
                fontWeight: '500',
                fontSize: 14,
                lineHeight: 24,
                marginLeft: 18,
                textAlign: 'left',
                alignItems: 'center',
                height: 32,
              }}
              placeholder={'Type your location...'}
              placeholderTextColor="#777E90"
              value={locationDetails}
              textAlignVertical="top"
              onChangeText={newText => handleTextChange(newText)}
            />
          </View>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#FFFFFF',
            minWidth: 351,
            height: 48,
            borderRadius: 12,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 150,
          }}
          onPress={() => handleScheduleDiscussion()}>
          <Text
            style={{
              color: '#353945',
              fontWeight: '700',
              fontSize: 16,
              lineHeight: 16,
            }}>
            Schedule Discussion
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ScheduleDiscussion;

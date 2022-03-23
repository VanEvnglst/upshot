import React, { useState, useEffect } from 'react';
import { View, Image, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Header,
  Wrapper,
  Text,
  CalendarPicker,
  DateTimePicker,
  HintIndicator,
  Modal,
  ButtonSelection,
} from 'app/components';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getStaffName } from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';

const PreparingSchedule = props => {
  const { navigation } = props;
  const { feedbackPreparing } = labels;
  const dispatch = useDispatch();
  const staffName = useSelector(getStaffName);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [isAlertTimeVisbile, setAlertTimeVisibility] = useState(false);
  const [dateSelected, setDateSelected] = useState({
    label: '',
    value: '',
  });
  const [timeSelected, setTimeSelected] = useState({
    label: '',
    value: '',
  });
  const [alertTime, setAlertTime] = useState([]);
  const [alertLabel, setAlertLabel] = useState('Set an alert');
  const [isCompleted, setCompletion] = useState(false);
  const [showAlerts, setShowAlerts] = useState(true);
  const [hintVisible, setHintVisible] = useState(false);
  const dateToday = new Date();

  const alertTimesList = [
    {
      id: 1,
      title: '2 hours before',
    },
    {
      id: 2,
      title: '1 hour before',
    },
    {
      id: 3,
      title: '30 minutes before',
    },
    {
      id: 4,
      title: '10 minutes before',
    },
  ];

  const showDatePicker = () => setDatePickerVisibility(true);
  const hideDatePicker = () => setDatePickerVisibility(false);
  const showTimePicker = () => setTimePickerVisibility(true);
  const hideTimePicker = () => setTimePickerVisibility(false);
  const showAlertTime = () => setAlertTimeVisibility(true);
  const hideAlertTime = () => setAlertTimeVisibility(false);

  const handleDatePicked = date => {
    const modDate = moment(date).format('llll');
    const dateArr = modDate.split(/[ ,]+/);
    const dateLabel = `${dateArr[0]}, ${dateArr[1]} ${dateArr[2]}`;
    setDateSelected({ label: dateLabel, value: date });
    if (date < dateToday) setShowAlerts(false);
    else setShowAlerts(true);
    hideDatePicker();
    validate();
  };

  const handleTimePicked = time => {
    const timeLabel = moment(time).format('hh:mm a');
    const timePicked = moment(time).format('HH:mm');
    setTimeSelected({ label: timeLabel, value: timePicked });
    hideTimePicker();
    validate();
  };

  const checkSelectedValue = alert => {
    return alertTime.some(value => value === alert.title);
  };

  const handleAlertTimes = alert => {
    let newAlerts = alertTime;
    if (checkSelectedValue(alert))
      newAlerts = newAlerts.filter(newAlert => newAlert !== alert.title);
    else newAlerts = [...newAlerts, alert.title];
    setAlertTime(newAlerts);
  };

  const handleAlertLabel = () => {
    if (alertTime.length > 1) setAlertLabel(`${alertTime.length} alerts set`);
    if (alertTime.length === 1) setAlertLabel(alertTime[0]);
    hideAlertTime();
    validate();
  };

  const validate = () => {
    if (
      alertTime.length !== 0 &&
      dateSelected.value !== '' &&
      timeSelected.value !== ''
    )
      setCompletion(true);
    else setCompletion(false);
  };

  const sendInvite = () => {
    dispatch(
      PreparingActions.updatePreparingSchedule({
        dateSelected,
        timeSelected,
        alertTime,
      }),
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <ScrollView>
        <Header
          headerRight={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Text type="h6">
          {feedbackPreparing.scheduleTitle} {staffName.firstName}{' '}
          {staffName.lastName}
        </Text>
        <View style={{ flex: 1, marginTop: 30 }}>
          <CalendarPicker
            onPress={() => showDatePicker()}
            style={{ marginBottom: 10 }}
            text={
              dateSelected.label === '' ? 'Choose a date' : dateSelected.label
            }
            icon={Images.calendar}
          />
          <CalendarPicker
            onPress={() => showTimePicker()}
            style={{ marginBottom: 10 }}
            text={
              timeSelected.label === '' ? 'Choose a time' : timeSelected.label
            }
            icon={Images.timeIcon}
          />
          {showAlerts && (
            <CalendarPicker
              onPress={() => showAlertTime()}
              style={{ marginBottom: 10 }}
              text={alertLabel}
              icon={Images.alertIcon}
            />
          )}
          <DateTimePicker
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleDatePicked}
            onCancel={hideDatePicker}
          />
          <DateTimePicker
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={handleTimePicked}
            onCancel={hideTimePicker}
          />
          <HintIndicator
            showHint={hintVisible}
            onPress={() => setHintVisible(!hintVisible)}
          />
          {hintVisible && (
            <View style={styles.hintCard}>
              <Image
                source={Images.schedulingHint}
                resizeMode='contain'  
              />
              <Text type='body2'
                style={styles.hintCardText}
              >{feedbackPreparing.schedulingHint}</Text>
            </View>
  )}
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end',marginBottom: 20, }}>
          <Button
            mode="contained"
            disabled={!isCompleted}
            onPress={() => sendInvite()}>
            <Text type="button">Send invite</Text>
          </Button>
        </View>
        </ScrollView>
      </Wrapper>
      <Modal
        isVisible={isAlertTimeVisbile}
        onDismiss={hideAlertTime}
        style={{
          padding: 20,
          width: 350,
          height: 550,
        }}>
        <View>
          <Text type="overline">{feedbackPreparing.setAlert}</Text>
          {alertTimesList.map((item, i) => (
            <ButtonSelection
              title={item.title}
              type={'Check'}
              onPress={() => handleAlertTimes(item)}
              selected={checkSelectedValue(item)}
              key={item.id}
            />
          ))}
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          <Button mode="text" onPress={() => hideAlertTime()}>
            <Text type="button">Cancel</Text>
          </Button>
          <Button mode="text" onPress={() => handleAlertLabel()}>
            <Text type="button">Ok</Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default PreparingSchedule;

PreparingSchedule.propTypes = {};

PreparingSchedule.defaultProps = {};

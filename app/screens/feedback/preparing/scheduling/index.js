import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
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
  Modal,
  ButtonSelection,
} from 'app/components';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import { getStaffName } from 'app/store/selectors';


const PreparingSchedule = props => {
  const { navigation } = props;
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
    hideDatePicker();
  };

  const handleTimePicked = time => {
    const timeLabel = moment(time).format('hh:mm a');
    const timePicked = moment(time).format('HH:mm');
    setTimeSelected({ label: timeLabel, value: timePicked });
  };

  const checkSelectedValue = alert => {
    return alertTime.some(value => value === alert.title);
  };

  const handleAlertTimes = alert => {
    let newAlerts = alertTime;
    if (checkSelectedValue(alert))
      newAlerts = newAlerts.filter(newAlert => newAlert.id !== alert.id);
    else newAlerts = [...newAlerts, alert.title];
    setAlertTime(newAlerts);
  };

  const handleAlertLabel = () => {
    if (alertTime.length > 1) setAlertLabel(`${alertTime.length} alerts set`);
    if (alertTime.length === 1) setAlertLabel(alertTime[0]);
    hideAlertTime();
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
        <Header headerRight={{
          onPress: () => navigation.goBack()
        }} />
        <Text type="h6">
          Schedule your feedback discussion with {staffName.firstName} {staffName.lastName}
        </Text>
        <View style={{ flex: 3, marginTop: 30 }}>
          <CalendarPicker
            onPress={() => showDatePicker()}
            style={{ marginBottom: 10 }}
            text={
              dateSelected.label === '' ? 'Choose a date' : dateSelected.label
            }
          />
          <CalendarPicker
            onPress={() => showTimePicker()}
            style={{ marginBottom: 10 }}
            text={
              timeSelected.label === '' ? 'Choose a time' : timeSelected.label
            }
          />
          <CalendarPicker
            onPress={() => showAlertTime()}
            style={{ marginBottom: 10 }}
            text={alertLabel}
          />
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
        </View>
        <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 20 }}>
          <Button mode="contained" onPress={() => sendInvite()}>
            <Text type="button">Send invite</Text>
          </Button>
        </View>
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
          <Text type="overline">Set alert</Text>
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

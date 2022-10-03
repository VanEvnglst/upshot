import React from "react";
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
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux";
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import styles from './styles';


const ScheduleDiscussion = props => { 
  const { navigation } = props;
  const dispatch = useDispatch();
  const entryStep = useSelector(state => state.captureMoment.get('entryActiveStep'));
  const handleScheduleDiscussion = () => { 
    dispatch(CaptureMomentActions.setEntryActiveStep(entryStep + 1));
    navigation.navigate('Record Feedback Entry');
  }

  return (
    <SafeAreaView style={styles.container}>
     
      <View style={styles.headerContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => { }}
          style={styles.icon}>
          <Icon name="chevron-back-outline" size={24} color='#FFFFFF' />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Schedule Discussion</Text>
        </View>
      
        <View style={styles.headerSave}>
          <TouchableOpacity
          acccessibilityRole='button'
        onPress={() => navigation.navigate('Home')}> 
            <Text style={styles.saveText}>X</Text>
            </TouchableOpacity>
          </View>
      </View>

      <View style={{alignItems: 'center', marginVertical: 25.5}}>
        <Text style={{color: '#FFFFFF',fontWeight: '500', fontSize: 16, lineHeight: 24}} >Andre Castro</Text>
        <Text style={{ marginTop: 13.5, color: '#FFFFFF', fontWeight: '700', fontSize: 32, lineHeight: 40}}>Meet in Person</Text>
        <Text style={{marginTop: 5, color: '#B1B5C3', fontWeight: '400', fontSize: 14, lineHeight: 24}}>Schedule a time to discuss the feedback</Text>
      </View>

      <View style={{margin: 24, borderTopWidth: 1, borderTopColor: '#B1B5C3'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 25}}>
          <Icon name="calendar-outline" size={24} color='#777E90'/>
          <Text style={{ color: '#FFFFFF', fontWeight: '700', fontSize: 16, lineHeight: 24, paddingLeft: 5}}>Schedule Details</Text>
        </View>

        <View style={{ marginTop: 24 }}>
          <Text style={{ color: '#B1B5C3', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase' }}>Date</Text>
          <TouchableOpacity>
          <View style={{ minWidth: 327, height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: '#353945', borderRadius: 12, alignItems: 'center', marginTop: 12}}>
            <Text style={{color: '#FCFCFD', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18}}>Mon · Aug 24, 2022</Text>
            <Icon name="chevron-down-circle-outline" size={24} color='#777E90' style={{marginRight: 10}} />
            </View>
            </TouchableOpacity>
        </View>

        <View style={{ marginTop: 24, minWidth: 327, flexDirection: 'row', justifyContent: 'flex-start' }}>
          <View style={{minWidth: 157.5, justifyContent: 'flex-start' }}>
          <Text style={{ color: '#B1B5C3', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase', width: 157.5 }}>Start time</Text>
          <View style={{  height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: '#353945', borderRadius: 12, alignItems: 'center', marginTop: 12}}>
            <Text style={{color: '#FCFCFD', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18}}>1:00 PM</Text>
            <Icon name="chevron-down-circle-outline" size={24} color='#777E90' style={{marginRight: 10}} />
            </View>
          </View>
          <View style={{minWidth: 157.5, justifyContent: 'flex-start', marginLeft: 12  }}>
          <Text style={{ color: '#B1B5C3', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase'}}>End time</Text>
          <View style={{ height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: '#353945', borderRadius: 12, alignItems: 'center', marginTop: 12}}>
            <Text style={{color: '#FCFCFD', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18}}>1:30 PM</Text>
            <Icon name="chevron-down-circle-outline" size={24} color='#777E90' style={{marginRight: 10}} />
            </View>
          </View>
        </View>

        <View style={{marginTop: 24}}>
          <Text style={{ color: '#B1B5C3', fontWeight: '700', fontSize: 12, lineHeight: 12, textTransform: 'uppercase'}}>Location</Text>
          <View style={{ minWidth: 327, height: 48, flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: '#353945', borderRadius: 12, alignItems: 'center', marginTop: 12}}>
            <TextInput style={{ color: '#FCFCFD', fontWeight: '500', fontSize: 14, lineHeight: 24, marginLeft: 18 }}
              placeholder={'Type your location...'}
              placeholderTextColor='#777E90'></TextInput>
          </View>
        </View>

        <TouchableOpacity style={{ backgroundColor: '#FFFFFF', minWidth: 351, height: 48, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 150 }}
        onPress={() => handleScheduleDiscussion()}>
          <Text style={{color: '#353945', fontWeight: '700', fontSize: 16, lineHeight: 16}}>Schedule Discussion</Text>
        </TouchableOpacity>
      </View>
      

      </SafeAreaView>
  )
}

export default ScheduleDiscussion;
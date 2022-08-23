import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  BackHandler,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper'
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import ScrollPicker from 'react-native-wheel-scrollview-picker';
import CaptureMomentActions from 'app/store/CaptureFeedbackMomentRedux';
import CaptureMomentStep1  from './capture-step1';
import CaptureMomentStep2  from './capture-step2';
import CaptureMomentStep3  from './capture-step3';
import CaptureMomentStep4 from './capture-step4';
import styles from './styles';
import Images from 'app/assets/images';

const hourPicker = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];

const CaptureFeedbackMoment = props => {
  const { navigation } = props;
  const { height } = Dimensions.get('window');
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => [ '50%', '75%'], []);
  const dispatch = useDispatch();
  const activeStep = useSelector(state => state.captureMoment.get('activeStep'));
  const maxStep = 4;
  const staffName = useSelector(state => state.captureMoment.get('step1').data);
  const layerOneTopics = useSelector(state => state.captureMoment.get('layerOneTopics'));
  const layerTwoTopics = useSelector(state => state.captureMoment.get('layerTwoTopics'));
  const [selectedStaff, setSelectedStaff] = useState();
  const [selectedLayerOne, setSelectedLayerOne] = useState(null);
  const [sheetType, setSheetType] = useState();

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  useEffect(() => {
    if (activeStep === 4)
      return;
    
    if (layerTwoTopics !== null)
    openSheet()
    else
    return
  }, [layerTwoTopics]);

  const handleGoBack = () => {
    if (activeStep === 1) navigation.goBack();
    else dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep - 1));
  }

  const selectTopic = (item) => {
    setSelectedLayerOne(item);
    setTimeout(() => {
      dispatch(CaptureMomentActions.fetchLayerTwoTopics(item))
    }, 300);
    bottomSheetRef.current?.close();
  }

  const selectSecondLayerTopic = (item) => {
    bottomSheetRef.current?.close();
    // dispatch(CaptureMomentActions.setCaptureData())
    dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1))
  }
  const openSheet = (type) => {
    if (type === 'reminder') 
      setSheetType('reminder');
    bottomSheetRef.current?.snapToIndex(0);
  }

  const setStaffSelection = async (item) => {
    console.log(item);
    setSelectedStaff(staffName)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureData('step1', item))
    }, 200);
    console.log(staffName);
    console.warn('select',staffName)
    setTimeout(() => {
      dispatch(CaptureMomentActions.setCaptureActiveStep(activeStep + 1));
    }, 300);
  }

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <CaptureMomentStep1 
        onPress={(item) => setStaffSelection(item)}
        />;
      case 2:
        return <CaptureMomentStep2 />;
      case 3:
        return <CaptureMomentStep3 
          onPress={() => openSheet()}
        />;

      case 4:
        return <CaptureMomentStep4
        onPress={() => openSheet('reminder')}
      />;
    }
  };

  const handleSheetContent = () => {
    if (sheetType === 'reminder') {
      return (
        <View style={{ marginTop: 24, backgroundColor: 'white'}}>
          <View style={{ alignItems: 'center', }}>
          <Image
            source={Images.bellEmoji}
            resizeMode='contain'
            style={{ width: 62, height: 62}}
          />
          <Text style={{ fontSize: 24, lineHeight: 30, fontWeight: '700', color: '#667080', textAlign: 'center'}}>Set Reminder</Text>
          <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '400', color: '#667080', textAlign: 'center', marginTop: 4, maxWidth: '80%'}}>How long before we remind you about this feedback?</Text>
        </View>
          <View style={{ marginTop: 12,height: 175, paddingHorizontal: 24}}>
          <ScrollPicker
        dataSource={hourPicker}
        selectedIndex={3}
        renderItem={(data, index) => (
          <View style={{ alignItems: 'center'}}>
            <Text style={{ fontSize: 24, lineHeight: 28, fontWeight:'400', color: '#667080'}}>{data === '1' ? `${data} hour` : `${data} hours`}</Text>
          </View>
          
      )}
        onValueChange={(data, selectedIndex) => {
          //
        }}
        wrapperHeight={180}
        wrapperColor='#FFFFFF'
        itemHeight={60}
        highlightColor='black'
        highlightBorderWidth={1}
      />

          </View>
          <View style={{ marginTop: 50, paddingHorizontal: 24}}>
          <Button
          mode='contained'
          onPress={() => {
            bottomSheetRef.current?.close()
            navigation.replace('Home')
          }}
          style={[styles.button, { marginBottom: 12 }]}
        >Confirm</Button>
         <Button
          mode='text'
          onPress={() => bottomSheetRef.current?.close()}
          style={[styles.button]}
        >Cancel</Button>
          </View>
        </View>
      )
    } else {
      return (
        <>
        {selectedLayerOne !== null ?
          <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.3, paddingVertical: 12}}>
          <Text style={{ fontSize: 16, lineHeight: 16, color: '#667080', fontWeight: '700'}}>Sub-topic</Text>
          <Text style={{ fontSize: 16, lineHeight: 16, color: '#667080', fontWeight: '400'}}>Detailed category about your chosen topic</Text>
        </View> 
        :
        <View style={{ alignItems: 'center', justifyContent: 'center', borderBottomWidth: 0.3, paddingVertical: 12}}>
          <Text style={{ fontSize: 16, lineHeight: 16, color: '#667080', fontWeight: '700'}}>Topic</Text>
          <Text style={{ fontSize: 16, lineHeight: 16, color: '#667080', fontWeight: '400'}}>What your feedback is related to</Text>
        </View>
}
        <View style={{ paddingHorizontal: 16, paddingTop: 20}}>
          {selectedLayerOne !== null ?
            layerTwoTopics.map((item, i) => (
              <TouchableOpacity 
                onPress={() => selectSecondLayerTopic(item)}
                style={{ 
                height: 48,
                borderBottomWidth: 0.3,
                marginBottom: 10,
                justifyContent: 'center'
                }}>
                <View style={{ flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',}}>
                <Text style={{ fontSize: 16, lineHeight: 22, fontWeight: '700', color: '#667080'}}>{item.name}</Text>
                <View style={{ width: 20, height: 20, borderRadius: 12, borderWidth: 2, borderColor: '#667080', opacity: 0.3, alignSelf: 'center',}}/>
                </View>
                <Text style={{ marginVertical: 4, fontSize: 14, lineHeight: 22, color: '#667080', fontWeight: '400'}}>{item.requires_face_to_face && '*requires Face-to-Face discussion'}</Text>
              </TouchableOpacity>
            ))
          :
        layerOneTopics.map((item, i) => (
          <TouchableOpacity 
            onPress={() => selectTopic(item)}
            style={{ 
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 48,
            borderBottomWidth: 0.3
            }}>
            <Text>{item.name}</Text>
            <View style={{ width: 20, height: 20, borderRadius: 12, borderWidth: 2}}/>
          </TouchableOpacity>
        ))
        }
        </View>
        </>
      )
    }
  }

  return (<View style={styles.container}>
    <SafeAreaView>
      <View style={styles.headerContainer}>
      <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleGoBack()}
          style={styles.icon}
      >
          <Icon name="chevron-back-outline" size={24} />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>Give feedback</Text>
        </View>
        <View style={styles.headerSpacer}/>
      </View>
      <View style={styles.stepsContainer}>
        {Array.apply(null, { length: maxStep }).map((item, i) => (
          <View
            key={i}
            style={i + 1 <= activeStep ? styles.activeStep : styles.inactiveStep}
          />
        ))}
      </View>
    </SafeAreaView>
    <View style={styles.contentContainer}>
      {activeStep !== 4 && <View style={styles.receipientContainer}>
        <Text style={styles.toText}>To:</Text>
        {selectedStaff &&
        <View style={styles.selectedNameContainer}>
          <View style={styles.selectedAvatar}/>
          <Text style={styles.selectedName}>{selectedStaff.name}</Text></View>
        }
      </View>}
      {handleStepContent()}
    </View>
    <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <View style={{ flex: 1 }}>
          {handleSheetContent()}
        </View></BottomSheet>
  </View>);
};

export default CaptureFeedbackMoment;

CaptureFeedbackMoment.propTypes = {};

CaptureFeedbackMoment.defaultProps = {};

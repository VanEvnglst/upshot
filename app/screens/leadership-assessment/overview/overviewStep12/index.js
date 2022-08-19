import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, ProgressBar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import LSAOverviewActions from 'app/store/LSAOverviewRedux';

const OverviewStep12 = () => {
    const dispatch = useDispatch();
    const questionTitle = useSelector(state => state.lsaOverview.get('overviewQuestions')[11]);
    const activeStep = useSelector(state => state.lsaOverview.get('activeStep'));
    const [optionSelection, setOptionSelection] = useState({
        key: null,
        title: '',
        value: 0,
    });

  const questionOption = [
    {
      key: '1',
      title: 'Always',
      value: '5',
    },
    {
      key: '2',
      title: 'Often',
      value: '4',
    },
    {
      key: '3',
      title: 'Sometimes',
      value: '3',
    },
    {
      key: '4',
      title: 'Rarely',
      value: '2',
    },
    {
      key: '5',
      title: 'Never',
      value: '1',
    },
  ];

  const handleSelection = option => {
    setOptionSelection(option);
    dispatch(LSAOverviewActions.setAssessmentActiveStep(activeStep + 1))
  }

//   const optionList = () => {
//     return questionOption.map(element => {
//       return (
//         <Button
//           mode="contained"
//           key={element.key}
//           style={{
//             marginTop: 24,
//             borderRadius: 24,
//             height: 40,
//             width: 321,
//             color: '#EEF1F4',
//           }}>
//           <Text style={{ fontSize: 14, fontWeight: '700' }}>
//             {element.optn}
//           </Text>
//         </Button>
//       );
//     });
//   };

  return (
    <View style={{ flex: 1, }}>
        <View style={{ flex: 5, backgroundColor: 'red'}}>
        <Text
        style={{
          width: 332,
          height: 60,
          marginTop: 24,
          fontWeight: '700',
          fontSize: 24,
          lineHeight: 30,
          color: '#667080',
        }}>
        {questionTitle.question}
      </Text>
      {questionOption.map(element => {
          return (
            <Button
              mode="outlined"
              onPress={() => handleSelection(element)}
              key={element.key}
              style={{
                marginTop: 24,
                borderRadius: 24,
                height: 40,
                width: 321,
                borderWidth:  element.key === optionSelection.key ? 2 : 1,
                backgroundColor:'#EEF1F4',
                justifyContent: 'center',
                alignItems: 'center'
              }}>
              <Text style={{ fontSize: 14, fontWeight: element.key === optionSelection.key ? '700' : '400', color:'#667080' }}>
                {element.title}
              </Text>
            </Button>
          );
        })}
      <Text
          style={{
            marginTop: 63,
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 22,
            textAlign: 'center',
            color: '#667080',
          }}>
          Questions
        </Text>
        <Text
          style={{
            marginTop: 4,
            marginLeft: 142.5,
            width: 47,
            height: 30,
            fontSize: 24,
            fontWeight: '700',
            lineHeight: 30,
          }}>
          1/15
        </Text> 
        </View>
    </View>
  );
};

export default OverviewStep12;

import React from 'react';
import { useCallback, useRef, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from 'react-redux';
import LeadershipSkillAreaActions  from 'app/store/LSARedux';
import styles from './styles';

const topicList = [
  {
    id: 1,
    topic: 'Patiently listening' 
  },
  {
    id: 2,
    topic: 'Communicate directly' 
  },
  {
    id: 3,
    topic: 'Supporting the individual' 
  },
  {
    id: 4,
    topic: 'Understanding others' 
  },
  {
    id: 5,
    topic: 'Articulating clearly' 
  },
  {
    id: 6,
    topic: 'Avoiding blame' 
  },
];

const ImproveSkills = props => {

  // const inputRef = useRef();
  // const skillSelection = useCallback(() => { inputRef.current.setNativeProps({button: 'sample'});

  // }, []);
  const dispatch = useDispatch();

  const [seTopic, setSeTopic] = useState([]);
  const [topicsList, setTopicsList] = useState([]);

  const selectedTopicList = useSelector(state => state.leadershipSkillArea.get('topicData'));

  const setTopicSelection = async item => {
    // setSelectedTopic(item);
    //dispatch(LeadershipSkillAreaActions.setTopicData('topicData',item.topic));
  };

  const checkSelectedTopic = item => {
    return topicsList.some(topic => topic.id === item.id);
  };  

  const handleRemoveSelection = item => {
    let newTopicList = topicsList;

    newTopicList = newTopicList.filter(newTopic => {return newTopic.id !== item.id});
    setTopicsList(newTopicList);
  }

  const handleSelection = item => {
    let newTopicList = topicsList;

    if(newTopicList.length < 3){
    if (checkSelectedTopic(item))
      newTopicList = newTopicList.filter(newTopic => newTopic.id !== item.id);
    else newTopicList = [...newTopicList, item];
    setTopicsList(newTopicList);
    }
  }


  return(
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}
            style={styles.icon}>
            <Icon name="chevron-back-outline" size={24} />
          </TouchableOpacity>
          
          <View style={styles.headerSpacer} />
        </View>
        <View style={styles.stepsContainer}>
          {Array.apply(null, { length: 3 }).map((item, i) => (
            <View
              key={i}
              style={
                i + 1 <= 2 ? styles.activeStep : styles.inactiveStep
              }
            />
          ))}
        </View>
      </SafeAreaView>
      <ScrollView>
      <View style={styles.contentContainer}>
        <Text style={styles.mainQuestionHeader}>What are the top 3 leadership skills you want to improve? 🎯</Text>
        
        <Text style={[styles.descriptionText, {paddingVertical: 29}]}>Rank your goals so Upshot can help you achieve them.</Text>
        <View style={styles.topSkillContainer}>
          <Text>1</Text>
          {topicsList.length > 0 && (
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}
              onPress={() => handleRemoveSelection(topicsList[0])}>
                   <View style={[styles.skillSelectionContainer, {justifyContent: 'space-between', flexDirection: 'row', width: 300, height: 40, paddingHorizontal: 8}]}>
                     <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080'}}>{topicsList[0]['topic']}</Text>
                     <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080'}}>x</Text>
                   </View>
                 </TouchableOpacity>
          )}
        </View>
        <View style={styles.topSkillContainer}>
          <Text>2</Text>
          {topicsList.length > 1 && (
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}
              onPress={() => handleRemoveSelection(topicsList[1])}>
                   <View style={[styles.skillSelectionContainer, {justifyContent: 'space-between', flexDirection: 'row',width: 300, height: 40, paddingHorizontal: 8}]}>
                     <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080'}}>{topicsList[1]['topic']}</Text>
                     <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080'}}>x</Text>
                   </View>
                 </TouchableOpacity>
          )}
        </View>
        <View style={styles.topSkillContainer}>
          <Text>3</Text>
          {topicsList.length > 2 && (
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}
              onPress={() => handleRemoveSelection(topicsList[2])}>
                   <View style={[styles.skillSelectionContainer, {justifyContent: 'space-between', flexDirection: 'row', width: 300, height: 40, paddingHorizontal: 8}]}>
                     <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080'}}>{topicsList[2]['topic']}</Text>
                     <Text style={{fontWeight: '400', fontSize: 16, lineHeight: 22, color: '#667080'}}>x</Text>
                   </View>
                 </TouchableOpacity>
          )}
        </View>
        <View style={styles.spacer}/>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {topicList.map((item, i) =>(
              <TouchableOpacity style={{marginHorizontal: 2, marginVertical: 8}}
              onPress={() => handleSelection(item)}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>{item.topic}</Text>
                </View>
              </TouchableOpacity>
              ))}
              
              {/* <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>Communicate directly</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>Understanding others</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>Articulating clearly</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>Avoiding blame</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>Supporting the individual</Text>
                </View>
              </TouchableOpacity> */}
        </View>
        </View>
        <View style={{marginVertical: 15}}>
          <Button style={styles.button}>
            <Text>Next</Text>
          </Button>
        </View>
        </ScrollView>
      </View>
  );
};

export default ImproveSkills;


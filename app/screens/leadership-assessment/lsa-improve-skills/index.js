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
  //const [selectedTopic, setSelectedTopic] = useState([]);
  console.warn('se', typeof seTopic);

  const selectedTopicList = useSelector(state => state.leadershipSkillArea.get('topicData'));

  const setTopicSelection = async item => {
    // setSelectedTopic(item);
    //dispatch(LeadershipSkillAreaActions.setTopicData('topicData',item.topic));
  };

  const handleSelection = item => {
    setSeTopic.push(item)
  }

  const TopicSelection = () => {
    return (
      <View>
        {selectedTopicList && (
            <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>{selectedTopicList.data}</Text>
                </View>
              </TouchableOpacity>
        )}
      </View>
    );
debugger;
  };
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
          {seTopic && (
            <TouchableOpacity style={{marginHorizontal: 4, marginVertical: 8, maxWidth: 150}}>
                <View style={styles.skillSelectionContainer}>
                  <Text style={styles.skillSelectionText}>{seTopic[0]}</Text>
                </View>
              </TouchableOpacity>
        )}
        </View>
        <View style={styles.topSkillContainer}>
          <Text>2</Text>

        </View>
        <View style={styles.topSkillContainer}>
          <Text>3</Text>

        </View>
        <View style={styles.spacer}/>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {topicList.map((item, i) =>(
              <TouchableOpacity style={{marginHorizontal: 2, marginVertical: 8}}
              onPress={() => handleSelection(item.topic)}>
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


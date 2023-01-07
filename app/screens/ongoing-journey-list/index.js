import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import { ProgressBar, Button } from 'react-native-paper';
import FeedbackHistoryActions from 'app/store/feedback/FeedbackHistoryRedux';
import { getOngoingJourneysList } from 'app/store/selectors';
import Images from 'app/assets/images';
import { UserAvatar } from 'app/components';
import { DataUtil } from 'app/utils';

const OngoingJourneyList = props => {
  const { navigation, route } = props;
  const [contentDisplay, setContentDisplay] = useState('');
  const dispatch = useDispatch();
  const ongoingJourneysList = useSelector(getOngoingJourneysList);

  useEffect(() => {
    setContentDisplay(route.params.title)
  }, []);

  useEffect(() => {
    dispatch(FeedbackHistoryActions.fetchOngoingJourney());
  }, []);
  
  const handleGoBack = () => {
    navigation.goBack();
  };
  console.log('content', contentDisplay + ",  " + route.params.title);
  const handleContentList = () => {
    switch (contentDisplay) {
      case 'Ongoing Journey':
        return ongoingJourneys();
      case 'Scheduled Discussion List':
        return handleContentStyle();
        
    }

  }

  const handleContentStyle = () => {
    return (
      <></>
    )
  }

  const ongoingJourneys = () => {
    return (
      <>
        
        {/* {ongoingJourneysList.slice(0).reverse().map((item, i) => (
         <FeedbackJourneyCard key={i} item={item}/>
       ))} */}
      </>
    )

  }

  const renderItem = ({item, i}) => { 
    return (
      <FeedbackJourneyCard key={i} item={item} />
    )
  }

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };

  const FeedbackJourneyCard = ({ item }) => { 
    // for mapping
    return (
      <TouchableOpacity style={{ backgroundColor: '#23262F', minWidth: 343, borderRadius: 12, marginBottom: 8, marginHorizontal: 16}}>
         <View style={{margin: 16, flexDirection: 'row', maxWidth: 311,}}>
          <View style={{ width: 58, height: 58, justifyContent: 'center', alignItems: 'flex-end',}}>
          <UserAvatar 
              initials={DataUtil.parseInitials(item.frontliner_name)}
               />
          
          </View>
          <View style={{marginLeft: 16}}>
            <Text style={{ fontWeight: '700', fontSize: 12, lineHeight: 12, color: '#3772FF' }}>{item.current_progress.title}</Text>
            <Text style={{ fontWeight: '700', fontSize: 16, lineHeight: 24, color: '#FFFFFF' }}>{item.frontliner_name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {item.feedback_type === 'Positive' ?
                <>
                <Icon name="heart" size={12} color={'#3AB549'} />
                <Text style={{ fontWeight: '600', fontSize: 12, lineHeight: 20, color: '#3AB549', marginLeft: 3 }}>{item.feedback_type}</Text>
                </>
                :
                <>
                <Icons name='pen-tool' size={12} color={'#EF466F'} />
                  <Text style={{ fontWeight: '600', fontSize: 12, lineHeight: 20, color: '#EF466F', marginLeft: 3 }}>{item.feedback_type}</Text>
                  </>
               
              }
              {item.requires_face_to_face ?
                <Text style={{ fontWeight: '600', fontSize: 12, lineHeight: 20, color: '#777E90' }}> · 1-on-1</Text>
                :
                <Text style={{ fontWeight: '600', fontSize: 12, lineHeight: 20, color: '#777E90' }}> · Async</Text>
              }
              </View>
            <Text numberOfLines={2} style={{ fontWeight: '400', fontSize: 12, lineHeight: 20, color: '#777E90', maxWidth: 237 }}>{item.general_topic} · {item.subtopic}</Text>
            </View>
          </View>
        </TouchableOpacity>
    )

  }

  return (
    <View style={{flex: 1, backgroundColor: '#141416'}}>
    <SafeAreaView style={{borderBottomWidth: 1, borderBottomColor: '#353945'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 12, marginLeft: 20, marginRight: 16}}>
          
          <TouchableOpacity
            accessibilityRole="button"
            onPress={() => handleGoBack()}
            style={styles.icon}>
            <Icon name="chevron-back-outline" size={24} color={'#667080'} />
          </TouchableOpacity>
          
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text type="body2" weight="bold" style={{
              color: '#FFFFFF', fontWeight: '700', fontSize: 16, lineHeight: 24}}>
              Ongoing
            </Text>
            <Icon name="chevron-down-outline" size={18} color={'#667080'} />
          </View>
          <Icon name="search-outline" size={24} color={'#667080'} />
        </View>
      </SafeAreaView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 13, marginHorizontal: 16 }}>
        <View style={{width: 109, backgroundColor: '#6200EE', height: 40, borderRadius: 90, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 16, color: '#FCFCFD'}}>All</Text>
        </View>
        <View style={{width: 109, borderColor: '#353945', borderWidth: 2, height: 40, borderRadius: 90, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 16, color: '#FCFCFD'}}>Positive</Text>
        </View>
        <View style={{width: 109, borderColor: '#353945', borderWidth: 2, height: 40, borderRadius: 90, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 14, fontWeight: '700', lineHeight: 16, color: '#FCFCFD'}}>Corrective</Text>
        </View>
      </View>
      
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, marginHorizontal: 16, marginBottom: 10 }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon name="filter" size={12} color={'#667080'} />
          <Text style={{color: '#FFFFFF', fontSize: 14, fontWeight: '400', lineHeight: 24, marginLeft: 5}}>Most Recent</Text>
        </View>
        <View style={{height: 32, width: 32, borderColor: '#353945', borderWidth: 2, borderRadius: 12, justifyContent: 'center', alignItems: 'center'}}>
        <Icon name="grid" size={12} color={'#667080'} />
        </View>
      </View>
      
      {/* <ScrollView style={{marginHorizontal: 16, marginTop: 12}}>
       {ongoingJourneysList.slice(0).reverse().map((item, i) => (
         <FeedbackJourneyCard key={i} item={item}/>
       ))}
        
      </ScrollView> */}

      <FlatList data={ongoingJourneysList.slice(0).reverse()}
        renderItem={renderItem}
        keyExtractor={item => item.journey_id}
        />
      
      </View>
  );
};

export default OngoingJourneyList;

OngoingJourneyList.propTypes = {};

OngoingJourneyList.defaultProps = {};
import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Animated,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Header, Text, Wrapper } from 'app/components';

const { width, height } = Dimensions.get('screen');
const SPACING = 10;
const ITEM_WIDTH = width * 0.8;

const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.8;
const ITEM_HEIGHT = ITEM_SIZE * 1.6;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 3;

const DiscussingMeeting = props => {
  const { navigation } = props;
  const scrollX = useRef(new Animated.Value(0)).current;

  const contentValues = [
    { key: 'empty-left' },
    {
      title: 'Check in',
      content: '',
    },
    {
      title: 'State the purpose of this meeting',
      content: '',
    },
    {
      title: 'Describe your observations',
      content: '',
    },
    {
      title: 'Listen deeply',
      content: '',
    },
    {
      title: 'Brainstorm an action plan together',
      content: '',
    },
    {
      title: 'Evaluate ideas together',
      content: '',
    },
    {
      title: 'Agreen on your next steps',
      content: '',
    },
    {
      title: 'Check-out',
      content: '',
    },
    {
      title: 'Thank and support them',
      content: '',
    },
    { key: 'empty-right' },
  ];

  const data = contentValues.map((item, index) => ({
    key: String(index),
    title: item.title,
    content: item.content,
  }));

  const DiscussionCard = ({ title, content }) => {
    return (
      <View
        style={{
          borderRadius: 10,
          flex: 2,
          backgroundColor: '#F5F5F5aaaa',
          marginHorizontal: 12,
          padding: 20,
        }}>
        <Text type="h5">{title}</Text>
        <Text>{content}</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Animated.FlatList
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: true },
          )}
          snapToInterval={ITEM_SIZE}
          snapToAlignment="start"
          decelerationRate={0}
          bounces={false}
          // scrollEventThrottle={16}
          data={data}
          keyExtractor={item => item.key}
          pagingEnabled
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            if (!item.title) {
              return <View style={{ width: EMPTY_ITEM_SIZE }} />;
            }
            const inputRange = [
              (index - 2) * ITEM_SIZE,
              (index - 1) * ITEM_SIZE,
              index * ITEM_SIZE,
            ];
            // const translateX = scrollX.interpolate({
            //   inputRange,
            //   outputRange: [-width * 0.7, 0, width * 0.7],
            // });

            return (
              <View
                style={{
                  width: ITEM_SIZE,
                }}>
                <View
                  style={{
                    backgroundColor: '#F5F5F5',
                    height: ITEM_HEIGHT,
                    marginHorizontal: SPACING,
                    padding: SPACING * 2,
                    borderRadius: 10,
                    shadowColor: '#000',
                    shadowRadius: 30,
                    shadowOpacity: 0.5,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    elevation: 4
                  }}>
                  <Text type="h5">{item.title}</Text>
                </View>
              </View>
              // <View style={styles.content}>
              //   <Animated.View
              //   style={{
              //
              //       width: ITEM_SIZE,
              //
              //       borderWidth: 1,
              //       borderColor: '#000',
              //
              //       padding: 20,
              //       marginHorizontal: 10,
              //       // transform: [{translateX}]
              //   }}
              //       >
              //   <Text type="h5">{item.title}</Text>
              //     <View style={styles.imgContainer}>

              //     </View>
              //   </Animated.View>
              // </View>
              // <View
              //
              // }}>
              //   </View>
            );
          }}
        />
        <View
          style={{
            marginVertical: 20,
            marginHorizontal: 10,
          }}>
          <Button 
            mode="contained" 
            onPress={() => console.log('End meeting')}
            style={{ height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderWidth: 0.5, }}  
          >
            <Text type="button" style={{ color: '#00000'}}>End Meeting</Text>
          </Button>
        </View>
        {/* <View
         
          
        </View>
        
      
      <View
        style={{
          justifyContent: 'flex-end',
          height: 65,
          backgroundColor: 'blue',
        }}
      /> */}
      </Wrapper>
    </View>
  );
};

export default DiscussingMeeting;

DiscussingMeeting.propTypes = {};
DiscussingMeeting.defaultProps = {};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 18,
    shadowColor: '#000',
    shadowRadius: 30,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    padding: 12,
    backgroundColor: 'white',
  },
  imgContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    overflow: 'hidden',
    alignItems: 'center',
    borderRadius: 14,
  },
  image: {
    width: ITEM_WIDTH * 1.4,
    height: ITEM_HEIGHT,
    resizeMode: 'cover',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: 'white',
    position: 'absolute',
    bottom: -30,
    right: 60,
  },
});

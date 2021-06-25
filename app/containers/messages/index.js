import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StatusBar, Image, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
// import faker from 'faker';

import styles from './styles';
import { data } from './data';

const SPACING = 20;
const AVATAR_SIZE = 70;
const ITEM_SIZE = AVATAR_SIZE + SPACING * 3;

// const DATA = [...Array(30).keys()].map((_, i) => {
//   return {
//     key: faker.random.uuid(),
//     image: `https://randomuser.me/api/portratits/${faker.helpers.randomize([
//       'women',
//       'men',
//     ])}/${faker.random.number(60)}.jpg`,
//     name: faker.name.findName(),
//     jobTitle: faker.name.jobTitle(),
//     email: faker.internet.email(),
//   };
// });

// const renderMessage = ({ item, index }) => {
//   return;
// };

const MessageCard = item => {
  return (
    <Animated.View style={styles.messageCard}>
      <Icon name={'person-circle-outline'} size={36} color={'#212121'} />
      {/* <Image source={{ uri: item.image }} style={styles.avatar} /> */}
      <View style={styles.content}>
        <Text style={styles.textName}>{item.item.name}</Text>
        <Text style={styles.messageHeader}>{item.item.header}</Text>
        <Text style={styles.textMessage}>{item.item.message}</Text>
      </View>
    </Animated.View>
  );
};

const Messages = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={item => item.key}
        contentContainerStyle={{
          padding: SPACING,
          paddingTop: StatusBar.currentHeight || 42,
        }}
        renderItem={({ item, index }) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });
          return (
            // <View
            //   style={{
            //     backgroundColor: 'red',
            //     width: '200',
            //     height: '50',
            //   }}></View>
            <MessageCard item={item} />
          );
        }}
      />
    </View>
  );
};

export default Messages;

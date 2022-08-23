import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';


const ExploreScreen = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const activeListeningSample = [
    {
      id: 1,
      title: 'Active listening',
      description: `Advocating for your employees' growth and optimal performance with feedback`,
    },
    {
      id: 2,
      title: 'Active listening',
      description: `Advocating for your employees' growth and optimal performance with feedback`,
    },
    {
      id: 3,
      title: 'Active listening',
      description: `Advocating for your employees' growth and optimal performance with feedback`,
    },
    {
      id: 4,
      title: 'Active listening',
      description: `Advocating for your employees' growth and optimal performance with feedback`,
    }
  ];

  const Card = ({ title, isRecommended, description, mainCard}) => {
    return (
    <TouchableOpacity style={[styles.cardContainer, { maxWidth: mainCard ? '100%' : '70%' }]}>
    <View style={styles.cardImageContainer}>
      {isRecommended && <View style={styles.recommendedBadge}>
        <Text style={styles.recommendedBadgeText}>Recommended for you</Text>
      </View>}
    </View>
    <View style={styles.cardContentContainer}>
      <Text style={styles.cardTitleText}>{title}</Text>
      <Text style={styles.cardDescriptionText}>{description}</Text>
    </View>
  </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <SafeAreaView style={{ borderBottomWidth: 0.3}}>
          <View style={[styles.headerContainer, styles.addedPadding]}>
          <Text style={styles.headerTitleText}>Explore</Text>
          <View style={styles.headerIconsContainer}>
          <TouchableOpacity>
          <Icon
              name={'medal-outline'}
              color={'#667080'}
              size={22}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon
              name={'settings-outline'}
              color={'#667080'}
              size={22}
            />
            </TouchableOpacity>
            <TouchableOpacity>
            <Icon
              name={'notifications-outline'}
              color={'#667080'}
              size={22}
            />
            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.addedPadding}>
          <View style={styles.searchContainer}>
            <Icon
              name={'search-outline'}
              color={'#667080'}
              size={12}
            />
            <Text style={styles.searchText}>Search for journeys or single exercises...</Text>
            </View>
          </View>
        </SafeAreaView>
        <View style={{ marginTop: 20, flex: 1}}>
          <Card 
            title={'Feedback Coaching'}
            description={`Advocating for your employees' growth and optimal performance with feedback`}
            isRecommended
            mainCard
          />
          <View style={styles.catergoryContainer}>
            <Text style={styles.categoryTitleText}>Get started</Text>
            <Text style={styles.categoryDescriptionText}>Learn the basics of leadership and learn more about yourself.</Text>
          </View>
          <ScrollView 
            horizontal
            style={styles.addedMargin}>
            {activeListeningSample.map((item, i) => (
              <Card
                title={item.title}
                description={item.description}
              />
            ))}
          </ScrollView>
          <View style={styles.catergoryContainer}>
            <Text style={styles.categoryTitleText}>Communicate directly</Text>
            <Text style={styles.categoryDescriptionText}>Learn the basics of leadership and learn more about yourself.</Text>
          </View>
          <ScrollView 
            horizontal
            style={styles.addedMargin}>
            {activeListeningSample.map((item, i) => (
              <Card
                title={item.title}
                description={item.description}
              />
            ))}
          </ScrollView>
          <View style={styles.catergoryContainer}>
            <Text style={styles.categoryTitleText}>Single Exercises</Text>
            <Text style={styles.categoryDescriptionText}>Learn the basics of leadership and learn more about yourself.</Text>
          </View>
          <ScrollView 
            horizontal
            style={styles.addedMargin}>
            {activeListeningSample.map((item, i) => (
              <Card
                title={item.title}
                description={item.description}
              />
            ))}
          </ScrollView>
          <View style={styles.catergoryContainer}>
            <Text style={styles.categoryTitleText}>Articulate clearly</Text>
            <Text style={styles.categoryDescriptionText}>Learn the basics of leadership and learn more about yourself.</Text>
          </View>
          <ScrollView 
            horizontal
            style={styles.addedMargin}>
            {activeListeningSample.map((item, i) => (
              <Card
                title={item.title}
                description={item.description}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.viewSpacer} />
      </ScrollView>
    </View>
  )
}

export default ExploreScreen;

ExploreScreen.propTypes = {};

ExploreScreen.defaultProps = {};
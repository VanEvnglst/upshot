import React, { useState, useEffect } from 'react';
import { View, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'app/components';
import styles from './styles';
import Images from 'app/assets/images';


const ExploreScreen = props => {
  const { navigation } = props;
  const dispatch = useDispatch();

  const Card = ({iconImage, title, isRecommended, description, mainCard}) => {
    return (
    <>
    {isRecommended && <View style={styles.recommendedBadge}>
        <Text type='caption2' weight='bold' style={styles.recommendedBadgeText}>Recommended for you</Text>
      </View>}
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.cardImageContainer}>
            <Image
              source={iconImage}
              resizeMode="contain"
              style={{height: 99, width: 99}} />
      
          </View>
          <View style={styles.cardContentContainer}>
            <Text style={styles.cardTitleText}>{title}</Text>
            <Text style={styles.cardDescriptionText}>{description}</Text>
          </View>
        </View>
    </>
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
            <TouchableOpacity
              accessibilityRole='button'
              onPress={() => navigation.navigate('Frontliner')}
            >
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
        <TouchableOpacity style={styles.cardContainer}
        onPress={() => navigation.navigate('Home')}>
        <View>
          <Card 
            iconImage={Images.clipboardEmoji}
            title={'Feedback Coaching'}
            description={`Advocating for your employees' growth and optimal performance with feedback`}
            isRecommended
            mainCard
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
        <View>
          <Card 
            iconImage={Images.managingConflict}
            title={'Managing Conflict'}
            description={`Dealing with conflicts that could affect performance with recommended actions to deal with them`}
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
         <View>
          <Card 
            iconImage={Images.buildingResilience}
            title={'Building Resilience'}
            description={`Recovering quickly from difficulties and maintaining your overall well-being`}
          />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
        <View>
          <Card 
            iconImage={Images.clockEmoji}
            title={'Prioritizing & Delegating'}
            description={`Practicing techniques for effective team collaboration and empowering team members with the right level of autonomy`}
          />
          </View>
        </TouchableOpacity>
        <View style={styles.viewSpacer} />
      </ScrollView>
    </View>
  )
}

export default ExploreScreen;

ExploreScreen.propTypes = {};

ExploreScreen.defaultProps = {};
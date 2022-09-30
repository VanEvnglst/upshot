import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  SafeAreaView,
  Animated,
  Dimensions,
  BackHandler,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import styles from './styles';
import {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useAnimatedProps,
} from 'react-native-reanimated';

const { width } = Dimensions.get('screen');
const StartingGuideScreen = props => {
  const { navigation } = props;
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef(null);
  const totalSteps = 4;
  const currentIndex = 1;
  const [index, setIndex] = useState(0);
  const isScrolling = useSharedValue(false);
  const lastContentOffset = useSharedValue(0);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  // useEffect(() => {
  //   scrollX.addEventListener(({ value }) => {
  //     console.warn('va', value)
  //   })
  // }, []);

  const guideList = [
    {
      id: 1,
      title: 'Upshot can help.',
      subtitle: 'can help.',
      isCentered: true,
    },
    {
      id: 2,
      title: 'Act your way to better leadership through guided practice.',
      subtitle: '',
      isCentered: false,
    },
    {
      id: 3,
      title: 'Sharpen your skills based on real time performance scores.',
      subtitle: '',
      isCentered: false,
    },
    {
      id: 4,
      title: 'Welcome to Upshot',
      subtitle: '',
      description:
        "Thanks for giving Upshot a shot! Let's get started by creating your account.",
        isCentered: false,
    },
  ];

  const skipToLast = index => {
    setIndex(index);
    flatlistRef.current?.scrollToIndex({
      index,
      animated: true,
    });
  };

  const renderSteps = () => {
    const stepPosition = Animated.divide(scrollX, width);

    return (
      <View style={styles.stepsContainer}>
        {guideList.map((item, i) => {
          const opacity = stepPosition.interpolate({
            inputRange: [i - 1, i, i + 1, i + 2],
            outputRange: [0.5, 1, 1, 1],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={`step-${i}`}
              opacity={opacity}
              style={styles.activeStep}
            />
          );
        })}
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      {renderSteps()}
      <Animated.FlatList
        ref={flatlistRef}
        initialScrollIndex={index}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        snapToAlignment={'center'}
        onScroll={
          Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true },
        )}
        keyExtractor={item =>item.id}
        data={guideList}
        renderItem={({ item, i}) => {
          return (
            <View key={item.id} style={styles.guideContainer}>
            <View style={styles.headerContainer}>
              <Text style={[styles.titleText, item.isCentered && styles.centeredText]}>
                {item.title}
              </Text>
              {item.description && (
                <Text
                  style={[
                    styles.descriptionText,
                    { maxWidth: '80%', marginTop: 30 },
                  ]}>
                  {item.description}
                </Text>
              )}
            </View>
            <View style={styles.guideImageContainer} />
            <View style={styles.skipContainer}>
              {index === 3 ? (
                <View style={{ width: '100%' }}>
                  <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Sign up')}
                    style={{
                      marginTop: 8,
                      borderWidth: 1,
                      height: 55,
                      backgroundColor: '#667080',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginBottom: 15,
                    }}>
                    <Text style={{ color: 'white' }}>Sign up</Text>
                  </Button>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'center',
                    }}>
                    <Text style={styles.descriptionText}>
                      Already have an account?
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Sign in')}>
                      <Text
                        style={[
                          styles.descriptionText,
                          {
                            textDecorationLine: 'underline',
                            marginLeft: 4,
                          },
                        ]}>
                        Log in
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                <TouchableOpacity onPress={() => skipToLast(3)}>
                  <Text style={styles.descriptionText}>Skip</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          )
        }}
        />
    </SafeAreaView>
  );
};

export default StartingGuideScreen;

StartingGuideScreen.propTypes = {};

StartingGuideScreen.defaultProps = {};

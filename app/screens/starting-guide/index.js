import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  SafeAreaView,
  Animated,
  Dimensions,
  BackHandler,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet, { BottomSheetBackdrop, BottomSheetTextInput } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Button } from 'react-native-paper';
import { Text } from 'app/components';
import SignIn from 'app/screens/sign-in';
import SignUp from 'app/screens/sign-up';
import styles from './styles';

const { width, height } = Dimensions.get('screen');

const StartingGuideScreen = props => {
  const { navigation } = props;
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatlistRef = useRef(null);
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ['85%'], []);
  const [index, setIndex] = useState(0);
  const [sheetType, setSheetType] = useState('');

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


  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const openSheet = type => {
    setSheetType(type);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const closeSheet = () => {
    setSheetType('');
    bottomSheetRef.current?.close();
    Keyboard.dismiss();
  }

  const handleSheets = () => {
    if(sheetType === 'sign in')
      setSheetType('sign up')
    else
      setSheetType('sign in')
  }

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
              <Text type='h4' weight='bold' style={[styles.titleText, item.isCentered && styles.centeredText]}>
                {item.title}
              </Text>
              {item.description && (
                <Text
                type='body2'
                weight='regular'
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
              {item.title === 'Welcome to Upshot' ? (
                <View style={{ width: '100%' }}>
                  <Button
                    mode="contained"
                    onPress={() => openSheet('sign up')}
                    style={styles.signUpButton}>
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
                      onPress={() => openSheet('sign in')}>
                      <Text
                      type='body2'
                      weight='regular'
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
                  <Text type='body2' weight='regular' style={styles.descriptionText}>Skip</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
          )
        }}
        />
        <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        containerHeight={height}
        backdropComponent={BottomSheetBackdrop}
        keyboardBehavior="fillParent"
        keyboardBlurBehavior="restore"
        >
        <View style={styles.container}>
          <View style={styles.bottomSheetHeader}>
            <TouchableOpacity
              accessibilityRole='button'
              onPress={() => closeSheet()}
            >
              <Icon name='close-outline'
                size={24}
                color={'#353945'}
                style={styles.container}
              />
            </TouchableOpacity>
            <Text type='body2' weight='bold' style={styles.bottomSheetTitle}>{sheetType === 'sign in' ? 'Log In' : 'Sign Up'}</Text>
            <TouchableOpacity
              accessibilityRole='button'
              onPress={() => handleSheets()}
            >
            <Text type='body2' weight='medium' style={styles.bottomSheetOption}>{sheetType === 'sign in' ? 'Sign Up' : 'Log In'}</Text>
            </TouchableOpacity>
          </View>
           {sheetType === 'sign in' && <SignIn/>}
          {sheetType === 'sign up' && <SignUp/>}
        </View>
      </BottomSheet>
    </SafeAreaView>
  );
};

export default StartingGuideScreen;

StartingGuideScreen.propTypes = {};

StartingGuideScreen.defaultProps = {};

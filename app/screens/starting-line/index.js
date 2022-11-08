import React, { useState, useRef, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Text } from 'app/components';
import styles from './styles';
import SignIn from '../sign-in';
import SignUp from '../sign-up';

const StartingLineScreen = props => {
  const { navigation } = props;
  const bottomSheetRef = useRef(null);
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => ['95%'], []);
  const [sheetType, setSheetType] = useState('');

  const openSheet = type => {
    setSheetType(type);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const closeSheet = () => {
    setSheetType('');
    bottomSheetRef.current?.close();
  }

  const handleSheets = () => {
    if(sheetType === 'sign in')
      setSheetType('sign up')
    else
      setSheetType('sign in')
  }

  return (
    <View style={styles.container}>
      <View
        style={styles.header}>
        <Text
          type='h4'
          weight='bold'
          style={styles.headerTitle}>
          What if you can track your own
        </Text>
        <Text
          type='h4'
          weight='bold'
          style={styles.headerTitleDark}>
          {'leadership\nperformance?'}
        </Text>
      </View>
      <View style={{ flex: 2 }} />
      <View
        style={styles.actionContainer}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Starting guide')}
          style={styles.button}>
          <Text type='body2' weight='bold' style={styles.tellMeMoreText}>tell me more</Text>
        </Button>
        <Button
          mode="contained"
          onPress={() => openSheet('sign up')}
          style={[styles.button, styles.newAccountButton]}>
          <Text 
            type='body2'
            weight='bold'
          style={styles.signUpBtnText}>Sign up</Text>
        </Button>
      </View>
      <View style={styles.oldAccountContainer}>
        <Text type='caption1' weight='regular' style={styles.labelsText}>Already have an account?</Text>
        <TouchableOpacity onPress={() => openSheet('sign in')}>
          <Text type='caption1' weight='regular' style={styles.logInText}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        containerHeight={height}
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
      <View style={styles.spacer} />
    </View>
  );
};

export default StartingLineScreen;

StartingLineScreen.propTypes = {
  navigation: PropTypes.object,
};

StartingLineScreen.defaultProps = {
  navigation: {},
}
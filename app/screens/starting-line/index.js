import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { getSignInError } from 'app/store/selectors';
import { Text } from 'app/components';
import { InputUtil, DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import styles from './styles';
import SignIn from '../sign-in';

const StartingLineScreen = props => {
  const { navigation } = props;
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => ['95%'], []);
  const signInError = useSelector(getSignInError);
  const [sheetType, setSheetType] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const validate = () => {
    const errors = {};
    if (email.length === 0) {
      errors.emailError = labels.errors.emailRequired;
    }

    if (password.length === 0) {
      errors.passwordError = labels.errors.passwordRequired;
    }

    if (email && email.length !== 0 && !InputUtil.validateEmail(email)) {
      errors.emailError = labels.errors.validEmail;
    }

    return errors;
  };

  const signInUser = () => {
    console.warn('call sign in')
    // dispatch(AuthenticationActions.fetchServer({
    //   email,
    //   password,
    // }))
  };

  const signUpUser = () => {
    console.warn('call sign up');
    navigation.replace('Leadership Assessment Guide')
  }

  const openSheet = type => {
    console.warn('call');
    setSheetType(type);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const InputField = props => {
    const {
      label,
      placeholder,
      error,
      type,
      value
    } = props;
    return (
      <View style={{ marginBottom: 24,}}>
        <Text style={{ marginBottom: 4 }}>{label}</Text>
        <BottomSheetTextInput
          {...props}
          // secureTextEntry={type==='password'}
          placeholder={placeholder}
          style={{
            borderWidth: 1,
            borderColor: '#667080',
            height: 48,
            paddingHorizontal: 6,
            borderRadius: 6,
          }}
        />
        {error && error.length !== 0 && <Text>{error}</Text>}
      </View>
    );
  };

  const SignUpContainer = () => {
    return (
      <>
          <Formik
            initialValues={{
              email,
              password,
              name,
            }}
            // validate={() => validate()}
            onSubmit={() => signUpUser()}>
            {({ errors, handleSubmit }) => {
              return (
                <>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      height: '25%',
                      paddingLeft: 18,
                      paddingRight: 12,
                      borderBottomWidth: 1,
                    }}>
                    <TouchableOpacity>
                      <Text>X</Text>
                    </TouchableOpacity>
                    <Text
                      style={{
                        fontSize: 16,
                        lineHeight: 22,
                        fontWeight: '700',
                        paddingLeft: 30,
                      }}>
                      Sign up
                    </Text>
                    <TouchableOpacity onPress={() => setSheetType('sign in')}>
                      <Text>Log in</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingHorizontal: 22, marginTop: 30 }}>
                    <InputField
                      label={'Name'}
                      placeholder={'John Doe'}
                      autoFocus
                      value={name}
                      onChangeText={name => setName(name)}
                      error={errors.nameError}
                    />
                    <InputField
                      label={'Email'}
                      placeholder={'name@work-email.com'}
                      value={email}
                      onChangeText={email => setEmail(email)}
                      error={errors.emailError}
                    />
                    <InputField
                      label={'Password'}
                      placeholder={'8+ characters'}
                      secureTextEntry
                      value={password}
                      onChangeText={password => setPassword(password)}
                      error={errors.passwordError}
                    />
                    <Button
                      mode="contained"
                      style={{
                        marginTop: 30,
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 58,
                      }}
                      onPress={() => handleSubmit()}  
                    >
                      <Text>Sign up</Text>
                    </Button>
                  </View>
                </>
              );
            }}
          </Formik>
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, marginTop: 70, paddingLeft: 25, maxWidth: '70%' }}>
        <Text
          style={{
            fontSize: 32,
            lineHeight: 36,
            color: '#667080',
            opacity: 0.7,
            fontWeight: '700',
          }}>
          What if you can track your own
        </Text>
        <Text
          style={{
            fontSize: 32,
            lineHeight: 36,
            color: '#667080',
            fontWeight: '700',
          }}>
          {'leadership\nperformance?'}
        </Text>
      </View>
      <View style={{ flex: 2 }} />
      <View
        style={{
          flex: 1,
          paddingLeft: 25,
          paddingRight: 18,
          marginBottom: 15,
        }}>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Starting guide')}
          style={styles.button}>
          <Text>tell me more</Text>
        </Button>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('Sign up')}
          style={[styles.button, styles.newAccountButton]}>
          <Text style={{ color: 'black' }}>Sign up</Text>
        </Button>
      </View>
      <View style={styles.oldAccountContainer}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => openSheet('sign in')}>
          <Text style={styles.logInText}>
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
              onPress={() => {}}
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
              onPress={() => {}}
            >
            <Text type='body2' weight='medium' style={styles.bottomSheetOption}>{sheetType === 'sign in' ? 'Sign Up' : 'Log In'}</Text>
            </TouchableOpacity>
          </View>
           {sheetType === 'sign in' && <SignIn/>}
          {/* {sheetType === 'sign up' && <SignUpContainer />} */}
        </View>
      </BottomSheet>
      <View style={styles.spacer} />
    </View>
  );
};

export default StartingLineScreen;

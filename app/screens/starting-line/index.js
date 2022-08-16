import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { getSignInError } from 'app/store/selectors';
import { InputUtil, DeviceUtil } from 'app/utils';
import labels from 'app/locales/en';
import styles from './styles';

const StartingLineScreen = props => {
  const bottomSheetRef = useRef(null);
  const dispatch = useDispatch();
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => ['90%'], []);
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
    console.warn('call sign up')
  }

  const openSheet = type => {
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
        <TextInput
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

  const SignInContainer = () => {
    return (
      <>
          <Formik
            initialValues={{
              email,
              password,
            }}
            validate={() => validate()}
            onSubmit={() => signInUser()}>
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
                      Log in
                    </Text>
                    <TouchableOpacity onPress={() => setSheetType('sign up')}>
                      <Text>Sign up</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ paddingHorizontal: 22, marginTop: 30 }}>
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
                      <Text>Sign in</Text>
                    </Button>
                  </View>
                </>
              );
            }}
          </Formik>
      </>
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
            validate={() => validate()}
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
          style={{
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>tell me more</Text>
        </Button>
        <Button
          mode="contained"
          onPress={() => openSheet('sign up')}
          style={{
            marginTop: 8,
            borderWidth: 1,
            height: 55,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'black' }}>Sign up</Text>
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => openSheet('sign in')}>
          <Text style={{ textDecorationLine: 'underline', marginLeft: 4 }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 100 }} />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        containerHeight={height}>
        <KeyboardAvoidingView>
          {sheetType === 'sign in' && <SignInContainer />}
          {sheetType === 'sign up' && <SignUpContainer />}
        </KeyboardAvoidingView>
      </BottomSheet>
    </View>
  );
};

export default StartingLineScreen;

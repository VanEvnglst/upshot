import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import OnboardingActions from 'app/store/OnboardingRedux';
import { TextInput } from 'app/components';
import styles from './styles';

const Onboarding = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    role: 1,
    token: '',
  });

  useEffect(() => {
    retrieveToken();
  }, []);

  const updateData = data => setState({ ...state, ...data });

  const validate = () => {
    const { email, password, firstName, lastName } = state;
    const errors = {};
    if (email.length === 0) {
      errors.emailError = 'Email is required';
    }

    if (password.length === 0) {
      errors.passwordError = 'Password is required';
    }

    if (firstName.length === 0) {
      errors.firstNameError = 'First name is required';
    }

    if (lastName.length === 0) {
      errors.lastNameError = 'Last name is required';
    }

    return errors;
  };

  const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('fcmToken');
      updateData({ token: value });
    } catch (e) {
      console.log('retrieve error');
    }
  };

  const registerUser = () => {
    dispatch(OnboardingActions.signUpUser(state));
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Formik
        initialValues={{ state }}
        validate={() => validate()}
        validateOnChange={false}
        onSubmit={() => registerUser()}>
        {({ errors, handleSubmit }) => {
          return (
            <View style={styles.container}>
              <TextInput
                testID={'fld-onboarding-email'}
                placeholder="Email"
                style={{
                  height: 60,
                  margin: 20,
                  paddingHorizontal: 10,
                }}
                value={state.email}
                onChangeText={email => updateData({ email })}
              />
              <TextInput
                testID={'fld-onboarding-password'}
                placeholder="Password"
                style={{
                  height: 60,
                  margin: 20,
                  paddingHorizontal: 10,
                }}
                secureTextEntry
                value={state.password}
                onChangeText={password => updateData({ password })}
              />
              <TextInput
                testID={'fld-onboarding-firstName'}
                placeholder="First name"
                style={{
                  height: 60,
                  margin: 20,
                  paddingHorizontal: 10,
                }}
                value={state.firstName}
                onChangeText={firstName => updateData({ firstName })}
              />
              <TextInput
                testID={'fld-onboarding-lastName'}
                placeholder="Last name"
                style={{
                  height: 60,
                  margin: 20,
                  paddingHorizontal: 10,
                }}
                value={state.lastName}
                onChangeText={lastName => updateData({ lastName })}
              />
              <TouchableOpacity
                style={{
                  marginTop: 50,
                  width: 250,
                  height: 60,
                  backgroundColor: 'blue',
                  alignSelf: 'center',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                testID={'btn-onboarding-submit'}
                onPress={() => handleSubmit()}>
                <Text style={{ color: 'white' }}>Sign up</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default Onboarding;

Onboarding.propTypes = {
  signUpUser: PropTypes.func,
  //resetUser: PropTypes.func,
  onboardingLoading: PropTypes.bool,
  onboardingError: PropTypes.object,
};

Onboarding.defaultProps = {
  signUpUser: () => {},
  resetUser: () => {},
  onboardingLoading: false,
  onboardingError: {}
};
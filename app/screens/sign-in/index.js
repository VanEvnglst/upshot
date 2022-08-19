import React, { useEffect, useState } from 'react';
import { View, Image, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { getAuthLoading, getSignInError } from 'app/store/selectors';
import { TextInput, Loader, Text } from 'app/components';
import { InputUtil, DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from './styles';
import labels from '../../locales/en';

const SignIn = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const isLoading = useSelector(getAuthLoading);
  const signInError = useSelector(getSignInError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  useEffect(() => {
    retrieveToken();
  }, []);

  // useEffect(() => {
  //   if (signInError !== '') setErrorVisible(true);
  // }, [signInError]);

  const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('fcmToken');
      setToken(value);
    } catch (e) {
      console.log('retrieve error');
    }
  };

  const dismissSnackbar = () => setErrorVisible(false);

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
    dispatch(
      AuthenticationActions.fetchServer({
        email,
        password,
        token,
        type: 'sign in'
      }),
    );
  };
  
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={DeviceUtil.isIos() ? 'padding' : null}>
 <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerOptions}>
          <TouchableOpacity
          onPress={() => {}}
          >
        <Text>X</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Log in</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign up')}
        >
        <Text style={styles.buttonRightText}>Sign up</Text>
        </TouchableOpacity>
        </View>

      </View>
      </SafeAreaView>
        <View>
          <Formik
            initialValues={{
              email,
              password,
            }}
            validate={() => validate()}
            validateOnChange={true}
            onSubmit={() => signInUser()}>
            {({ errors, handleSubmit }) => {
              return (
                <View style={styles.formContainer}>
                  <Text style={styles.labelText}>Email</Text>
                  <TextInput
                    placeholder={'name@work-email.com'}
                    style={styles.inputField}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    error={errors.emailError}
                  />
                  <Text style={styles.labelText}>Password</Text>
                  <TextInput
                    placeholder={'Password'}
                    style={styles.inputField}
                    secureTextEntry
                    value={password}
                    onChangeText={password => setPassword(password)}
                    error={errors.passwordError}
                  />
                  <Button
                    mode="contained"
                    style={styles.button}
                    onPress={() => handleSubmit()}>
                    {labels.common.logIn}
                  </Button>
                </View>
              );
            }}
          </Formik>
        </View>
        <Snackbar 
          visible={errorVisible} 
          onDismiss={dismissSnackbar}
          action={{
            label: 'Ok',
            onPress: () => {
              dismissSnackbar()
            }
          }}
        >
        <Text>{signInError}</Text>
      </Snackbar>
        {/* {isLoading && <Loader />} */}
    </KeyboardAvoidingView>
  );
};

export default SignIn;

SignIn.propTypes = {
  signInUser: PropTypes.func,
  fetchServer: PropTypes.func,
  isLoading: PropTypes.bool,
  signInError: PropTypes.string,
};

SignIn.defaultProps = {
  signInUser: () => {},
  fetchServer: () => {},
  isLoading: false,
  signInError: '',
};

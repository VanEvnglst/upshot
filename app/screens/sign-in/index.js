import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { getAuthLoading } from 'app/store/selectors';
import { TextInput, Loader } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const SignIn = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const isLoading = useSelector(getAuthLoading);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    retrieveToken();
  }, []);

  const retrieveToken = async () => {
    try {
      const value = await AsyncStorage.getItem('fcmToken');
      setToken(value);
    } catch (e) {
      console.log('retrieve error');
    }
  };

  const validate = () => {
    const errors = {};
    if (email.length === 0) {
      errors.emailError = 'Email is required';
    }

    if (password.length === 0) {
      errors.passwordError = 'Password is required';
    }

    //Object.keys(errors).length !== 0 && this.s
    return errors;
  };

  const signInUser = () => {
    dispatch(
      AuthenticationActions.signInUser({
        email,
        password,
        token,
      }),
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={Images.upshotWhite}
          resizeMode='contain'
        />
      </View>
      <View style={styles.formContainer}>
      <Formik
        initialValues={{
          email,
          password,
        }}
        validate={() => validate()}
        validateOnChange={false}
        onSubmit={() => signInUser()}>
        {({ errors, handleSubmit }) => {
          return (
            <View
            style={styles.form}
              >
              <TextInput
                label="Email"
                placeholder="Email"
                style={styles.inputField}
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <TextInput
                label="Password"
                placeholder="Password"
                style={styles.inputField}
                secureTextEntry
                value={password}
                onChangeText={password => setPassword(password)}
              />
              <Button mode='contained'
              style={styles.button}
              onPress={() => handleSubmit()}>Log in</Button>
            </View>
          );
        }}
      </Formik>
      </View>
      {isLoading && <Loader />}
    </KeyboardAvoidingView>
  );
};

export default SignIn;

SignIn.propTypes = {
  signInUser: PropTypes.func,
  authLoading: PropTypes.bool,
};

SignIn.defaultProps = {
  signInUser: () => {},
  authLoading: false,
};

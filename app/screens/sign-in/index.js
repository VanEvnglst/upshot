import React, { useState } from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  Button,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/authenticationRedux';
import { TextInput } from 'app/components';
import styles from './styles';

const SignIn = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
      }),
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 36 }}>Upshot</Text>
      </View>
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
              style={{
                flex: 2,
                marginTop: 30,
                alignItems: 'center',
              }}>
              <TextInput
                label="Email"
                placeholder="Email"
                style={{
                  width: '95%',
                  height: 60,
                  margin: 20,
                  paddingHorizontal: 10,
                }}
                value={email}
                onChangeText={email => setEmail(email)}
              />
              <TextInput
                label="Password"
                placeholder="Password"
                style={{
                  margin: 20,
                  width: '95%',
                  height: 60,
                  paddingHorizontal: 10,
                }}
                secureTextEntry
                value={password}
                onChangeText={password => setPassword(password)}
              />

              <Button title="Sign in" onPress={() => handleSubmit()} />

              <TouchableOpacity
                onPress={() => navigation.navigate('Onboarding')}>
                <Text>Register here</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
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

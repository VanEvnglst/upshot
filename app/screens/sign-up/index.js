import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  SafeAreaView,
  StyleSheet
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { getSignInError } from 'app/store/selectors';
import { InputUtil, DeviceUtil } from 'app/utils';
import { TextInput } from 'app/components';
import labels from 'app/locales/en';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignUp = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
  }

  const validate = () => {
    const errors = {};

    if (name.length === 0) {
      errors.nameError = 'Name is required';
    }
    if (email.length === 0) {
      errors.emailError = labels.error.emailRequired;
    }

    if (password.length === 0) {
      errors.passwordError = labels.errors.passwordRequired;
    }

    if (email && email.length !== 0 && !InputUtil.validateEmail(email)) {
      errors.emailError = labels.errors.validEmail;
    }
    return errors;
  };

  const signUpUser = () => {
    dispatch(AuthenticationActions.fetchServer({
      name,
      email,
      password,
      token,
      type: 'sign up'
    }),);
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, }}
      behavior={DeviceUtil.isIos() ? 'padding' : null}>
      <SafeAreaView>
      <View style={styles.headerContainer}>
        <View style={styles.headerOptions}>
          <TouchableOpacity
          onPress={() => navigation.navigate('Starting line')}
          >
        <Text>X</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Sign up</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Sign in')}
        >
        <Text style={styles.buttonRightText}>Log in</Text>
        </TouchableOpacity>
        </View>

      </View>
      </SafeAreaView>
      <View>
        <Formik
          initialValues={{
            name,
            email,
            password
          }}
          validate={() => validate()}
          validateOnChange={true}
          onSubmit={() => signUpUser()}
        >
          {({ errors, handleSubmit }) => {
            return (
              <View style={styles.formContainer}>
                <Text style={styles.labelText}>Name</Text>
                <TextInput
                    placeholder={'John Doe'}
                    style={styles.inputField}
                    value={name}
                    onChangeText={name => setName(name)}
                    error={errors.nameError}
                  />
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
                    placeholder={'8+ characters'}
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
                    Create account
                  </Button>
              </View>
            )
          }}
        </Formik>
      </View>
    </KeyboardAvoidingView>
  );
};
export default SignUp;

const styles = StyleSheet.create({
  headerContainer: {
    marginTop: 20,
    borderBottomWidth: 0.5, 
    paddingBottom: 15
  },
  headerOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24
  },
  headerText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    paddingLeft: 30,
  },
  buttonRightText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '500'
  },
  formContainer: { 
    marginTop: 50, 
    paddingHorizontal: 24
  },
  inputField: {
    height: 48,
    paddingHorizontal: 10,
    width: '100%',
    marginBottom: 24,
  },
  labelText: {
    marginBottom: 4,
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 22,
    color: '#667080'
  },
  button: {
    width: '100%',
    marginTop: 30,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
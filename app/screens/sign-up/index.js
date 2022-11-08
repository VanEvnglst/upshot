import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { Text } from 'app/components';
import { getSignInError } from 'app/store/selectors';
import { InputUtil, DeviceUtil } from 'app/utils';
import { TextInput } from 'app/components';
import labels from 'app/locales/en';
import styles from './styles';

const SignUp = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [detailsComplete, setDetailsComplete] = useState(false);

  useEffect(() => {
    retrieveToken();
  }, []);

  useEffect(() => {
    if (name.length !== 0 && email.length !== 0 && password.length < 8)
    setDetailsComplete(true);
    else
    setDetailsComplete(false);
  }, [name, email, password])

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
      style={styles.container}
      behavior={DeviceUtil.isIos() ? 'padding' : null}>
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
                <Text 
                  type='caption1'
                  weight='regular'
                style={styles.labelText}>Name</Text>
                <BottomSheetTextInput
                    placeholder={'John Doe'}
                    style={styles.inputField}
                    value={name}
                    onChangeText={name => setName(name)}
                    error={errors.nameError}
                  />
                <Text 
                  type='caption1'
                  weight='regular'
                style={styles.labelText}>Email</Text>
                <BottomSheetTextInput
                    placeholder={'name@work-email.com'}
                    style={styles.inputField}
                    value={email}
                    onChangeText={email => setEmail(email)}
                    error={errors.emailError}
                  />
                <Text 
                  type='caption1'
                  weight='regular'
                style={styles.labelText}>Password</Text>
                  <BottomSheetTextInput
                    placeholder={'8+ characters'}
                    style={styles.inputField}
                    secureTextEntry
                    value={password}
                    onChangeText={password => setPassword(password)}
                    error={errors.passwordError}
                  />
                  <View style={styles.btnContainer}>
                   <Button
                    mode="contained"
                    style={[styles.button, detailsComplete ? styles.enabledBtn : styles.disabledBtn]}
                disabled={!detailsComplete}
                    onPress={() => handleSubmit()}>
                    <Text type='body2' weight='bold' style={detailsComplete ? styles.enabledBtnText : styles.disabledButtonText}>
                  Create Account
                  </Text>
                  </Button>
                  </View>
              </View>
            )
          }}
        </Formik>
    </KeyboardAvoidingView>
  );
};
export default SignUp;

SignUp.propTypes = {};

SignUp.defaultProps = {};
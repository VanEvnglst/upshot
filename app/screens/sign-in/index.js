import React, { useEffect, useState } from 'react';
import { View, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Snackbar } from 'react-native-paper';
import PropTypes from 'prop-types';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { getAuthLoading, getSignInError } from 'app/store/selectors';
import { TextInput, Loader, Text, BottomSheetTextInput } from 'app/components';
import { InputUtil, DeviceUtil } from 'app/utils';
import Images from 'app/assets/images';
import styles from './styles';
import labels from '../../locales/en';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'app/theme/colors'

const SignIn = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const isLoading = useSelector(getAuthLoading);
  const signInError = useSelector(getSignInError);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);
  const [detailsComplete, setDetailsComplete] = useState(false);
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const errorMessage = useSelector(state => state.authentication.get('error'));

  useEffect(() => {
    retrieveToken();
  }, []);

  useEffect(() => {
    if (email.length !== 0 && password.length >= 8)
    setDetailsComplete(true);
    else
    setDetailsComplete(false);
  }, [email, password])

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
console.log('sign in', errorMessage)
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

  const handlePasswordVisibility = () => { 
    setPasswordVisibility(!passwordVisible);
  }

  return (
    <KeyboardAvoidingView
    style={styles.container}
     behavior={DeviceUtil.isIos() ? 'padding' : null}
     >
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
              <Text 
                type='caption1'
                weight='regular'
                style={styles.labelText}>
                Email
              </Text>
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
                style={styles.labelText}>
                  Password
              </Text>
              
                <BottomSheetTextInput
                placeholder={'Password'}
                style={[styles.inputField, ]}
                value={password}
                onChangeText={password => setPassword(password)}
                secureTextEntry={!passwordVisible}
                error={errors.passwordError}
              />
              <View style={styles.showPasswordContainer}>
              {passwordVisible ?
                <TouchableOpacity style={{ margin: 10, width: 30, height: 30}}
                  onPress={() => handlePasswordVisibility()}>
                  <Icon
                      name={'eye-outline'}
                      size={24}
                      color={'#667080'}
                    ></Icon>
                </TouchableOpacity>
                :
                <TouchableOpacity style={{margin: 10, width: 30, height: 30}}
                onPress={()=> handlePasswordVisibility()}>
                  <Icon
                      name={'eye-off-outline'}
                      size={24}
                      color={'#667080'}
                    ></Icon>
                </TouchableOpacity>}
              </View>
              
              {errorMessage !== ''  ?
                  <Text style={{color: Colors.error }}>*{errorMessage}</Text>
                  : 
                <></>}
              <View style={styles.btnContainer}>
              <Button
                mode='contained'
                style={[styles.button, detailsComplete ? styles.enabledBtn : styles.disabledBtn]}
                disabled={!detailsComplete}
                onPress={() => handleSubmit()}>
                <Text type='body2' weight='bold' style={detailsComplete ? styles.enabledBtnText : styles.disabledButtonText}>
                  {labels.common.logIn}
                  </Text>
                </Button>
                </View>
            </View>
          )
        }}
        </Formik>
    </KeyboardAvoidingView>
  )
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

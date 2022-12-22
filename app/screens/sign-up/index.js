import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Keyboard,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthenticationActions from 'app/store/AuthenticationRedux';
import { Text, BottomSheetTextInput } from 'app/components';
import { getSignInError } from 'app/store/selectors';
import { InputUtil, DeviceUtil } from 'app/utils';
import { TextInput } from 'app/components';
import labels from 'app/locales/en';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Colors from 'app/theme/colors'

const SignUp = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [detailsComplete, setDetailsComplete] = useState(false);
  const [passwordVisible, setPasswordVisibility] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);
  const errorMessage = useSelector(state => state.authentication.get('error'));

  useEffect(() => {
    retrieveToken();
  }, []);

  useEffect(() => {
    if (name.length !== 0 && email.length !== 0 && password.length >= 8)
      setDetailsComplete(true);
    else
      setDetailsComplete(false);
  }, [name, email, password]);

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
                    secureTextEntry={!passwordVisible}
                    value={password}
                    onChangeText={password => setPassword(password)}
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
                {errorMessage !== '' && errorMessage.length !== 0 ?
                  <Text style={{color: Colors.error }}>*{errorMessage}</Text>
                  : 
                <></>}
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
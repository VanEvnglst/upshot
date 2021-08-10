import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './styles';

const SignIn = props => {
  const { navigation } = props;
  console.warn('props', props);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validate = () => {
    const errors = {};
    if (username.length === 0) {
      errors.emailError = 'Email is required';
    }

    if (password.length === 0) {
      errors.passwordError = 'Password is required';
    }

    //Object.keys(errors).length !== 0 && this.s
    return errors;
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, backgroundColor: 'red' }}></View>
      <View
        style={{
          flex: 2,
          marginTop: 30,
          alignItems: 'center',
        }}>
        <TextInput
          placeholder="Email"
          style={{
            borderWidth: 1,
            width: '95%',
            height: 60,
            margin: 20,
            paddingHorizontal: 10,
          }}
          onChangeText={username => setUsername(username)}
        />
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            width: '95%',
            height: 60,
            margin: 20,
            paddingHorizontal: 10,
          }}
          secureTextEntry
          onChangeText={password => setPassword(password)}
        />

        <Button
          title="Sign in"
          onPress={() => console.warn('state', username, password)}
        />

        <TouchableOpacity onPress={() => navigation.navigate('Onboarding')}>
          <Text>Register here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

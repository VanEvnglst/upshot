import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './styles';

const Onboarding = () => {
  const [state, setState] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
  });

  const updateData = data => setState({ ...state, ...data });

  const validate = () => {
    const { username, password, firstName, lastName } = props;
    const errors = {};
    if (username.length === 0) {
      errors.usernameError = 'Username is required';
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

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={{
          borderWidth: 1,
          height: 60,
          margin: 20,
          paddingHorizontal: 10,
        }}
        onChangeText={username => updateData({ username })}
      />
      <TextInput
        placeholder="Password"
        style={{
          borderWidth: 1,
          height: 60,
          margin: 20,
          paddingHorizontal: 10,
        }}
        secureTextEntry
        onChangeText={password => updateData({ password })}
      />
      <TextInput
        placeholder="First name"
        style={{
          borderWidth: 1,
          height: 60,
          margin: 20,
          paddingHorizontal: 10,
        }}
        onChangeText={firstName => updateData({ firstName })}
      />
      <TextInput
        placeholder="Last name"
        style={{
          borderWidth: 1,
          height: 60,
          margin: 20,
          paddingHorizontal: 10,
        }}
        onChangeText={lastName => updateData({ lastName })}
      />
    </View>
  );
};

export default Onboarding;

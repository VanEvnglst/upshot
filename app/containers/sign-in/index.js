import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const SignIn = () => {
  const [email, setEmail] = useState({
    email: '',
    password: ''    
  });

  return (
  <View style={styles.container}></View>
  );
};

export default SignIn;

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';


const CaptureMomentStep1 = () => {
  return (
    <View style={styles.listContainer}>
    <View style={styles.namesContainer}>
      <View style={styles.nameAvatar} />
      <View style={styles.staffNameContainer}>
        <Text style={styles.staffNameText}>Staff Name</Text>
        <Text style={styles.emailText}>staffname@work-email.com</Text>
      </View>
    </View>
    <View style={styles.namesContainer}>
      <View style={styles.nameAvatar} />
      <View style={styles.staffNameContainer}>
        <Text style={styles.staffNameText}>Staff Name</Text>
        <Text style={styles.emailText}>staffname@work-email.com</Text>
      </View>
    </View>
    <View style={styles.namesContainer}>
      <View style={styles.nameAvatar} />
      <View style={styles.staffNameContainer}>
        <Text style={styles.staffNameText}>Staff Name</Text>
        <Text style={styles.emailText}>staffname@work-email.com</Text>
      </View>
    </View>
    <View style={styles.namesContainer}>
      <View style={styles.nameAvatar} />
      <View style={styles.staffNameContainer}>
        <Text style={styles.staffNameText}>Staff Name</Text>
        <Text style={styles.emailText}>staffname@work-email.com</Text>
      </View>
    </View>
    <View style={styles.namesContainer}>
      <View style={styles.nameAvatar} />
      <View style={styles.staffNameContainer}>
        <Text style={styles.staffNameText}>Staff Name</Text>
        <Text style={styles.emailText}>staffname@work-email.com</Text>
      </View>
    </View>

  </View>
  )
}

export default CaptureMomentStep1;
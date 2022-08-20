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
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles';


const CaptureMomentStep3 = () => {
  return (
    <View style={styles.content}>
      <View style={styles.mainQuestionHeader}>
      <Text style={styles.mainQuestionText}>Add topic details to your</Text>
      <View style={styles.typeContainer}>
        <Text style={styles.typeText}>corrective</Text>
      </View>
      <Text style={styles.mainQuestionText}>feedback</Text>
      </View>
      <View style={{ marginTop: 25}}>
      <Text style={styles.descriptionText}>Tell us what kind of observation do you want to give to your direct report</Text>
      </View>
      <View style={styles.topicContainer}>
        <Text style={[styles.toText, { marginBottom: 4, }]}>Topic</Text>
        <View style={styles.topicPicker}>
          <Text style={styles.topicLabel}>{`*Others (Please specify)`}</Text>
          <Icon
            name='chevron-down-outline'
            style={{flex: 1, color: '#667080'}}
            size={24}
          />
        </View>
        <View style={[styles.topicPicker, { marginTop: 12}]}>
          <Text style={styles.topicLabel}>{`Write your own details*`}</Text>
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          style={[styles.button]}
        >Continue</Button>
      </View>
      <View style={styles.spacer} />
    </View>
  )
}

export default CaptureMomentStep3;
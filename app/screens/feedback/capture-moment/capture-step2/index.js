import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import Images from 'app/assets/images';
import styles from '../styles';


const CaptureMomentStep2 = () => {
  const dispatch = useDispatch();
  const [selection, setSelection] = useState({
    id: 0,
    icon: '',
    title: '',
  });

  const options = [
    {
      id: 1,
      icon: Images.redHeartEmoji,
      title: 'Positive',
      hint: 'When you tell others what they are doing well'
    },
    {
      id: 2,
      icon: Images.penEmoji,
      title: 'Corrective',
      hint: 'When you tell others what they need to improve on'
    }
  ]
  return (
    <View style={styles.content}>
      <Text style={styles.mainQuestionText}>What kind of feedback do you want to give?</Text>
      <Text style={styles.descriptionText}>Tell us what kind of observation do you want to give to your direct report.</Text>
      <View style={styles.selectionContainer}>
        <View style={styles.selections}>
          {options.map((item, index) => (
            <TouchableOpacity 
              key={item.id}
              style={[styles.selectionButton, selection.id === item.id && styles.selectedButton]}
              onPress={() => setSelection(item)}
            >
              <Image
                source={item.icon}
                resizeMode="contain"
                style={styles.selectionIcon}
              />
              <Text style={[styles.selectionText, selection.id !== item.id && styles.unselectedText]}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          mode='contained'
          style={[styles.button, selection.id === 0 ? styles.disabledBtn : styles.enabledBtn]}
        >Continue</Button>
      </View>
      <View style={styles.spacer} />
    </View>
  )
}

export default CaptureMomentStep2;
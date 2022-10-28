import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import styles from './styles';

const FeedbackChecklist = props => {
  const { navigation } = props;
  const [worklist, setWorklist] = useState([]);

  const checklist = [
    {
      id: 1,
      title: 'Feedback was given soon after the event occured',
    },
    {
      id: 2,
      title: 'Established rapport with the team member',
    },
    {
      id: 3,
      title: 'Provided specific information about the event and its impact',
    },
    {
      id: 4,
      title: 'Gave feedback in a calm, objective and non-judgmental manner',
    },
    {
      id: 5,
      title: `Responded to the team member's thoughts and questions with empathy and curiosity`,
    },
    {
      id: 6,
      title: 'Established clear next steps',
    },
    {
      id: 7,
      title: 'Offered support that was requested by the team member',
    },
  ];

  const checkSelectedItem = item => {
    return worklist.some(topic => topic.id === item.id);
  }

  const handleSelectedItem = item => {
    let newWorklist = worklist;
    
    if(checkSelectedItem(item))
      newWorklist = newWorklist.filter(newWork => newWork.id !== item.id);
    else newWorklist = [...newWorklist, item];
    setWorklist(newWorklist);
  }


  const Selection = ({ item }) => {
    return (
      <View style={styles.selection}>
        <TouchableOpacity
          accessibilityRole="button"
          onPress={() => handleSelectedItem(item)}
          style={[
            styles.checkBoxContainer,
            checkSelectedItem(item) && styles.selectedCheckBox
          ]}>
          {checkSelectedItem(item) && (
          <Icon name="checkmark-sharp" size={20} style={{ color: 'white' }} />
        )}
        </TouchableOpacity>
        <Text type="body2" weight="regular" style={styles.selectionText}>
          {item.title}
        </Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <TouchableOpacity
            accessibility="button"
            onPress={() => navigation.replace('Home')}>
            <Icon name="chevron-back-outline" size={20} color={'white'} />
          </TouchableOpacity>
          <Text type="body2" weight="bold" style={styles.headerTitleText}>
            Self Reflection
          </Text>
          <Image
            source={Images.upshotLogo}
            resizeMode="contain"
            style={styles.headerIcon}
          />
        </View>
        <View style={styles.contentContainer}>
          <Text type="caption1" weight="medium" style={styles.headingText}>
            These are the qualities of great feedback.
          </Text>
          <Text type="body1" weight="bold" style={styles.titleText}>
            Please check everything that applied to your feedback
          </Text>
          <View style={styles.selectionContainer}>
            {checklist.map((item, i) => (
              <Selection key={i} item={item} />
            ))}
          </View>
        </View>
        <View style={styles.btnContainer}>
          <Button mode="contained" onPress={() => navigation.navigate('EM Journey Closeout')} style={styles.button}>
            <Text type="body2" weight="bold" style={styles.buttonText}>
              Submit
            </Text>
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

export default FeedbackChecklist;

FeedbackChecklist.propTypes = {};

FeedbackChecklist.defaultProps = {};

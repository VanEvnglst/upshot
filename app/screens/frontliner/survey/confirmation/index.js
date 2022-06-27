import React, { useState, useEffect } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { Text, Wrapper, Header } from 'app/components';
import { getManagerName } from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const SurveyConfirmation = props => {
  const { navigation, route } = props;
  const { survey } = labels.frontliner;
  const managerName = useSelector(getManagerName);
  const [isSurveyValid, setSurveyValid] = useState(true);

  useEffect(() => {
    if(route.params && route.params.type === 'survey invalid')
      setSurveyValid(false);
  }, []);

  const handleClose = () => {
    navigation.replace('Messages');
  };

  const handleContent = () => {
    const didNotHappen = route.params && (route.params.type === 'no event' || route.params.type === 'survey invalid');
    const eventHappened = {
      image: Images.confirmation,
      title: labels.common.youDidIt,
      content: `${survey.confirmation} ${managerName} ${survey.confirmationCont}`,
    };

    const eventDidNotHappen = {
      image: Images.noRatings,
      title: labels.common.oops,
      content: survey.noDiscussion,
    };
    const contentValue = didNotHappen ? eventDidNotHappen : eventHappened;
    
    return (
      <>
        <View style={styles.imageContainer}>
          <Image source={contentValue.image}
          style={styles.image}
          resizeMode='cover' />
        </View>
        <View style={styles.contentContainer}>
          <Text type="h4">{contentValue.title}</Text>
          <Text type="body2" style={styles.contentText}>
            {contentValue.content}
          </Text>
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => handleClose(),
          }}
        />
        <View>{handleContent()}</View>
        {isSurveyValid &&
        <View style={styles.btnContainer}>
            <Button 
              mode="contained" 
              style={styles.button}
              onPress={() => handleClose()}>
              Close
            </Button>
        </View>}
      </Wrapper>
    </View>
  );
};

export default SurveyConfirmation;

SurveyConfirmation.propTypes = {};

SurveyConfirmation.defaultProps = {};

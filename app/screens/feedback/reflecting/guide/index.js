import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import { getReflectingError, getReflectingId } from 'app/store/selectors';
import labels from 'app/locales/en';
import Images from 'app/assets/images';
import styles from './styles';

const ReflectingGuide = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const { feedbackSignPost, feedbackReflecting } = labels;
  const journeyId = useSelector(
    state => state.feedback.get('currentJourney').data,
  );
  const reflectingId = useSelector(getReflectingId);
  const reflectingError = useSelector(getReflectingError);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  useEffect(() => {
    if (reflectingError !== '')
      setSnackbarVisible(true)
  }, [reflectingError]);

  const dismissSnackbar = () => setSnackbarVisible(false);

  const handleNavigation = () => {
    if (reflectingId)
     navigation.navigate('FeedbackReflecting');
     else
      dispatch(ReflectingActions.postFeedbackReflecting(journeyId));
  };

  return (
    <Wrapper>
      <Header
        headerLeft={{
          onPress: () => navigation.goBack(),
        }}
      />
      <Text type="h4" style={styles.headerText}>{feedbackSignPost.reflecting}</Text>
      <View style={styles.container}>
        <View style={styles.guideContainer}>
          <Text type="body1" style={styles.guideText}>
            {feedbackReflecting.guideContent}
          </Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={Images.reflectingGuide} resizeMode="contain" />
        </View>
      </View>
      <View style={styles.btnContainer}>
        <Button
          style={styles.button}
          onPress={() => handleNavigation()}
          mode="contained">
         {labels.common.start}
        </Button>
      </View>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={dismissSnackbar}
      >
        <Text>{reflectingError}</Text>
      </Snackbar>
    </Wrapper>
  );
};

export default ReflectingGuide;

ReflectingGuide.propTypes = {
  journeyId: PropTypes.number.isRequired,
  reflectingId: PropTypes.number,
  reflectingError: PropTypes.string,
  postFeedbackReflecting: PropTypes.func,
};

ReflectingGuide.defaultProps = {
  journeyId: 1,
  reflectingId: 1,
  reflectingError: '',
  postFeedbackReflecting: () => {},
};

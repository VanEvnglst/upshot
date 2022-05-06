import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { Button, Snackbar } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import { getReflectingError } from 'app/store/selectors';
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
  const reflectingId = useSelector(state => state.reflecting.get('id'));
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
      <Text type="h4">{feedbackSignPost.reflecting}</Text>
      <View style={{ flex: 2 }}>
        <View style={{ flex: 1, marginTop: 30, marginBottom: 20 }}>
          <Text type="body1" style={{ lineHeight: 30 }}>
            {feedbackReflecting.guideContent}
          </Text>
        </View>
        <View style={{ flex: 1, marginBottom: 20 }}>
          <Image source={Images.reflectingGuide} resizeMode="contain" />
        </View>
      </View>
      <View style={{ marginBottom: 30 }}>
        <Button
          style={{ height: 50, justifyContent: 'center', alignItems: 'center' }}
          onPress={() => handleNavigation()}
          mode="contained">
          <Text type="button">{labels.common.start}</Text>
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

ReflectingGuide.propTypes = {};

ReflectingGuide.defaultProps = {};

import React, { useState, useEffect } from 'react';
import { View, BackHandler, Dimensions, ActivityIndicator } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, Modal } from 'app/components';
import ReflectingActions from 'app/store/feedback/ReflectingRedux';
import { getReflectingStep, getReflectingMaxSteps, getReflectingId } from 'app/store/selectors';
import ReflectingStep1 from './step1';
import ReflectingStep2 from './step2';
import ReflectingStep3 from './step3';
import ReflectingStep4 from './step4';
import ReflectingStep5 from './step5';
import Colors from 'app/theme/colors';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackReflecting = props => {
  const { width, height } = Dimensions.get('screen');
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getReflectingStep);
  const maxStep = useSelector(getReflectingMaxSteps);
  const activeReflecting = useSelector(getReflectingId);
  const isLoading = useSelector(state => state.reflecting.get('fetching'));
  const indexValue = activeStep / maxStep;

  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  useEffect(() => {
    async function retrieveData() {
      if (activeReflecting)
      await dispatch(ReflectingActions.fetchCurrentReflecting(activeReflecting));
    }
    retrieveData();
  }, []);

  const handleStepContent = () => {
    switch(activeStep) {
      case 1:
        return <ReflectingStep1 />;
      case 2:
        return <ReflectingStep2 />;
      case 3:
        return <ReflectingStep3 />;
      case 4:
        return <ReflectingStep4 />;
      case 5:
        return <ReflectingStep5 />;
    }
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCloseBtn = () => {

  }

  return (
    <View style={styles.container}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => showModal(),
          }}
        />
        <Text 
          type='overline'
          style={styles.overlineText}  
        >{labels.feedbackSignPost.reflecting}</Text>
        <ProgressBar
          progress={indexValue}
          color={Colors.secondary}
          style={styles.progressBar}
        />
        <View style={styles.contentContainer}>
          {handleStepContent()}
        </View>
      </Wrapper>
      <Modal
        isVisible={isModalVisible}
        onDismiss={hideModal}
        style={styles.modal}>
          <View style={styles.modalTextContainer}>
            <Text 
              type='body2' 
              style={styles.modalText}
            >
            {labels.common.closeFeedback}
            </Text>
          </View>
          <View style={styles.modalBtnContainer}>
            <Button
              mode='text'
              onPress={() => hideModal()}
            >
               {labels.common.cancel}
            </Button>
            <Button mode='text'
              onPress={() => handleCloseBtn()}
            >
              {labels.common.saveClose}
            </Button>
          </View>
        </Modal>
      {isLoading && 
        <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: height,
        width: width
      }}><ActivityIndicator size='large'/></View>}
    </View>
  )
};

export default FeedbackReflecting;

FeedbackReflecting.propTypes = {
  activeStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  reflectingId: PropTypes.number,
  resetReflectingState: PropTypes.func,
};

FeedbackReflecting.defaultProps = {
  activeStep: 1,
  maxStep: 4,
  reflectingId: 1,
  resetReflectingState: () => {},
};

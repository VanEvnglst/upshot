import React, { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text, Modal } from 'app/components';
import { getPreparingStep, getPreparingMaxSteps, getPreparingId } from 'app/store/selectors';
import PreparingActions from 'app/store/feedback/preparingRedux';
import PreparingStep1 from './step1';
import PreparingStep2 from './step2';
import PreparingStep3 from './step3';
import PreparingStep3B from './step3B';
import PreparingStep3C from './step3C';
import PreparingStep4 from './step4';
import PreparingStep4B from './step4B';
import PreparingStep4C from './step4C';
import PreparingStep5 from './step5';
import PreparingStep5B from './step5B';
import PreparingStep5C from './step5C';
import labels from 'app/locales/en';
import Colors from 'app/theme/colors';
import containerStyles from './styles';

const FeedbackPreparing = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getPreparingStep);
  const maxStep = useSelector(getPreparingMaxSteps);
  const activePreparing = useSelector(getPreparingId);
  const indexValue = activeStep / maxStep;
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    async function retrieveData() {
      if(activePreparing)
      await dispatch(PreparingActions.fetchCurrentPreparing(activePreparing));
    }
    retrieveData();
  }, [])

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      return true;
    });

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', () => {
        return true;
      });
  }, []);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCloseBtn = () => {
    // if (activeStep === 1 && !preparingId)
    navigation.goBack();
    // else {
    //   dispatch(PreparingActions.updateFeedbackPreparing());
    //   dispatch(PreparingActions.resetPreparingState());
    // }
  };

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <PreparingStep1 />;
      case 2:
        return <PreparingStep2 />;
      case 3:
        return <PreparingStep3 />;
      case 4:
        return <PreparingStep3B />;
      case 5:
        return <PreparingStep3C />;
      case 6:
        return <PreparingStep4 />;
      case 7:
        return <PreparingStep4B />;
      case 8:
        return <PreparingStep4C />;
      case 9:
        return <PreparingStep5 />;
      case 10:
        return <PreparingStep5B />;
      case 11:
        return <PreparingStep5C />;
    }
  };

  const handleClose = () => {
    dispatch(PreparingActions.resetPreparingState());
    navigation.navigate('PreparingGuide');
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => showModal(),
          }}
        />
        <Text type="overline" style={containerStyles.overlineText}>
          {labels.feedbackSignPost.preparing}
        </Text>
        <ProgressBar
          progress={indexValue}
          color={Colors.secondary}
          style={containerStyles.progressBar}
        />
        <View style={containerStyles.contentContainer}>
          {handleStepContent()}
        </View>
      </Wrapper>
      <Modal
        isVisible={isModalVisible}
        onDismiss={hideModal}
        style={{
          padding: 20,
          width: 300,
          height: 140,
        }}>
        <View style={{ flex: 1 }}>
          <Text type="body2" style={{ marginTop: 10 }}>
            Close your feedback for now?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 20,
          }}>
          <Button mode="text" onPress={() => hideModal()}>
            Cancel
          </Button>
          <Button mode="text" onPress={() => handleCloseBtn()}>
            Save & Close
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default FeedbackPreparing;

FeedbackPreparing.propTypes = {
  resetPreparingState: PropTypes.func,
  activeStep: PropTypes.number,
  maxStep: PropTypes.number,
};

FeedbackPreparing.defaultProps = {
  resetPreparingState: () => {},
  activeStep: 1,
  maxStep: 11,
};

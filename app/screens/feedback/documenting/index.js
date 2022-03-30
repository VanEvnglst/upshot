import React, { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text, Modal } from 'app/components';
import {
  getDocumentingStep,
  getDocumentingMaxSteps,
  getDocumentingId,
  getChosenType,
  getChosenFlow,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import DocumentingStep3 from './step3';
import DocumentingStep2 from './step2';
import DocumentingStep1 from './step1';
import DocumentingStep4 from './step4';
import DocumentingStep5 from './step5';
import Colors from 'app/theme/colors';
import labels from 'app/locales/en';
import styles from './styles';

const FeedbackDocumenting = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getDocumentingStep);
  const maxStep = useSelector(getDocumentingMaxSteps);
  const indexValue = activeStep / maxStep;
  const documentingId = useSelector(getDocumentingId);
  const typeId = useSelector(getChosenType);
  const flow = useSelector(getChosenFlow);
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
    if(flow.id === 1 && typeId.id === 2)
      dispatch(DocumentingActions.setDocumentingStatus('maxStep', 4));
  }, [])

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <DocumentingStep1 />;
      case 2:
        return <DocumentingStep2 />;
      case 3:
        return <DocumentingStep3 />;
      case 4:
        return <DocumentingStep4 />;
      case 5: 
        return <DocumentingStep5 />;
    }
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCloseBtn = () => {
    if(activeStep === 1 && documentingId === null)
      navigation.goBack();
    else
      showModal();
  };

  const saveAndClose = () => {
    dispatch(DocumentingActions.updateFeedbackDocumenting({
      shouldClose: false
    }));
  }

  return (
    <View style={containerStyles.container}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => handleCloseBtn(),
          }}
        />
        <Text type="overline">Documenting</Text>
        <ProgressBar
          progress={indexValue}
          color={Colors.secondary}
          style={styles.progressBar}
        />
        <View style={styles.contentContainer}>{handleStepContent()}</View>
      </Wrapper>
      <Modal
        isVisible={isModalVisible}
        onDismiss={hideModal}
        style={containerStyles.modal}>
        <View style={containerStyles.container}>
          <Text 
            type="body2" 
            style={containerStyles.modalText}
          >
            Close your feedback for now?
          </Text>
        </View>
        <View
          style={containerStyles.modalBtnContainer}>
          <Button 
            mode="text" 
            onPress={() => hideModal()}>
            <Text type='button'>{labels.common.cancel}</Text>
          </Button>
          <Button 
            mode="text" 
            onPress={() => saveAndClose()}>
            <Text type='button'>{labels.common.saveClose}</Text>
          </Button>
        </View>
      </Modal>
    </View>
  );
};

export default FeedbackDocumenting;

FeedbackDocumenting.propTypes = {
  activeStep: PropTypes.number.isRequired,
  maxStep: PropTypes.number.isRequired,
  documentingId: PropTypes.number,
  resetDocumentingState: PropTypes.func,
};

FeedbackDocumenting.defaultProps = {
  activeStep: 1,
  maxStep: 3,
  documentingId: 1,
  resetDocumentingState: () => {},
};

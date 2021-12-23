import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text, Modal } from 'app/components';
import {
  getDocumentingStep,
  getDocumentingMaxSteps,
  getDocumentingId,
  getStep1Data,
  getStep2Data,
  getStep3Data,
  getChosenType,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import DocumentingStep3 from './step3';
import DocumentingStep2 from './step2';
import DocumentingStep1 from './step1';
import Colors from 'app/theme/colors';
import styles from './styles';

const FeedbackDocumenting = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getDocumentingStep);
  const maxStep = useSelector(getDocumentingMaxSteps);
  const indexValue = activeStep / maxStep;
  const documentingId = useSelector(getDocumentingId);
  const typeId = useSelector(getChosenType);
  const step1Data = useSelector(getStep1Data);
  const step2Data = useSelector(getStep2Data);
  const step3Data = useSelector(getStep3Data);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleStepContent = () => {
    switch (activeStep) {
      case 1:
        return <DocumentingStep1 />;
      case 2:
        return <DocumentingStep2 />;
      case 3:
        return <DocumentingStep3 />;
    }
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCloseBtn = () => {
    const payload = {
      docuId: documentingId,
      typeId,
      step1: step1Data,
      step2: step2Data,
      dateSelected: step3Data,
    };
    // pag step 1 and no documentingId,
    // navigate,
    // else dispatch update action & reset
    if (activeStep === 1 && !documentingId) navigation.goBack();
    else {
      dispatch(DocumentingActions.updateFeedbackDocumenting(payload));
      dispatch(DocumentingActions.resetDocumentingState());
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => showModal(),
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
            <Text>Cancel</Text>
          </Button>
          <Button mode="text" onPress={() => handleCloseBtn()}>
            <Text>Save & Close</Text>
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

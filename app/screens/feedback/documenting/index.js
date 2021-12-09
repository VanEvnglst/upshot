import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { ProgressBar, Modal, Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text } from 'app/components';
import {
  getDocumentingStep,
  getDocumentingMaxSteps,
  getDocumentingId
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import DocumentingStep4 from './step4';
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
  const [isModalVisible, setModalVisible] = useState(false);

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
    }
  };

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleCloseBtn = () => {
    if (activeStep === 1 && !documentingId)
      navigation.goBack();
    else dispatch(DocumentingActions.resetDocumentingState());
  };

  return (
    <View style={{ flex: 1}}>
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
        visible={isModalVisible}
        onDismiss={hideModal}
        contentContainerStyle={{ backgroundColor: 'white', padding: 20, width: 300, height: 200, }}>
        <Text>Exmaple modal</Text>
        <View style={{ flexDirection: 'row'}}>
          <Text>Cancel</Text>
          <Text>{Save & Close}</Text>
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
  resetDocumentingState:() => {},

};
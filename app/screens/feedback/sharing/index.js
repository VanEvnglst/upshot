import React, { useState, useEffect } from 'react';
import { View, BackHandler } from 'react-native';
import { Button, ProgressBar } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, Header, Text, Modal } from 'app/components';
import SharingActions from 'app/store/feedback/SharingRedux';
import { getSharingStep, getSharingMaxSteps, getSharingId } from 'app/store/selectors';
import SharingStep1 from './step1';
import SharingStep2 from './step2';
import SharingStep3 from './step3';
import labels from 'app/locales/en';
import Colors from 'app/theme/colors';
import containerStyles from './styles';

const FeedbackSharing = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const activeStep = useSelector(getSharingStep);
  const maxStep = useSelector(getSharingMaxSteps);
  const activeSharing = useSelector(getSharingId);
  const indexValue =  activeStep / maxStep;
  const [isModalVisible, setModalVisible] = useState(false);

  
  useEffect(() => {
    async function retrieveData() {
      if(activeSharing)
      await dispatch(SharingActions.fetchCurrentSharing(activeSharing));
    }
    retrieveData();
  }, []);

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
    navigation.goBack();
  };


  const handleStepContent = () => {
    switch(activeStep) {
      case 1:
        return <SharingStep1 />;
      case 2:
        return <SharingStep2 />;
      case 3:
        return <SharingStep3 />;
    }
  };

  return(
    <View style={{ flex: 1 }}>
      <Wrapper>
        <Header
          headerRight={{
            onPress: () => showModal(),
          }}
        />
        <Text
          type='overline'
          style={containerStyles.overlineText}
        >
          {labels.feedbackSignPost.sharing}
        </Text>
        <ProgressBar
          progress={indexValue}
          color={Colors.secondary}
          style={containerStyles.progressBar}
        />
        <View
          style={containerStyles.contentContainer}
        >
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
        }}
      >
        <View style={{ flex: 1 }}>
          <Text
            type='body2'
            style={{ marginTop: 10}}
          >
            Close your feedback for now?
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignSelf: 'flex-end',
            alignItems: 'flex-end',
            marginTop: 20,
          }}
        >
          <Button
            mode='text'
            onPress={() => hideModal()}
          >Cancel</Button>
          <Button
            mode='text'
            onPress={() => handleCloseBtn()}
          >Save & Close</Button>
        </View>
      </Modal>
    </View>
);
}

export default FeedbackSharing;

FeedbackSharing.propTypes = {
  getSharingStep: PropTypes.number,
  getSharingMaxSteps: PropTypes.number,
  getSharingId: PropTypes.number,
  fetchCurrentSharing: PropTypes.func,
};

FeedbackSharing.defaultProps = {
  getSharingStep: 1,
  getSharingMaxSteps: 3,
  getSharingId: 1,
  fetchCurrentSharing: () => {}
};

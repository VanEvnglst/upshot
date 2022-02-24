import React, { useState, useEffect } from 'react';
import { View, BackHandler, Dimensions, } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, Modal, Loader } from 'app/components';
import labels from 'app/locales/en';
import Colors from 'app/theme/colors';
import containerStyles from './styles';

const FrontlinerSurvey = props => {
  const { width, height } = Dimensions.get('screen');
  const { navigation } = props;
  const activeStep = 1;
  const maxStep = 3;
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

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleStepContent = () => {
    switch(activeStep) {
      case 1:
        return <HowSatisfiedScreen />;
      case 2:
        return <HowDidYouFeelScreen />;
      case 3:
        return <ManagerEvaluation />;
    }
  }


  return (
  <View style={containerStyles.container}>
    <Wrapper>
      <Header
        headerRight={{
          onPress: () => showModal(),
        }}
      />
      <Text type='overline'
        style={containerStyles.overlineText}
      >{labels.frontliner.survey.title}</Text>
      <ProgressBar
        progress={indexValue}
        color={Colors.secondary}
        style={containerStyles.progressBar}
      />
      <View style={containerStyles.contentContainer}
      >
        {handleStepContent()}
      </View>
    </Wrapper>
    <Modal
      isVisible={isModalVisible}
      onDismiss={hideModal}
      style={containerStyles.modal}
    >
      <View style={containerStyles.modalTextContainer}
      >
        <Text type='body2'
          style={containerStyles.modalText}
        >
          {labels.common.closeFeedback}
        </Text>
      </View>
    </Modal>
  </View>
  );
};

export default FrontlinerSurvey;

FrontlinerSurvey.propTypes = {};

FrontlinerSurvey.defaultProps = {};

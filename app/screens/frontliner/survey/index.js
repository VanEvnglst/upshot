import React, { useState, useEffect } from 'react';
import { View, BackHandler, Dimensions, } from 'react-native';
import { ProgressBar, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, Modal, Loader } from 'app/components';
import OverallSatisfaction from './overall-satisfaction';
import FeelingQuestion from './feeling-question';
import ManagerEvaluation from './manager-evaluation';
import FrontlinerEvaluation from './frontliner-evaluation';
import SurveyActions from 'app/store/frontliner/SurveyRedux';
import { getSurveyStep, getSurveyMaxStep, getSurveyFetching, getSurveyId } from 'app/store/selectors';
import labels from 'app/locales/en';
import Colors from 'app/theme/colors';
import containerStyles from './styles';
import styles from './styles';

const FrontlinerSurvey = props => {
  const { width, height } = Dimensions.get('screen');
  const { navigation } = props;
  const dispatch = useDispatch();
  const surveyId = useSelector(getSurveyId);
  const activeStep = useSelector(getSurveyStep);
  const maxStep = useSelector(getSurveyMaxStep);
  const isLoading = useSelector(getSurveyFetching);
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

  // useEffect(() => {
  //   async function retrieveData() {
  //     if (activeSurvey)
  //     await dispatch(SurveyActions.fetchCurrentDRSurvey(surveyId));
  //   }
  //   retrieveData();
  // }, []);

  // useEffect(() => {
  //   dispatch(SurveyActions.fetchDRCriteria());
  // }, []);

  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const handleStepContent = () => {
    switch(activeStep) {
      case 1:
        return <OverallSatisfaction />;
      case 2:
        return <FeelingQuestion />;
      case 3:
        return <ManagerEvaluation />;
      case 4:
        return <FrontlinerEvaluation />;
    }
  }

  const handleCloseBtn = () => {
    //dispatch(SurveyActions.updateDRSurvey({
    //  shouldClose: false,
    //}))
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
      <View style={styles.modalBtnContainer}>
        <Button
          mode='text'
          onPress={() => hideModal()}
        >{labels.common.canel}</Button>
        <Button
          mode='text'
          onPress={() => handleCloseBtn()}
        >{labels.common.saveClose}</Button>
      </View>
    </Modal>
    {isLoading && <Loader />}
  </View>
  );
};

export default FrontlinerSurvey;

FrontlinerSurvey.propTypes = {
  surveyId: PropTypes.number,
  activeStep: PropTypes.number,
  maxStep: PropTypes.number,
  isLoading: PropTypes.bool,
  fetchCurrentDRSurvey: PropTypes.func,
  fetchDRCriteria: PropTypes.func,
  updateDRSurvey: PropTypes.func,
};

FrontlinerSurvey.defaultProps = {
  surveyId: 1,
  activeStep: 1,
  maxStep: 4,
  isLoading: false,
  fetchCurrentDRSurvey: () => {},
  fetchDRCriteria: () => {},
  updateDRSurvey: () => {},
};

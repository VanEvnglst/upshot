import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, Loader } from 'app/components';
import {
  getPreparingId,
  getStaffName,
  getPrepStep1Data,
  getPrepStep2Data,
  getPrepStep3Data,
  getPrepStep3BData,
  getPrepStep4Data,
  getPrepStep4BData,
  getPrepStep5Data,
  getPrepStep5BData,
  getPreparingLoading,
  getPreparingSched,
} from 'app/store/selectors';
import PreparingActions from 'app/store/feedback/PreparingRedux';
import styles from './styles';

const PreparingReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const preparingId = useSelector(getPreparingId);
  const staffName = useSelector(getStaffName);
  const isLoading = useSelector(getPreparingLoading);
  const step1Data = useSelector(getPrepStep1Data);
  const step2Data = useSelector(getPrepStep2Data);
  const step3Data = useSelector(getPrepStep3Data);
  const step3BData = useSelector(getPrepStep3BData);
  const step4Data = useSelector(getPrepStep4Data);
  const step4BData = useSelector(getPrepStep4BData);
  const step5Data = useSelector(getPrepStep5Data);
  const step5BData = useSelector(getPrepStep5BData);
  const discussSched = useSelector(getPreparingSched);
  const [state, setState] = useState([]);
  const [discussionSched, setDiscussionSched] = useState('');

  useEffect(() => {
    async function retrieveData() {
      await dispatch(PreparingActions.fetchCurrentPreparing(preparingId));
    }
    retrieveData();
  }, []);

  useEffect(() => {
    if (step1Data.data) handleData();
  }, [
    step1Data,
    step2Data,
    step3Data,
    step3BData,
    step4Data,
    step4BData,
    step5Data,
    step5BData,
  ]);

  const handleData = async () => {
    const schedFormat = moment(discussSched).format('LLLL');
    //TODO: handle warning inside redux;
    const { observationList, additionalObservation } = step3BData.data;
    const { actionPlanList, additionalPlan } = step4Data.data;
    const { evaluateOptions, additionalOptions } = step4BData.data;
    const { checkoutQuestions, additionalCheckout } = step5Data.data;
    const { checkoutAcknowledge, additionalAcknowledge } = step5BData.data;
    
    const step3Content =
      step3Data.data &&
      `${step3Data.data.event}\n\n${step3Data.data.action}\n\n${step3Data.data.result}`;
    const step3BContent = await observationList.length > 0 &&
      parseData(observationList, additionalObservation);
    const step4Content = await actionPlanList.length > 0 &&
      parseData(actionPlanList, additionalPlan);
    const step4BContent = await  evaluateOptions.length > 0 &&
      parseData(evaluateOptions, additionalOptions);
    const step5Content = await checkoutQuestions.length > 0 &&
      parseData(checkoutQuestions, additionalCheckout);
    const step5BContent = await checkoutAcknowledge.length > 0 &&
      parseData(checkoutAcknowledge, additionalAcknowledge);
    const preparingData = [
      {
        id: 1,
        title: 'Check-in',
        content: step1Data.data,
      },
      {
        id: 2,
        title: 'State the purpose of the discussion',
        content: step2Data.data,
      },
      {
        id: 3,
        title: 'Describe and discuss the observations',
        content: `${step3Content}\n\n${step3BContent}\n\n`,
      },
      {
        id: 4,
        title: 'Come up with an action plan together',
        content: `${step4Content}\n\n${step4BContent}\n\n`,
      },
      {
        id: 5,
        title: 'Check-out',
        content: `${step5Content}\n\n${step5BContent}`,
      },
    ];
    setDiscussionSched(schedFormat);
    setState(preparingData);
  };

  const parseData = (list, addedData) => {
    let parsedData = '';
    list.map((item, index) => (
      parsedData += `${list[index]}\n\n`
    ));
    parsedData += `${addedData}`;
    return parsedData;
  }
  
  const PreparingItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <View style={styles.itemCount}>
          <View style={styles.countBadge}>
            <Text type="overline" style={styles.countText}>
              {item.id}
            </Text>
          </View>
          <View style={styles.countLine} />
        </View>
        <View style={styles.itemContent}>
          <Text type="body2" style={styles.titleText}>
            {item.title}
          </Text>
          <View style={styles.itemBody}>
            <Text type="body1" style={styles.bodyText}>
              {item.content}
            </Text>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <Header
            headerLeft={{
              onPress: () => navigation.goBack(),
            }}
          />
          <Text type="overline" style={styles.overlineText}>
            Review
          </Text>
          <Text type="h6" style={styles.headerText}>
            Part 2 - Preparing
          </Text>
          <View style={{ marginTop: 30, marginBottom: 20 }}>
            <Text type="body1" style={[styles.bodyText, styles.textHeight]}>
              You've scheduled your feedback discussion with{' '}
              {staffName.firstName} for {discussionSched}. Below is your discussion guide:
            </Text>
          </View>
          {state.map((item, index) => (
            <PreparingItem 
              key={item.id} 
              item={item}
            />
          ))}
        </ScrollView>
      </Wrapper>
      {isLoading && <Loader />}
    </View>
  );
};

export default PreparingReview;

PreparingReview.propTypes = {
  preparingId: PropTypes.number,
  staffName: PropTypes.object,
  isLoading: PropTypes.bool,
  step1Data: PropTypes.object,
  step2Data: PropTypes.object,
  step3Data: PropTypes.object,
  step3BData: PropTypes.object,
  step4Data: PropTypes.object,
  step4BData: PropTypes.object,
  step5Data: PropTypes.object,
  step5BData: PropTypes.object,
  discussSched: PropTypes.string,
  fetchCurrentPreparing: PropTypes.func,
};

PreparingReview.defaultProps = {
  preparingId: 1,
  staffName: {},
  isLoading: false,
  step1Data: {},
  step2Data: {},
  step3Data: {},
  step3BData: {},
  step4Data: {},
  step4BData: {},
  step5Data: {},
  step5BData: {},
  discussSched: '',
  fetchCurrentPreparing: () => {},
};

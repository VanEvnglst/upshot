import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, Loader } from 'app/components';
import {
  getSharingId,
  getSharingStep1Data,
  getSharingStep2Data,
  getStaffName,
  getSharingFetching,
} from 'app/store/selectors';
import SharingActions from 'app/store/feedback/SharingRedux';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const SharingReview = props => {
  const { navigation } = props;
  const { feedbackSharing } = labels;
  const dispatch = useDispatch();
  const staffName = useSelector(getStaffName);
  const sharingId = useSelector(getSharingId);
  const step1Data = useSelector(getSharingStep1Data);
  const step2Data = useSelector(getSharingStep2Data);
  const isLoading = useSelector(getSharingFetching);
  const [state, setState] = useState({});

  useEffect(() => {
    async function retrieveData() {
      await dispatch(SharingActions.fetchCurrentSharing(sharingId));
    }
    retrieveData();
  },[]);

  useEffect(() => {
    if(step1Data.data) handleData();
  }, [step1Data, step2Data]);

  const handleData = async () => {
    const eventValue = step1Data.data === null ? '' : step1Data.data.event;
    const actionValue = step1Data.data === null ? '' : step1Data.data.action;
    const resultValue = step1Data.data === null ? '' : step1Data.data.result;
    const messageValue = step2Data.data === null ? '' : step2Data.data;

    setState({
      event: eventValue,
      action: actionValue,
      result: resultValue,
      message: messageValue,
    });
  }

  return (
    <View style={styles.container}>
      <Wrapper>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack()
          }}
        />
        <Text type='overline'>{labels.common.review}</Text>
        <Text
          type='h6'
          style={styles.reviewTitle}
        >{feedbackSharing.reviewTitle}</Text>
        <View style={styles.contentContainer}>
          <Text type='body1' style={[styles.descriptionText]}>{feedbackSharing.reviewDesc} {staffName.firstName} {feedbackSharing.reviewDescCont}</Text>
          <View style={styles.messageCard}>
            <View style={styles.nameContainer}>
              <Image source={Images.avatar} style={styles.avatar} />
              <View style={styles.nameContent}>
                  <Text type='caption' style={styles.senderNameText}>
                    From you
                  </Text>
                <Text type='caption' style={styles.receipientNameText}>
                  To {staffName.firstName}
                </Text>
              </View>
            </View>
            <View style={styles.contentContainer}>
            <View style={styles.content}>
                <Text type='body2' style={styles.contentBody}>{state.message}</Text>
                <Text type='overline' style={styles.contentHeader}
                >{feedbackSharing.event}</Text>
                <Text type='body2' style={styles.contentBody}
                >{state.event}</Text>
                <Text type='overline' style={styles.contentHeader}
                >{feedbackSharing.action}</Text>
                 <Text type='body2' style={styles.contentBody}
                >{state.action}</Text>
                <Text type='overline' style={styles.contentHeader}
                >{feedbackSharing.result}</Text>
                 <Text type='body2' style={styles.contentBody}
                >{state.result}</Text>
              </View>
              </View>
          </View>
        </View>
      </Wrapper>
      {isLoading && <Loader />}
    </View>
  )
}

export default SharingReview;

SharingReview.propTypes = {
  staffName: PropTypes.string,
  sharingId: PropTypes.number,
  step1Data: PropTypes.object,
  step2Data: PropTypes.object,
  fetchCurrentSharing: PropTypes.func,
  isLoading: PropTypes.bool,
};

SharingReview.defaultProps = {
  staffName: '',
  sharingId: 1,
  step1Data: {},
  step2Data: {},
  fetchCurrentSharing: () => {},
  isLoading: false
};
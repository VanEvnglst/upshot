import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text, Loader } from 'app/components';
import {
  getDocumentingId,
  getChosenType,
  getStep1Data,
  getStep2Data,
  getStep3Data,
  getStep5Data,
  getDocumentingFetching,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/DocumentingRedux';
import styles from './styles';

const DocumentingReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const documentingId = useSelector(getDocumentingId);
  const type = useSelector(getChosenType);
  const isLoading = useSelector(getDocumentingFetching);
  const step1Data = useSelector(getStep1Data);
  const step2Data = useSelector(getStep2Data);
  const step3Data = useSelector(getStep3Data);
  const step5Data = useSelector(getStep5Data);
  const [state, setState] = useState({});

  useEffect(() => {
    async function retrieveData() {
      await dispatch(DocumentingActions.fetchCurrentDocumenting(documentingId));
    }
    retrieveData();
  }, []);

  useEffect(() => {
    if (step1Data.data) handleData();
  }, [step1Data, step2Data, step3Data, step5Data]);

  const handleData = async () => {
    const staffName = step1Data.data && step1Data.data.name;
    let followUp = '';
    let topicList = '';
    step2Data.data.map(item => {
      topicList = `${item.name}, `;
    });
    switch (step5Data.data && step5Data.data.value) {
      case 0:
        followUp = `This is the first time I'm giving feedback about this observation`;
        break;
      case 1:
        followUp = `1 value`;
        break;
      case 2:
        followUp = `2 value`;
        break;
      case 3:
        followUp = `3 value`;
        break;
    }
    setState({
      name: staffName,
      topics: topicList,
      date: step3Data.data,
      followUpCount: followUp,
    });
  };

  const handleNavigation = () => {
    console.log('press');
  };

  const PressableData = ({ title }) => {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        onPress={() => console.log('edit')}
        style={styles.pressable}>
        <Text type="body1" style={[styles.pressableText, styles.textHeight]}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  console.log('render screen', state);
  return (
    <View style={styles.container}>
      <Wrapper>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Text type="overline">Review</Text>
        <Text type="h6">Part 1 - Documenting</Text>
        <View style={styles.contentContainer}>
          <Text type="body1" style={[styles.textHeight, styles.bodyText]}>
            I want to give
          </Text>
          <PressableData title={`${type.type_name} feedback`} />
          <Text type="body1" style={[styles.textHeight, styles.bodyText]}>
            to
          </Text>
          <PressableData title={state.name} />
          <Text type="body1" style={[styles.textHeight, styles.bodyText]}>
            related to their
          </Text>
          <PressableData title={state.topics} />
          <Text type="body1" style={[styles.textHeight, styles.bodyText]}>
            for something that happened
          </Text>
          <PressableData title={state.date} />
          <PressableData title={`\n\n${state.followUpCount}`} />
        </View>

        {/*    <PressableData title={state.date} /> */}
      </Wrapper>
      {isLoading && <Loader />}
    </View>
  );
};

export default DocumentingReview;

DocumentingReview.propTypes = {};

DocumentingReview.defaultProps = {};

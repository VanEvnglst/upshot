import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';
import {
  getDocumentingId,
  getChosenType,
  getStep1Data,
  getStep2Data,
  getStep3Data,
  getDocumentingFetching,
} from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
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
  const [state, setState] = useState({});

  useEffect(() => {
    async function retrieveData() {
      await dispatch(DocumentingActions.fetchCurrentDocumenting(documentingId));
    }
    retrieveData();
    if(step1Data.data)
    handleData();
  }, [step1Data]);

  // useEffect(() => {
  //   handleData();
  // },[step1Data]);

  const handleData = () => {
    setState({
      name: step1Data.data.name,
      date: step3Data.data,
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
        style={{ marginHorizontal: 7 }}>
        <Text type="body1" style={{ textDecorationLine: 'underline'}}>{title}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      {isLoading && (
        <View
          style={{
            opacity: 0.4,
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <ActivityIndicator size="large" color="#000000" />
        </View>
      )}
      <Wrapper>
        <Header
          headerLeft={{
            onPress: () => navigation.goBack(),
          }}
        />
        <Text type="overline">Review</Text>
        <Text type="h6">Part 1 - Documenting</Text>
        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
          }}>
          <Text type="body1" style={{ lineHeight: 48 }}>
            I want to give
          </Text>
          <PressableData title={`${type.type_name} feedback`} />
          <Text type="body1">to</Text>
          <PressableData title={state.name} />
          <PressableData title={state.date} />
          
        </View>
      </Wrapper>
    </View>
  );
};

export default DocumentingReview;

DocumentingReview.propTypes = {};

DocumentingReview.defaultProps = {};

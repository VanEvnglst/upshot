import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Wrapper, Header, Text } from 'app/components';
import { getDocumentingId, getChosenType, getChosenFlow, } from 'app/store/selectors';
import DocumentingActions from 'app/store/feedback/documentingRedux';
import styles from './styles';

const DocumentingReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const documentingId = useSelector(getDocumentingId);
  const [state, setState] = useState();

  useEffect(() => {
    async function retrieveData() {
      await dispatch(DocumentingActions.fetchCurrentDocumenting(documentingId));
    }
    retrieveData();
  }, []);

  const handleData = () => {

  }

  const handleNavigation = () => {
    console.log('press');
  };

  const PressableData = () => {
    return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={() => console.log('edit')}
      style={{ marginHorizontal: 7 }}>
      <Text type="body1">Data</Text>
    </TouchableOpacity>
    );
  };
  return (
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
        <PressableData />
        {/* <TouchableOpacity onPress={() => handleNavigation()}>
          <Text type="body1">corrective feedback</Text>
        </TouchableOpacity> */}
        <Text type="body1">to</Text>
      </View>
    </Wrapper>
  );
};

export default DocumentingReview;

DocumentingReview.propTypes = {};

DocumentingReview.defaultProps = {};

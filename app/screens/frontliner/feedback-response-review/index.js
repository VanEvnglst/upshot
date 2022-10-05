import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import FrontlinerFeedbackActions from 'app/store/frontliner/FLFeedbackRedux';
import styles from './styles';

const FrontlinerResponseReview = props => {
  const { navigation } = props;
  const dispatch = useDispatch();
  const maxStep = useSelector(state => state.frontlinerFeedback.get('maxStep'));
  const activeStep = useSelector(state =>
    state.frontlinerFeedback.get('activeStep'),
  );

  const handleGoBack = () => {
    dispatch(FrontlinerFeedbackActions.setResponseActiveStep(activeStep - 1));
  };

  return (
    <ScrollView style={{ backgroundColor: '#FCFCFD' }}>
      <View
        style={{
          marginTop: 70,
          flexDirection: 'row',
          borderBottomWidth: 0.3,
          paddingBottom: 24,
          paddingHoriztonal: 16,
        }}>
        <TouchableOpacity
          accessibilityRole="button"
          style={{ marginRight: 16, marginLeft: 16 }}
          onPress={() => handleGoBack()}>
          <Icon name="chevron-back-outline" size={24} color={'#667080'} />
        </TouchableOpacity>
        <View style={{ flex: 2 }}>
          <Text
            style={{
              fontSize: 24,
              lineHeight: 30,
              color: '#667080',
              fontWeight: '700',
            }}>
            Review and Send
          </Text>
          <Text
            style={{
              fontSize: 14,
              lineHeight: 18,
              color: '#667080',
              fontWeight: '400',
              marginTop: 5,
            }}>
            Review your responses before sending it to your manager.
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 24, paddingHorizontal: 24 }}>
        <View style={{ flexDirection: 'row ' }}></View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            The event observed...
          </Text>
          {/* <Text style={{ marginTop: 8}}>sdfjsk;ld;gsjdfafadfaf</Text> */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: '#777E90',
                fontSize: 16,
                fontWeight: '70',
                lineHeight: 22,
                alignSelf: 'flex-end',
              }}>
              You replied...
            </Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            The impact to the business / team...
          </Text>
          {/* <Text style={{ marginTop: 8}}>sdfjsk;ld;gsjdfafadfaf</Text> */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: '#777E90',
                fontSize: 16,
                fontWeight: '70',
                lineHeight: 22,
                alignSelf: 'flex-end',
              }}>
              You replied...
            </Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            What to continue / do more of...
          </Text>
          {/* <Text style={{ marginTop: 8}}>sdfjsk;ld;gsjdfafadfaf</Text> */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: '#777E90',
                fontSize: 16,
                fontWeight: '70',
                lineHeight: 22,
                alignSelf: 'flex-end',
              }}>
              What you need clarified...
            </Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            What to do less of...
          </Text>
          {/* <Text style={{ marginTop: 8}}>sdfjsk;ld;gsjdfafadfaf</Text> */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: '#777E90',
                fontSize: 16,
                fontWeight: '70',
                lineHeight: 22,
                alignSelf: 'flex-end',
              }}>
              What you need clarified...
            </Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            What to stop doing...
          </Text>
          {/* <Text style={{ marginTop: 8}}>sdfjsk;ld;gsjdfafadfaf</Text> */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: '#777E90',
                fontSize: 16,
                fontWeight: '70',
                lineHeight: 22,
                alignSelf: 'flex-end',
              }}>
              What you need clarified...
            </Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            Additional Details
          </Text>
          {/* <Text style={{ marginTop: 8}}>sdfjsk;ld;gsjdfafadfaf</Text> */}
          <View style={{ marginTop: 24 }}>
            <Text
              style={{
                color: '#777E90',
                fontSize: 16,
                fontWeight: '70',
                lineHeight: 22,
                alignSelf: 'flex-end',
              }}>
              You replied...
            </Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <View
          style={{
            borderRadius: 12,
            borderWidth: 0.3,
            paddingHorizontal: 12,
            paddingVertical: 16,
          }}>
          <Text
            style={{
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            How to support you by...
          </Text>
          <Text
            style={{
              marginTop: 8,
              color: '#777E90',
              fontSize: 16,
              fontWeight: '70',
              lineHeight: 22,
            }}>
            sdfjsk;ld;gsjdfafadfaf
          </Text>
          <View style={{ marginTop: 24 }}>
            <Text style={{ alignSelf: 'flex-end' }}>What you need...</Text>
            <TextInput
              style={{
                marginTop: 8,
                borderColor: '#E6E8EC',
                borderRadius: 6,
                borderWidth: 0.3,
                backgroundColor: '#F4F6F9',
                paddingVertical: 13,
                paddingHorizontal: 12,
                height: 170,
              }}
            />
          </View>
        </View>
        <Button mode="contained" onPress={() => {}}>
          Send Response
        </Button>
      </View>
    </ScrollView>
  );
};

export default FrontlinerResponseReview;

FrontlinerResponseReview.propTypes = {};

FrontlinerResponseReview.defaultProps = {};

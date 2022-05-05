import React, { useState, useEffect } from 'react';
import { View, ScrollView, Animated, Image } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  Wrapper,
  Text,
  Header,
  ButtonSelection,
  TextInput,
  Loader,
} from 'app/components';
import MessagesActions from 'app/store/MessagesRedux';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const ResponseScreen = props => {
  const { navigation, route } = props;
  const { message } = route.params;
  const dispatch = useDispatch();
  const messageBody = useSelector(state => state.messages.get('body'));
  const isLoading = useSelector(state => state.messages.get('fetching'));
  const user = useSelector(state => state.user.get('firstName'));
  const [response, setResponse] = useState();
  const [responseSent, setResponseSent] = useState(false);
  const [reason, setResponseReason] = useState('');

  const available = "Yes, I'm available";
  const reschedule = 'No, can we reschedule?';

  useEffect(() => {
    console.log('route', route.params);
    async function retrieveMessages() {
      await dispatch(MessagesActions.fetchMessage(message.id));
    }
    retrieveMessages();
  }, []);

  const handleBack = () => {
    navigation.navigate('Messages');
    //TODO: reset message state on API integration
  };

  const handleSelection = item => {
    setResponse(item);
  };

  const DiscussionMessage = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            What
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.what}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            When
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.when}
          </Text>
        </View>
      </View>
    );
  };

  const ActionPlanMessage = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            What
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.what}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            When
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.when}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            Who
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.who}
          </Text>
        </View>
      </View>
    );
  };

  const PositiveFeedbackMessage = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            What
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.what}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            When
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.when}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            Who
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {messageBody && messageBody.who}
          </Text>
        </View>
      </View>
    );
  };

  // const CurrentMessage = () => {
  //   return (
  //     <View style={styles.currentMessageCard}>
  //       <View style={styles.nameContainer}>
  //         <Image source={Images.avatar} style={styles.avatar} />
  //         <View style={styles.nameContent}>
  //           <View style={styles.senderContainer}>
  //             <Text type="caption" style={styles.senderNameText}>
  //               From EM
  //             </Text>
  //             <Text type="caption" style={styles.dateText}>
  //               10:00 AM
  //             </Text>
  //           </View>
  //           <Text type="caption" style={styles.receipientNameText}>
  //             to me
  //           </Text>
  //         </View>
  //       </View>
  //       <ActionPlanMessage />
  //     </View>
  //   );
  // };

  // const OlderMessage = () => {
  //   return (
  //     <View style={styles.olderMessageCard}>
  //       <View style={styles.nameContainer}>
  //         <Image source={Images.avatar} style={styles.avatar} />
  //         <View style={styles.nameContent}>
  //           <View style={styles.senderContainer}>
  //             <Text type="caption" style={styles.senderNameText}>
  //               From EM
  //             </Text>
  //             <Text type="caption" style={styles.dateText}>
  //               10:00 AM
  //             </Text>
  //           </View>
  //           <Text type="caption" style={styles.receipientNameText}>
  //             Message text...
  //           </Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const MessageCard = ({
    isCurrentMessage,
    body,
    sender,
    receipient,
    time,
  }) => {
    return (
      <View
        style={[
          isCurrentMessage
            ? styles.currentMessageCard
            : styles.olderMessageCard,
          { marginVertical: 10 },
        ]}>
        <View style={styles.nameContainer}>
          <Image source={Images.avatar} style={styles.avatar} />
          <View style={styles.nameContent}>
            <View style={styles.senderContainer}>
              <Text type="caption" style={styles.senderNameText}>
                From {message.from}
              </Text>
              <Text type="caption" style={styles.dateText}>
                {message.timestamp}
              </Text>
            </View>
            {isCurrentMessage && (
              <Text type="caption" style={styles.receipientNameText}>
                {message.from !== user ? 'to me' : ''}
              </Text>
            )}
            {!isCurrentMessage && (
              <Text type="caption" style={styles.receipientNameText}>
                Body summary
              </Text>
            )}
            {isCurrentMessage && message.subject === 'Feedback Discussion' ? (
              <DiscussionMessage />
            ) : message.subject === 'Action Plan' ? (
              <ActionPlanMessage />
            ) : (
              <View
                style={{
                  flex: 1,
                  marginTop: 20,
                  height: 200,
                  backgroundColor: 'red',
                }}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <ScrollView 
          showsVerticalScrollIndicator={false} bounces={false}>
          <Header
            headerLeft={{
              onPress: () => handleBack(),
            }}
          />
          <Text type="h6" style={styles.headerText}>
            {message.subject}
          </Text>
          <View style={styles.container}>
            <MessageCard isCurrentMessage={true} />
            {/* {!responseSent && (
              <View style={styles.responseContainer}>
                <Text type="h6" style={styles.frontlinerQuestion}>
                  Can you make it?
                </Text>
                <ButtonSelection
                  onPress={() => handleSelection(available)}
                  title={available}
                  type="Radio"
                  selected={response === available}
                />
                <ButtonSelection
                  onPress={() => handleSelection(reschedule)}
                  title={reschedule}
                  type="Radio"
                  selected={response === reschedule}
                />
              </View>
            )} */}
          </View>
          {/* {!responseSent && (
            <View style={styles.btnContainer}>
              <Button mode="contained">Send</Button>
            </View>
          )} */}
        </ScrollView>
      </Wrapper>
      {isLoading && <Loader />}
    </View>
  );
};

export default ResponseScreen;

ResponseScreen.propTypes = {};

ResponseScreen.defaultProps = {};

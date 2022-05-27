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
import { getMessagesFetching, getCurrentMessage } from 'app/store/selectors';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
import styles from './styles';

const MessageThreadScreen = props => {
  const { navigation, route } = props;
  const { message } = route.params;
  const dispatch = useDispatch();
  const currentMessage = useSelector(getCurrentMessage);
  const isLoading = useSelector(getMessagesFetching);
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
    dispatch(MessagesActions.resetMessageState());
    navigation.navigate('Messages');
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
            {currentMessage && currentMessage.body.what}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            When
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {currentMessage && currentMessage.body.when}
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
            What is the specific action?
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {currentMessage.body.what}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            When will this happen?
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {currentMessage.body.when}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            Who will make it happen?
          </Text>
          <Text type="body2" style={styles.contentBody}>
            {currentMessage.body.who}
          </Text>
        </View>
      </View>
    );
  };

  const PositiveFeedbackMessage = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text type='body2' style={[styles.textHeight, styles.contentBody, styles.contentTitle]}>{currentMessage.body.message}</Text>
          <Text type="overline" style={styles.contentHeader}>
            Event
          </Text>
          <Text type="body2" style={[styles.contentBody, styles.textHeight]}>
            {currentMessage.body.event}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            Action
          </Text>
          <Text type="body2" style={[styles.contentBody, styles.textHeight]}>
          {currentMessage.body.action}
          </Text>
        </View>
        <View style={styles.content}>
          <Text type="overline" style={styles.contentHeader}>
            Result
          </Text>
          <Text type="body2" style={[styles.contentBody, styles.textHeight]}>
          {currentMessage.body.result}
          </Text>
        </View>
      </View>
    );
  };

  const SystemMessage = () => {
    return (
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text type="body2" style={styles.contentTitle}>
            {currentMessage.body.title}
          </Text>
          {currentMessage.body.lines.map((item, index) => {
            const content = `${currentMessage.body.lines[index]}\n`;
            return (
              <Text
                type="body2"
                style={[styles.contentBody, styles.textHeight]}>
                {content}
              </Text>
            );
          })}
        </View>
      </View>
    );
  };
  const handleInitialMessage = () => {
    console.log('initial', currentMessage);
    switch (currentMessage.type) {
      case 'Feedback Discussion':
        return <DiscussionMessage />;
      case 'Action Plan':
        return <ActionPlanMessage />;
      case 'Positive Feedback':
        return <PositiveFeedbackMessage />;
      case 'System':
        return <SystemMessage />;
    }
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
            {handleInitialMessage()}
            {/* {isCurrentMessage && message.subject === 'Feedback Discussion' ? (
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
            )} */}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <Wrapper>
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
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

export default MessageThreadScreen;

MessageThreadScreen.propTypes = {};

MessageThreadScreen.defaultProps = {};

import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text } from '../../../../components';
import Images from '../../../../assets/images';
import labels from '../../../../locales/en';
import styles from './styles';

const GuideContent = ({ image, title, content }) => {
  return (
    <View style={styles.guideContainer}>
      <Image source={image} resizeMode={'contain'} style={styles.image} />
      <View style={styles.guideContent}>
        <Text type="overline" style={styles.guideTitle}>
          {title}
        </Text>
        <Text type="body2" style={styles.guideText}>
          {content}
        </Text>
      </View>
    </View>
  );
};

const PreparingStep3C = () => {
  const { describeDiscuss } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text type="h6">{describeDiscuss.listenToResponse}</Text>
        <Text type="body1" style={styles.contentText}>
          {describeDiscuss.threeCContent}
        </Text>
        <GuideContent
          title={describeDiscuss.simpleStories}
          content={describeDiscuss.simpleStoriesContent}
          image={Images.simpleStories}
        />
        <GuideContent
          title={describeDiscuss.rightness}
          content={describeDiscuss.rightnessContent}
          image={Images.rightness}
        />
        <GuideContent
          title={describeDiscuss.agreeableness}
          content={describeDiscuss.agreeablenessContent}
          image={Images.agreeableness}
        />
      </View>
    </ScrollView>
  );
};

export default PreparingStep3C;
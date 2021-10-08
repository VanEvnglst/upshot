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

const PreparingStep4C = () => {
  const { createActionPlan } = labels.feedbackPreparing;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <Text type="h6">{describeDiscuss.listenToResponse}</Text>
        <Text type="body1" style={styles.contentText}>
          {createActionPlan.defineNextSteps}
        </Text>
        <GuideContent
          title={createActionPlan.defineWhat}
          content={createActionPlan.defineWhatContent}
          image={Images.simpleStories}
        />
        <GuideContent
          title={createActionPlan.defineWhen}
          content={createActionPlan.defineWhenContent}
          image={Images.rightness}
        />
        <GuideContent
          title={createActionPlan.defineWho}
          content={createActionPlan.defineWhoContent}
          image={Images.agreeableness}
        />
      </View>
    </ScrollView>
  );
};

export default PreparingStep4C;

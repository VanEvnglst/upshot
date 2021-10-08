import React, { useState } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { Text } from 'app/components';
import Images from 'app/assets/images';
import labels from 'app/locales/en';
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
      <View style={styles.container}>
        <Text type="h6">
          {createActionPlan.step}: {createActionPlan.title}
        </Text>
        <Text type="body1" style={styles.descriptionText}>
          {createActionPlan.defineNextSteps}
        </Text>
        <GuideContent
          title={createActionPlan.defineWhat}
          content={createActionPlan.defineWhatContent}
          image={Images.testPassed}
        />
        <GuideContent
          title={createActionPlan.defineWhen}
          content={createActionPlan.defineWhenContent}
          image={Images.schedule}
        />
        <GuideContent
          title={createActionPlan.defineWho}
          content={createActionPlan.defineWhoContent}
          image={Images.manWindow}
        />
      </View>
    </ScrollView>
  );
};

export default PreparingStep4C;

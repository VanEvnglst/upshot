import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native'
import { ContentSkeleton } from 'app/components';
import styles from './styles';

const InsightsPanel = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <ContentSkeleton />
    </View>
  )
};

export default InsightsPanel;
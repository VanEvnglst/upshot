import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native'
import { ContentSkeleton } from 'app/components';
import styles from './styles';

const InsightsPanel = () => {

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'red' }}>
      <ContentSkeleton>
      <Circle cx='30' cy='40' r='30' />
       <Rect x='20' ry={'3'} width={'100'} height={'6'} />
      </ContentSkeleton>
    </View>
  )
};

export default InsightsPanel;
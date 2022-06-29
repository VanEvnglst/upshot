import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import styles from './styles';

const ContentSkeleton = props => {
  const { children } = props;
  return (
    <ContentLoader
      speed={2}
      backgroundColor='#f4f5f6'
      foregroundColor='#ecebeb'
      width={300}
      height={200}
      style={{ borderWidth: 1}}
    >
       <Rect ry={'3'} width={'100'} height={'6'} />
       {/* make this customizable */}
    </ContentLoader>
  )
}

export default ContentSkeleton;
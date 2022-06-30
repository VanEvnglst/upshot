import React from 'react';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import PropTypes from 'prop-types';
import styles from './styles';

const ContentSkeleton = props => {
  const { children, width, height } = props;
  return (
    <ContentLoader
      speed={2}
      backgroundColor='#f4f5f6'
      foregroundColor='#ecebeb'
      width={width}
      height={height}
      {...props}
    >
      {children}
    </ContentLoader>
  )
}

export default ContentSkeleton;

ContentSkeleton.propTypes = {
  children: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number
};


ContentSkeleton.defaultProps = {
  children: {},
  width: 300,
  height: 200,
};
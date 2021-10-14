// import { createNavigationContainerRef } from '@react-navigation/native';
import React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

import React from 'react';
import { StackActions, CommonActions, NavigationActions, } from '@react-navigation/native';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
  // if (navigationRef.isReady()) {
  //   navigationRef.navigate(name, params);
  // }
}

export function navigateAndReset(routeName, params) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      key: null,
      routes: [
        { name: routeName}
      ]
    })
  );
}
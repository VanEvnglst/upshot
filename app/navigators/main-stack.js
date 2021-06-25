import React from 'react';

import TabRoutes from './tab-routes';

export default function (Stack) {
  console.warn('This is the main stack');
  return (
    <>
      <Stack.Screen
        name={'Main'}
        component={TabRoutes}
        options={{ headerShown: false }}
      />
    </>
  );
}

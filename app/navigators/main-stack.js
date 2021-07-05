import React from 'react';

import TabRoutes from './tab-routes';

export default function (Stack) {
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

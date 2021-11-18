import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';

import SignIn from './index';
import labels from 'app/locales/en';

describe('[SCREEN] Sign in', () => {
  
  describe('user interface', () => {
    it('should render the components correctly', () => {
      const { page } = renderPage(<SignIn {...props} />);
    });
  })
});
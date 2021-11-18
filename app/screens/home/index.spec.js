import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderPage, getEndpoint, serverStatus } from 'app/utils/test/helpers';
import HomeScreen from './';
import labels from 'app/locales/en';

describe('[SCREEN] Home', () => {
  let journeyGuide;
  let feedbackCard;
  let comingSoonGuide;
  let comingSoonCard;

  beforeEach(() => {
    const { page, mockStore } = renderPage(<HomeScreen {...props} />);
    pageRendered = page;
    store = mockStore;
    
    journeyGuide = pageRendered.getByTestId('txt-home-journey');
    comingSoonGuide = pageRendered.getByTestId('txt-home-comingSoon');
    feedbackCard = pageRendered.getByTestId('card-home-feedback');
    comingSoonCard = pageRendered.getByTestId('card-home-comingSoon');
  });

  // afterEach(() => {

  // });

  // afterAll(async done => {

  // });

  describe('Rendering', () => {
    it('should render the components correctly', () => {
      expect(journeyGuide).toBeDefined();
      expect(comingSoonGuide).toBeDefined();
      expect(feedbackCard).toBeDefined();
      expect(comingSoonCard).toBeDefined();
    });
  });

  // describe('Successful data retrieval')
})
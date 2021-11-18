import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderPage, getEndpoint, serverStatus } from 'app/utils/test/helpers';
import DocumentingStep1 from './';
import labels from 'app/locales/en';


describe('[SCREEN] Documenting Step 1', () => {
  let nextBtn;
  let nameChip;
  let giveFeedbackToGuide;

  beforeEach(() => { 
    const { page, mockStore } = renderPage(<DocumentingStep1 {...props}/>);
    pageRendered = page;
    store = mockStore;

    giveFeedbackToGuide = pageRendered.getByTestId('txt-documentingStep1-label');
    nameChip = pageRendered.getByTestId('chip-documentingStep1-name');
    nextBtn = pageRendered.getByTestId('btn-documentingStep1-next');
  });

  describe('Rendering', () => {
    it('should render the components correctly', () => {
      expect(giveFeedbackToGuide).toBeDefined();
      expect(nextBtn).toBeDefined();
      expect(nameChip).toBeDefined();
    });

    it('should show the right text for the label', () => {
      // expect(giveFeedbackToGuide)
    });
  });


  describe('Retrieve team staff names', () => {

  });
});
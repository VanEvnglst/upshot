import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderPage, getEndpoint, serverStatus } from 'app/utils/test/helpers';
import DocumentingStep2 from './';
import labels from 'app/locales/en';

describe('[SCREEN] Documenting Step 2', () => {
  let backBtn;
  let nextBtn;
  let feedbackTypeBtn;
  let feedbackTypeGuide;
  let hint;

  beforeEach(() => {
    const { page, mockStore } = renderPage(<DocumentingStep2 {...props} />);
    pageRendered = page;
    store = mockStore;

    feedbackTypeGuide = pageRendered.getByTestId('txt-documentingStep2-label');
    feedbackTypeBtn = pageRendered.getByTestId('select-documentingStep2-type');
    nextBtn = pageRendered.getByTestId('btn-documentingStep2-next');
    backBtn = pageRendered.getByTestId('btn-documentingStep2-back');
    hint = pageRendered.getByTestId('btn-documentingStep2-hint');
  });

  describe('Rendering', () => {
    it('should render the components correctly', () => {
      expect(feedbackTypeGuide).toBeDefined();
      expect(feedbackTypeBtn).toBeDefined();
      expect(backBtn).toBeDefined();
      expect(nextBtn).toBeDefined();
    });

    it('should render the right text label', () => {
      expect(feedbackTypeGuide).toEqual();
    });

    it('should show two buttons for selection', () => {
      expect(feedbackTypeBtn).toEqual(2);
    });

    it('should show the Next button to be disabled when nothing is selected', () => {});
  });

  describe('Selection process', () => {});
});

import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import { renderPage, getEndpoint, serverStatus } from 'app/utils/test/helpers';
import DocumentingStep3 from './';
import labels from 'app/locales/en';
import { Iterable } from 'immutable';
import { exportAllDeclaration } from '@babel/types';


describe('[SCREEN] Documenting Step 3', () => {
  let nextBtn;
  let topicSelection;
  let backBtn;
  let feedbackTopicGuide;
  let otherTopicField;

  beforeEach(() => {
    const { page, mockStore } = renderPage(<DocumentingStep3 {...props} />);
    pageRendered = page;
    store = mockStore;

    feedbackTopicGuide = pageRendered.getByTestId();
    topicSelection = pageRendered.getByTestId();
    otherTopicField = pageRendered.getByTestId();
    nextBtn = pageRendered.getByTestId();
    backBtn = pageRendered.getByTestId();
  });

  describe('Rendering', () => {
    it('should render the components correctly', () => {
      expect(feedbackTopicGuide).toBeDefined('txt-documentingStep3-label');
      expect(topicSelection).toBeDefined('btn-documentingStep3-topic');
      expect(otherTopicField).toBeDefined('input-documentingStep3-otherTopic');
      expect(nextBtn).toBeDefined('btn-documentingStep3-next');
      expect(backBtn).toBeDefined('btn-documentingStep3-back');
    });

    it('should show the right text for the label', () => {

    });

    it('should render the right number of selections', () => {

    });
  });

  // describe('')
})
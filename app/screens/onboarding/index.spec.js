import React from 'react';
import { fireEvent, waitFor } from '@testing-library/react-native';
import MockAdapter from 'axios-mock-adapter';
import { renderPage, getEndpoint, serverStatus } from 'app/utils/test/helpers';
import Onboarding from './';
import labels from 'app/locales/en';
import { FeedbackJourneyList } from '..';

describe('[SCREEN] Onboarding', () => {
  let emailField;
  let passwordField;
  let firstNameField;
  let lastNameField;
  let submitBtn;
  let store;
  const props = {
    navigation: {
      navigate: jest.fn(),
    },
  };

  beforeEach(() => {
    const { page, mockStore } = renderPage(<Onboarding {...props} />);
    pageRendered = page;
    store = mockStore;
    emailField = pageRendered.getByTestId('fld-onboarding-email');
    passwordField = pageRendered.getByTestId('fld-onboarding-password');
    firstNameField = pageRendered.getByTestId('fld-onboarding-firstName');
    lastNameFiled = pageRendered.getByTestId('fld-onboarding-lastName');
    submitBtn = pageRendered.getByTestId('btn-onboarding-submit');
  });

  afterEach(() => {

  });

  afterAll(async done => {
    //reset api?
  });

  describe('Rendering', () => {
    it('should render the components correctly', () => {
      expect(emailField).toBeDefined();
      expect(passwordField).toBeDefined();
      expect(firstNameField).toBeDefined();
      expect(lastNameField).toBeDefined();
      expect(submitBtn).toBeDefined();
    });
  });

  describe('Validations', () => {
    it('should show errors when all fields are empty', async () => {
      fireEvent.changeText(emailField, '');
      fireEvent.changeText(passwordField, '');
      fireEvent.changeText(firstNameField, '');
      fireEvent.changeText(lastNameField, '');
      fireEvent.press(submitBtn);

      await waitFor(() => {
        const emailError = pageRendered.getByText();
        const passwordError = pageRendered.getByText();
        const firstNameError = pageRendered.getByText();
        const lastNameError = pageRendered.getByText();

        expect(emailError).toBeDefined();
        expect(passwordError).toBeDefined();
        expect(firstNameError).toBeDefined();
        expect(lastNameError).toBeDefined();
      });
    });

    it('should only show an error when email field is empty', async () => {
      fireEvent.changeText(emailField, '');
      fireEvent.press(submitBtn);
      const emailError = await waitFor(() => {
        pageRendered.getByText();
      });
      expect(emailError).toBeDefined();
    });

    it('should only show an error when password field is empty', async () => {
      fireEvent.changeText(passwordField, '');
      fireEvent.press(submitBtn);

      const passwordError = await waitFor(() => {
        pageRendered.getByText();
      });
      expect(passwordError).toBeDefined();
    });

    it('should only show an error when first name field is empty', async () => {
      fireEvent.changeText(firstNameField, '');
      fireEvent.press(submitBtn);

      const firstNameError = await waitFor(() => {
        pageRendered.getByText();
      });
      expect(firstNameError).toBeDefined();
    });

    it('should only show an error when last name field is empty', async () => {
      fireEvent.changeText(lastNameField, '');
      fireEvent.press(submitBtn);

      const lastNameError = await waitFor(() => {
        pageRendered.getByText();
      });
      expect(lastNameError).toBeDefined();
    });

    it('should only show an error when email field is invalid', async () => {});

    it('should only show an error when password is invalid', async () => {});
  });

  describe('Successful registration', () => {
    const email = 'testing@library.com';
    const password = 'test123';
    const firstName = 'Testing';
    const lastName = 'Library';

    const mockSignUp = () => {
      // const url = getEndpoint();
    };

    it('should accept user registration', async () => {
      mockSignUp();

      const initialStore = {};
      const emailField = page.getByTestId();
      const passwordField = page.getByTestId();
      const firstNameField = page.getByTestId();
      const lastNameField = page.getByTestId();
      const submitBtn = page.getByTestId();

      fireEvent.changeText(emailField, email);
      fireEvent.changeText(passwordField, password);
      fireEvent.changeText(firstNameField, firstName);
      fireEvent.changeText(lastNameField, lastName);
      fireEvent.press(submitBtn);

      await waitFor(() => {
        const state = state.getState().onboading.get(''); // get error;
        return expect(state).toEqual({});
      });
    });
  });
});

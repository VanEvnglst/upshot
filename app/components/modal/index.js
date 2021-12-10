import React from 'react';
import { Modal as ModalComp } from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles';

const Modal = ({ isVisible, children, onDismiss, style }) => {
  return (
    <ModalComp
      visible={isVisible}
      onDismiss={onDismiss}
      contentContainerStyle={[styles.container, style]}>
      {children}
    </ModalComp>
  );
};

export default Modal;

Modal.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  onDismiss: PropTypes.func.isRequired,
  style: PropTypes.object,
}

Modal.defaultProps = {
  isVisible: false,
  children: {},
  onDismiss: () => {},
  style: {}
};

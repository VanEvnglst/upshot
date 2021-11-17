import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text } from 'app/components';
import styles from './styles';

const CheckBox = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.checkBoxContainer, selected && styles.selectedCheckBox]}>
      {selected && (
        <Icon name="checkmark-sharp" size={20} style={{ color: 'white' }} />
      )}
    </TouchableOpacity>
  );
};

const RadioButton = ({ selected, onPress }) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.radioBtnContainer, selected && styles.selectedRadioBtn]}>
      {selected && <View style={styles.filledRadioBtn} />}
    </TouchableOpacity>
  );
};

const ButtonSelection = props => {
  const { title, type, showHint, content, selected, disabled, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.btnContainer, showHint && styles.showHintContainer]}>
      <View style={styles.selectionContainer}>
        <View style={styles.titleContainer}>
          <Text type={selected ? 'subtitle2' : 'body2'}>{title}</Text>
        </View>
        <View style={styles.typeContainer}>
          {type === 'Radio' && (
            <RadioButton selected={selected} onPress={onPress} />
          )}
          {type === 'Check' && (
            <CheckBox selected={selected} onPress={onPress} />
          )}
        </View>
      </View>
      {showHint && (
        <View style={styles.contentContainer}>
          <Text type="body2" style={styles.hintContent}>
            {content}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default ButtonSelection;

ButtonSelection.PropTypes = {
  selected: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  content: PropTypes.string,
  showHint: PropTypes.bool,
};

ButtonSelection.defaultProps = {
  selected: false,
  onPress: () => {},
  title: '',
  type: 'Radio',
  content: '',
  showHint: false,
};

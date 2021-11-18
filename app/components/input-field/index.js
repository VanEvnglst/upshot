import React, { Component, useState, useRef, useEffect } from 'react';
import { TextInput as Input } from 'react-native-paper';

const TextInput = props => {
  const { label, placeholder } = props;
  const [isFocused, setFocus] = useState(false);
  return (
    <Input
    type='flat'
      textAlignVertical={'top'}
      {...props}
      label={isFocused ? label : null}
      placeholder={isFocused ? null : placeholder}
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    />
  );
};

export default TextInput;
// export default class InputField extends Component {
//   state = {
//     isFocused: false,
//   };

//   componentWillMount() {
//     this._animatedIsFocused = new Animated.Value(
//       this.props.value === '' ? 0 : 1,
//     );
//   }

//   handleFocus = () => this.setState({ isFocused: true });
//   handleBlur = () => this.setState({ isFocused: false });

//   componentDidUpdate() {
//     Animated.timing(this._animatedIsFocused, {
//       toValue: this.state.isFocused || this.props.value !== '' ? 1 : 0,
//       duration: 200,
//     }).start();
//   }

//   render() {
//     const { label, ...props } = this.props;
//     const labelStyle = {
//       position: 'absolute',
//       left: 0,
//       top: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [18, 0],
//       }),
//       fontSize: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: [20, 14],
//       }),
//       color: this._animatedIsFocused.interpolate({
//         inputRange: [0, 1],
//         outputRange: ['#aaa', '#000'],
//       }),
//     };
//     return (
//       <View style={{ paddingTop: 18, flex: 1 }}>
//         <Animated.Text style={labelStyle}>Label</Animated.Text>
//         <TextInput
//           {...props}
//           style={{
//             height: 26,
//             fontSize: 20,
//             color: '#000',
//             borderBottomWidth: 1,
//             borderBottomColor: '#555',
//           }}
//           onFocus={this.handleFocus}
//           onBlur={this.handleBlur}
//           blurOnSubmit
//         />
//       </View>
//     );
//   }
// }

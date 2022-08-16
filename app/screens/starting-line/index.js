import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  TextInput,
} from 'react-native';
import { Button } from 'react-native-paper';
import BottomSheet from '@gorhom/bottom-sheet';
import { Formik } from 'formik';

const StartingLineScreen = props => {
  const bottomSheetRef = useRef(null);
  const { height } = Dimensions.get('window');
  const snapPoints = useMemo(() => ['90%'], []);
  const [sheetType, setSheetType] = useState('');

  const openSheet = type => {
    setSheetType(type);
    bottomSheetRef.current?.snapToIndex(0);
  };

  const InputField = ({ label, placeholder, type, value, autoFocus }) => {
    return (
      <>
        <Text style={{ marginBottom: 4}}>{label}</Text>
        <TextInput
          autoFocus={autoFocus}
          placeholder={placeholder}
          secureTextEntry={type === 'password'}
          value={value}
          style={{ borderWidth: 1, height: 48, paddingHorizontal: 6, borderRadius: 6, marginBottom: 24 }}
        />
      </>
    );
  };

  const SignInContainer = () => {
    return (
      <>
        <KeyboardAvoidingView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '25%',
              paddingLeft: 18,
              paddingRight: 12,
              borderBottomWidth: 1,
            }}>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '700',
                paddingLeft: 30,
              }}>
              Log in
            </Text>
            <TouchableOpacity onPress={() => setSheetType('sign up')}>
              <Text>Sign up</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 22, marginTop: 30 }}>
            <InputField label={'Email'} placeholder={'name@work-email.com'} />
            <InputField
              label={'Password'}
              placeholder={'8+ characters'}
              type={'password'}
            />
          </View>
          <Button
            mode='contained'
            style={{ justifyContent: 'center', alignItems: 'center', height: 58}}
          ><Text>Log in</Text></Button>
        </KeyboardAvoidingView>
      </>
    );
  };

  const SignUpContainer = () => {
    return (
      <>
        <KeyboardAvoidingView>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              height: '25%',
              paddingLeft: 18,
              paddingRight: 12,
              borderBottomWidth: 1,
            }}>
            <TouchableOpacity>
              <Text>X</Text>
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 16,
                lineHeight: 22,
                fontWeight: '700',
                paddingLeft: 30,
              }}>
              Sign up
            </Text>
            <TouchableOpacity onPress={() => setSheetType('sign in')}>
              <Text>Log in</Text>
            </TouchableOpacity>
          </View>
          <View style={{ paddingHorizontal: 22, marginTop: 30 }}>
            <InputField label={'Name'} placeholder={'John Doe'} autoFocus />
            <InputField label={'Email'} placeholder={'name@work-email.com'} />
            <InputField
              label={'Password'}
              placeholder={'8+ characters'}
              type={'password'}
            />
             <Button
            mode='contained'
            style={{  marginTop: 30,justifyContent: 'center', alignItems: 'center', height: 58}}
          ><Text>Sign up</Text></Button>
          </View>
        </KeyboardAvoidingView>
      </>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{ flex: 1, marginTop: 70, paddingLeft: 25, maxWidth: '70%' }}>
        <Text
          style={{
            fontSize: 32,
            lineHeight: 36,
            color: '#667080',
            opacity: 0.7,
            fontWeight: '700',
          }}>
          What if you can track your own
        </Text>
        <Text
          style={{
            fontSize: 32,
            lineHeight: 36,
            color: '#667080',
            fontWeight: '700',
          }}>
          {'leadership\nperformance?'}
        </Text>
      </View>
      <View style={{ flex: 2 }} />
      <View
        style={{
          flex: 1,
          paddingLeft: 25,
          paddingRight: 18,
          marginBottom: 15,
        }}>
        <Button
          mode="contained"
          style={{
            height: 55,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>tell me more</Text>
        </Button>
        <Button
          mode="contained"
          onPress={() => openSheet('sign up')}
          style={{
            marginTop: 8,
            borderWidth: 1,
            height: 55,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{ color: 'black' }}>Sign up</Text>
        </Button>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Text>Already have an account?</Text>
        <TouchableOpacity onPress={() => openSheet('sign in')}>
          <Text style={{ textDecorationLine: 'underline', marginLeft: 4 }}>
            Log in
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 100 }} />
      <BottomSheet
        index={-1}
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose
        containerHeight={height}>
        <View>
          {sheetType === 'sign in' && <SignInContainer />}
          {sheetType === 'sign up' && <SignUpContainer />}
        </View>
      </BottomSheet>
    </View>
  );
};

export default StartingLineScreen;

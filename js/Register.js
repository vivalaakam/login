/**
 * Created by vivalaakam on 21.09.2019.
 *
 * @flow
 */
import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import Input from './InputField';
import Button from './Button';
import validate from './utils/validate';

const styles = StyleSheet.create({});


const reducer = function (state, action) {
  switch (action.type) {
    case 'username':
      return {
        ...state, username: action.payload,
      };
    case 'password':
      return {
        ...state, password: action.payload,
      };
    case 'confirm':
      return {
        ...state, confirm: action.payload,
      };
    default:
      return state;
  }
};


export default function Register() {
  const [form, dispatch] = useReducer(reducer, {});

  function onChangeUsername(e) {
    dispatch({
      type: 'username',
      payload: e.nativeEvent.text,
    });
  }

  function onChangePassword(e) {
    dispatch({
      type: 'password',
      payload: e.nativeEvent.text,
    });
  }

  function onChangeConfirm(e) {
    dispatch({
      type: 'confirm',
      payload: e.nativeEvent.text,
    });
  }

  function submit() {
    if (validate(form)) {
      alert('Authorized');
    } else {
      alert('Validation error');
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <Input label="Username" value={form.username} onChange={onChangeUsername} isLast/>
      <Input label="Password" value={form.password} onChange={onChangePassword} secureTextEntry isLast/>
      <Input label="Confirm password" value={form.confirm} onChange={onChangeConfirm} secureTextEntry isLast/>
      <Button onPress={submit} isLast>registration</Button>
    </View>
  );
}

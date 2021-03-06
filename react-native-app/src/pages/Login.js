import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity
} from 'react-native';
import Trip from "./../components/Trip";
import Logo from "./../components/Logo";
import Form from './../components/Form';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component {

  signup() {
    Actions.signup()
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Ainda não possui uma conta?</Text>
          <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Criar</Text></TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ede9e6',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },
  signupText: {
    color: '#000000',
    fontSize: 16
  },
  signupButton: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500'
  }
});

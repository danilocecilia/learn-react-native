import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Trip from "./Trip";

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>
            VIAGENS
          </Text>
        </View>

        <Trip />
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    
  },
  header: {
    backgroundColor: '#3DA5D9',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 5,
    borderBottomColor: '#225A77',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    padding: 20,
    marginTop: 20,
  }
});

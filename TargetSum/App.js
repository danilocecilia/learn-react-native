import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      backgroundColor: 'grey'
    };

    this.changeColor = this.changeColor.bind(this);
  };

  changeColor(backgroundColor) {
    this.setState({ backgroundColor: backgroundColor });
  }

  render() {
    var backgroundColor = this.state.backgroundColor;

    return (

      <View style={[styles.container, { backgroundColor }]}>
        <TouchableHighlight style={styles.button}
          onPress={() => this.changeColor('yellow')}
          underlayColor="orange">
          <View style={styles.row}>
            <View style={[styles.sample, { backgroundColor: 'yellow' }]} />
            <Text style={styles.text}>Yellow</Text>
          </View>
        </TouchableHighlight>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderWidth: 2,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255,255,255,.8)'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sample: {
    height: 20,
    width: 20,
    borderRadius: 10,
    margin: 5,
    backgroundColor: 'white'
  },
  text: {
    fontSize: 45,
    margin: 5
  }
});

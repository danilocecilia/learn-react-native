import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class Logo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image style={{ width: 150, height: 120 }}
                    source={require('../images/logo.jpg')} />
                <Text style={styles.logoText}>Seja Bem Vindo ao 3em3</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: '#4e4139'
    }
});

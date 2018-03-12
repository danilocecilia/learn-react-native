import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default ProgressBar;

const ProgressBar = () => (
    <View style={styles.progressBar}>
        <ActivityIndicator size="large" color="#EA0000" />
    </View>
);

const styles = StyleSheet.create({
    progressBar: {
        flex: 1,
        justifyContent: 'center'
    }
});
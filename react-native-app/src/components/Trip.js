import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default class Trip extends Component {
    render() {
        return (
            <View style={styles.containerTrip}>
                <Image
                    style={styles.stretch}
                    source={{ uri: 'http://3em3.com/wp-content/uploads/2018/03/3em3-machu_picchu_84-365x235.jpg' }}
                />
                <View style={styles.title}>
                    <Text style={styles.titleText}>Machu Picchu (Peru) – Como é a viagem de Cusco a Machu Picchu</Text>
                </View>
                <View>
                    <Text style={styles.description}>
                        Três a quatro mil pessoas visitam Machu Picchu todos os dias. Chegar lá é literalmente um ritual. Menos de cem anos depois de construir a magistral citadela, os Incas abandonaram o lugar queimaram as trilhas que levavam até o local. Veja como é a viagem de aventura mais desejada do mundo. 1) Cusco Só uma […]
                    </Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerTrip: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    stretch: {
        // flex: 1,
        width: 338,
        height: 300,
        marginBottom: 10
    },
    title: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    titleText: {
        fontSize: 15
    },
    description: {
        marginLeft: 10,
        marginRight: 10,
        color: '#666',
        marginBottom:20
    }

});
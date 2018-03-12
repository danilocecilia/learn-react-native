import React, { Component, PropTypes } from 'react';
import { View, StyleSheet, Image, Dimensions, FlatList } from 'react-native';

import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import ProgressBar from '../components/ProgressBar';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default class Destinations extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isReady: false,
            isLoading: true,
            destinations: []
        };
    }

    fetchData = async () => {
        const response = await fetch('http://3em3.com/wp-json/wp/v2/posts');
        const json = await response.json();
        this.setState({ destinations: json });
    }

    componentDidMount() {
        var self = this;

        setTimeout(function () {
            self.setState({ isLoading: false });
        }, 1);
    }

    async componentWillMount() {
        await Expo.Font.loadAsync({
            Roboto: require("native-base/Fonts/Roboto.ttf"),
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
            //Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });

        this.setState({ isReady: true });
        this.fetchData();
    }

    renderLoader() {
        return (
            this.state.showLoader ? <View><Spinner color='red' /></View> : null
        )
    }

    hideLoader() {
        setTimeout(() => {
            this.setState({ showLoader: false })
        }, 1);
    }

    renderCards(destinations) {

        return (
            <Card>
                <CardItem>
                    <Left style={{ flex: 0.8 }}>
                        {/* <Icon name="ios-book" /> */}
                        <Body>
                            <Text style={{ fontWeight: 'bold', fontSize: 17 }}>{destinations.title.rendered}</Text>
                            <Text note style={{ fontSize: 15 }}>{destinations.title.rendered}</Text>
                        </Body>
                    </Left>
                    <Right style={{ flex: 0.2 }}>
                        {/* <Icon name="ios-heart" /> */}
                    </Right>
                </CardItem>
                <CardItem cardBody>
                    {/* <ProgressiveImage source={{ uri: stories.imageurl }} thumbnail={require("../../images/placeholder.png")} style={{ width: viewportWidth, height: 170 }} thumbnailresizeMode={"cover"} thumbnailkey={"pimg"} /> */}
                    <Image source={{ uri: 'http://3em3.com/wp-content/uploads/2018/03/bonito-brasil-episodio-08-lagoa-365x235.jpg' }} style={{ height: 200, width: 320, alignItems: 'stretch' }} />
                </CardItem>
                <CardItem content>
                    <Text>{destinations.title.rendered}</Text>
                </CardItem>
            </Card>
        )
    }


    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading />;
        }
        //console.warn(this.state.destinations);
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.destinations}
                    keyExtractor={(x, i) => i}
                    renderItem={({ item }) => this.renderCards(item)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    }
})
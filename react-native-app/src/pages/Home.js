import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, ButtonGroup } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import Tab, { TabNavigator } from '../components/Tab'
import Destinations from './Destinations';
import Customers from './Customers';
import About from './About'

import { TabNavigator, TabBarBottom } from "react-navigation";

// import Customers from "../pages/Customers";
// import Destinations from "../pages/Destinations";

export default class Home extends Component {
    constructor() {
        super()

        this.state = {
            selectedIndex: 2
        }

        this.updateIndex = this.updateIndex.bind(this);
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex });
    }

    render() {
        const buttons = ['Destinos', 'Clientes', 'Quem Somos']
        const { selectedIndex } = this.state

        return (
            <View style={styles.container}>

                <Header outerContainerStyles={styles.header}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'Home', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />
                <MainNavigator />
            </View>
        );
    }
}


const MainNavigator = TabNavigator({
    Destinos: {
        screen: Destinations,
    },
    Clientes: {
        screen: Customers,
    },
    'Quem Somos': {
        screen: About
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Destinos') {
                    iconName = `ios-plane${focused ? '' : '-outline'}`;
                } else if (routeName === 'Clientes') {
                    iconName = `ios-briefcase${focused ? '' : '-outline'}`;
                }
                else if(routeName === 'Quem Somos'){
                    iconName = `ios-person${focused ? '' : '-outline'}`;
                }
                return <Ionicons name={iconName} size={25} color={tintColor} />
            }
        }),
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: false,
        tabBarOptions: {
            activeTintColor: '#5b7aa9',
            inactiveTintColor: 'gray',
        }
    });


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#5b7aa9',
    },
    container: {
        //alignSelf: 'stretch',
        //alignContent: 'stretch',
        // justifyContent: 'flex-start',
        // marginHorizontal: 0,
        //backgroundColor: '#5b7aa9',
        flex: 1,
        //alignItems: 'center',
        //justifyContent: 'center',
        //paddingTop: 100,
        //backgroundColor: '#ecf0f1',
    }
})

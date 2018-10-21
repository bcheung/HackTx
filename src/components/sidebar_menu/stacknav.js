import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, TouchableOpacity
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import IOSIcon from 'react-native-vector-icons/Ionicons';
import FirstScreen from './sidebar_menu/screens/FirstScreen';
import SecondScreen from './sidebar_menu/screens/SecondScreen';

const stackNav = StackNavigator({
    Main: {
        screen: FirstScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Main',
            headerLeft: (<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
                <IOSIcon name="ios-menu" size={30} />
            </TouchableOpacity>
            ),
            headerStyle: { paddingRight: 10, paddingLeft: 15 }
        })
    },
    Detail: {
        screen: SecondScreen,
        navigationOptions: ({ navigation }) => ({
            title: 'Detail',
        })
    }
});

export default stackNav;
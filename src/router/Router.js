// import React, { Component } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Home from '../AppIndex';
import About from '../container/About';
// import DatePick from '../../src/components/RegularPicker';

const RouterComponent = StackNavigator({
    Home: { screen: Home },
    About: { screen: About },
    // DatePick: { screen: DatePick }
}, {
    initialRouteName: 'Home',
    headerMode: 'screen'
}
);

export default RouterComponent;

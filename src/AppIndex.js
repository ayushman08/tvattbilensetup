import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
 import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from '../reducers';
// import getTheme from '../theme/components';
// import variables from '../theme/variables/commonColor';
// import LibraryList from './LibraryList';
import { Header, Button, CardSection } from './components/common';
// import { Container, Title, Content, Icon, Card, CardItem, Body, Left, Right } from 'native-base';
// import { StyleProvider } from 'native-base';
// import Button from '../theme/components/Button';
// import Router from "./Router/Router"


class AppIndex extends Component {
      static navigationOptions = {
        header: false }

  
        goToNext() {
       this.props.navigation.navigate('About', { name: 'Jane' });
     }
    
    render() {
     return (
            <View>
            <Header headerText={'Albums'} />
            {/* <LibraryList/> */}
            <CardSection>
             <Button onPress={this.goToNext.bind(this)}>Go to next</Button>
             </CardSection>
            </View>
            );
      }
    }
    
    export default AppIndex;


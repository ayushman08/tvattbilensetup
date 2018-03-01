import React, { Component } from 'react';
// import { Platform, StyleSheet,Text,View} from 'react-native';
 import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { StyleProvider } from 'native-base';
import Router from './router/Router';
import reducers from '../reducers';
import getTheme from '../theme/components';
import variables from '../theme/variables/commonColor';


class App extends Component {
render() {
// const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
return (
       <Provider store={createStore(reducers)}> 
       <StyleProvider style={getTheme(variables)}>
       <Router />
      </StyleProvider>
      </Provider> 
    );
  }
}

export default App;


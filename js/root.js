/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';
import {connect} from 'react-redux';
import Router from './configs/router';
import {skipLogin, asyncSkipLogin} from './actions/user';


import LoginPage from './pages/login';
import MainPage from './pages/main';

let initialRoute = {
    name: 'login-page',
    page: LoginPage,
}

class Root extends Component {
  constructor(props){
      super(props);
      if(props.isLoggedIn){
          initialRoute = {
              name: 'main-page',
              page: MainPage
          }
      }
  }


  renderScene({page, name, id, index, props}, navigator){
      //console.log('will go to page ', name);
      this.router = this.router || new Router(navigator);
      if(page){
          return React.createElement(page, {
              ...props,
              ref: view => this[index] = view,
              router: this.router,
              name,
              route: {
                  name,
                  id,
                  index
              }
          })
      }
  }

  configureScene(route){
      if(route.sceneConfig){
          return route.sceneConfig;
      }
      return Navigator.SceneConfigs.FloatFromRight;
  }

  render() {
    return (
      <Navigator 
        ref={view => this.navigator=view}
        initialRoute={initialRoute}
        configureScene={this.configureScene.bind(this)}
        renderScene={this.renderScene.bind(this)}
      />
    );


    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
        <Text onPress={this.handlePress.bind(this)}>Click this</Text>
      </View>
    );
  }


  handlePress(){
    console.log('handlePress');
    //this.props.dispatch(skipLogin());
    //this.props.dispatch(asyncSkipLogin());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});


function select(store){
  return {
    isLoggedIn: store.userStore.isLoggedIn
  }
}


export default connect(select)(Root);

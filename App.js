/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {combineReducers, createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import {addNavigationHelpers, StackNavigator} from 'react-navigation'
import StackLogin from './src/config/StackLogin'

const navReducer = (state, action) => {
  const newState = StackLogin.router.getStateForAction(action, state)
  return newState || state
}

const rootReducer = combineReducers({
  nav: navReducer
})

// here is our redux-aware our smart component
function ReduxNavigation (props) {
  const { dispatch, nav } = props
  const navigation = addNavigationHelpers({
    dispatch,
    state: nav
  })

  return <StackLogin navigation={navigation} />
}

const mapStateToProps = state => ({ nav: state.nav })
const NavigationRedux = connect(mapStateToProps)(ReduxNavigation)


const store = createStore(rootReducer)

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <NavigationRedux />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

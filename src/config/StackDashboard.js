import {StackNavigator, DrawerNavigator} from 'react-navigation'
import  Login from '../screens/login'
import  Screen1 from '../screens/screen1'
import React from 'react'
import {Text} from 'react-native'

const LoginStack2 = StackNavigator({
    Screen1: { screen: Screen1 }
  }, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'green'},
        title: 'Logged In to your app2',
        headerLeft: <Text onPress={() => {
            navigation.navigate('DrawerOpen')
            {/* if (navigation.state.index === 0) {
                navigation.navigate('DrawerOpen')
            } else {
                navigation.navigate('DrawerClose')
            } */}
            }}>Menu</Text>
      })
  });

const LoginStack = StackNavigator({
    Login: { screen: Login }
  }, {
    navigationOptions: ({navigation}) => ({
        headerStyle: {backgroundColor: 'green'},
        title: 'Logged In to your app',
        headerLeft: <Text onPress={() => {
            navigation.navigate('DrawerOpen')
            {/* if (navigation.state.index === 0) {
                navigation.navigate('DrawerOpen')
            } else {
                navigation.navigate('DrawerClose')
            } */}
            }}>Menu</Text>
      })
  });

const DrawerStack = DrawerNavigator({
    Login: { screen: LoginStack },
    Login2: { screen: LoginStack2 }
  }, {
      navigationOptions:{
          //header: null
      },
      contentOptions:{

      }
  }) 
export default StackDashboard = StackNavigator({
    DrawerStack: { screen: DrawerStack }
  }, {
    headerMode: 'none'
  })
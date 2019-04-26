import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DashBoardScreen from './src/container/dashboard';
import WelcomeScreen from './src/container/Welcome';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';


export default class App extends React.Component {
  render() {
    return (
        <AppContainer />
    );
  }
}






const AppSwitchNavigator = createSwitchNavigator({
  Welcome:{screen: WelcomeScreen},
  DashBoard:{screen: DashBoardScreen}
});

const AppContainer = createAppContainer(AppSwitchNavigator);
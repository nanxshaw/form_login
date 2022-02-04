import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from '../pages/StartPage';
import Login from '../pages/Login';
import Home from '../pages/Home';
import { connect } from 'react-redux';

const Stack = createNativeStackNavigator();
class AppNavigator extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="StartPage"
            component={this.props.token == null ? Home : StartPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
})

const connectComponent = connect(mapStateToProps)
export default connectComponent(AppNavigator);

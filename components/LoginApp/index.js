import React from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { createAppContainer } from "react-navigation";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Login from "../LoginApp/login";
import Register from "../LoginApp/register";

class LoginScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Login />
      </View>
    );
  }
}

class RegisterScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Register />
      </View>
    );
  }
}

const TabNavigation = createMaterialBottomTabNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        tabBarLabel: "Login",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="user" type="font-awesome" color={tintColor} size={24} />
        )
      }
    },
    "No Account? Register Here": {
      screen: Register,
      navigationOptions: {
        tabBarLabel: "No Account? Register Here",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="sign-in"
            type="font-awesome"
            color={tintColor}
            size={24}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Login",
    activeTintColor: "#FFFFFF",
    inactiveTintColor: "#000000",
    barStyle: { backgroundColor: "#FCC133" }
  }
);

export default createAppContainer(TabNavigation);
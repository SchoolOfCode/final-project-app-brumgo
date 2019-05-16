import React from "react";
// import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { transition1 } from "./utils/animations/customAnimations";

import LoadingPage from "./components/LoadingPage";
import MainAppComponent from "./components/MainAppComponent";
import StoryBook from "./storybook";
import Login from "./components/LoginApp";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: LoadingPage,
      navigationOptions: {
        header: null
      }
    },
    Main: {
      screen: MainAppComponent,
      navigationOptions: {
        title: "BrumGo"
      }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: "Log In or Register"
      }
    },

    StoryBook: {
      screen: StoryBook,
      navigationOptions: {
        title: "StoryBook"
      }
    }
  },
  {
    initialRouteName: "Home",
    transitionConfig: () => transition1(500)
  }
);

export default createAppContainer(AppNavigator);

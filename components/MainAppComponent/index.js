import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createMaterialTopTabNavigator,
  createAppContainer
} from "react-navigation";

import FlatList from "../FlatList";
import FooterSection from "../FooterSection";
import MapDisplay from "../MapDisplay";
import GeoPopping from "../GeoPopping";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <GeoPopping />
        <View style={styles.map}>
          <MapDisplay />
        </View>
        <View style={styles.footer}>
          <FooterSection />
        </View>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.list}>
          <FlatList />
        </View>
        <View style={styles.footer}>
          <FooterSection />
        </View>
      </View>
    );
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Map: HomeScreen,
  List: SettingsScreen
});

export default createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%"
  },

  map: {
    // flex: 7,
    height: "90%",
    width: "100%"
  },
  list: {
    height: "90%",
    width: "100%"
  },
  footer: {
    // flex: 1,
    height: "10%",
    width: "100%"
  }
});

import React from "react";
import { View, Image, TouchableHighlight } from "react-native";
import { Marker } from "react-native-maps";
import pois from "../../data/digbethPois";

const iconSet = {
  Building: require("./Building.png"),
  Culture: require("./Culture.png"),
  Market: require("./Market.png"),
  Event: require("./Event.png")
};

keyExtractor = (item, index) => index.toString();

export default function PinMarker() {
  return (
    <View>
      {pois.map((item, idx) => {
        return (
          <Marker
            key={idx}
            title={item.poiName}
            coordinate={{
              latitude: item.poiLocation.lat,
              longitude: item.poiLocation.lng
            }}
          >
            <TouchableHighlight>
              <Image
                style={{ height: 20, width: 20 }}
                source={iconSet[item.category]}
              />
            </TouchableHighlight>
          </Marker>
        );
      })}
    </View>
  );
}
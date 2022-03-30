import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Geocoder from "react-native-geocoding";
import Toast from "react-native-toast-message";

import HanasStack from "@routes";
import store from "./src/redux";
import { MAPS_API_KEY } from "@env";

Geocoder.init(MAPS_API_KEY);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HanasStack />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}

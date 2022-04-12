import * as React from "react";
import { AppState } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Geocoder from "react-native-geocoding";
import {SWRConfig} from "swr";

import HanasStack from "@routes";
import store from "./src/redux";
import { MAPS_API_KEY } from "@env";

Geocoder.init(MAPS_API_KEY);

export default function App() {
  return (
      <SWRConfig
        value={{
          fetcher: (...args) => fetch(...args).then(res => res.json()),
          suspense: true,

        }}
      >
        <Provider store={store}>
          <NavigationContainer>
            <HanasStack />
          </NavigationContainer>
        </Provider>
      </SWRConfig>
        
  );
}

import * as React from "react";
import { ActivityIndicator, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Geocoder from "react-native-geocoding";
import { SWRConfig } from "swr";

import HanasStack from "@routes";
import store from "./src/redux";
import { MAPS_API_KEY } from "@env";
import { Suspense } from "react";
import Loading from "@components/Loading";

Geocoder.init(MAPS_API_KEY);

export default function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
        suspense: true,
      }}
    >
      <Suspense fallback={<Loading title="Loading" />}>
        <Provider store={store}>
          <NavigationContainer>
            <HanasStack />
          </NavigationContainer>
        </Provider>
      </Suspense>
    </SWRConfig>
  );
}

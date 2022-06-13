import React, { useState } from "react";
import { AppState, Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Geocoder from "react-native-geocoding";
import { SWRConfig } from "swr";
import AppLoading from "expo-app-loading";

import AddressProvider from "./src/context/addressContext";
import { SocketProvider } from "./src/context/socketContext";
import HanasStack from "@routes";
import store from "./src/redux";
import { MAPS_API_KEY } from "@env";
import { Suspense } from "react";
import Loading from "@components/Loading";
import useFonts from "@hooks/useFonts";

Geocoder.init(MAPS_API_KEY);

export default function App() {
  const [IsReady, setIsReady] = useState(false);

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={(error) => console.log(error)}
      />
    );
  }

  return (
    <SWRConfig
      value={{
        fetcher: (...args) => fetch(...args).then((res) => res.json()),
        topServicesFetcher: (...args) =>
          fetch(...args).then((res) => res.json()),
        suspense: true,
      }}
    >
      <Suspense
        fallback={
          <View style={styles.suspenseLoadContainer}>
            <Loading title="Please wait..." />
          </View>
        }
      >
        <Provider store={store}>
          <NavigationContainer>
            <AddressProvider>
              <SocketProvider>
                <HanasStack />
              </SocketProvider>
            </AddressProvider>
          </NavigationContainer>
        </Provider>
      </Suspense>
    </SWRConfig>
  );
}

const styles = StyleSheet.create({
  suspenseLoadContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});

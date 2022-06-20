import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import Geocoder from "react-native-geocoding";
import { SWRConfig } from "swr";
import AppLoading from "expo-app-loading";

import AddressProvider from "./src/context/addressContext";
import { fetcher } from "@helpers/fetcher";
import HanasStack from "@routes";
import Loading from "@components/Loading";
import { MAPS_API_KEY } from "@env";
import { Suspense } from "react";
import { SocketProvider } from "./src/context/socketContext";
import store from "./src/redux";
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
        fetcher,
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

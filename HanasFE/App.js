import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import HanasStack from "@routes";
import store from "./src/redux";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HanasStack />
      </NavigationContainer>
    </Provider>
  );
}

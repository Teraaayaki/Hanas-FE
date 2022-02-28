import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HanasStack from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <HanasStack />
    </NavigationContainer>
  );
}

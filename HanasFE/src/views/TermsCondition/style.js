import { StyleSheet, StatusBar } from "react-native";
import { Font } from "expo";
import { colors } from "@constants";

export default StyleSheet.create({
  buttonContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pinkButtonContainer: {
    width: "65%",
  },
  terms: {
    backgroundColor: "white",
    marginBottom: 100,
    // flex: 1,
  },
});

import { StyleSheet, StatusBar } from "react-native";
import { margin, fontSize } from "@constants";

export default StyleSheet.create({
  header: {
    alignItems: "center",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    marginBottom: margin.m2,
  },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
});

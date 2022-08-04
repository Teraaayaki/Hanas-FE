import { StyleSheet, StatusBar } from "react-native";
import { margin, fontSize, padding } from "@constants";

export default StyleSheet.create({
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: StatusBar.currentHeight,
  },
  headerText: {
    marginBottom: margin.m2,
  },
  sideView: { width: "25%", justifyContent: "center" },
  text: {
    fontSize: fontSize.h1,
    fontWeight: "bold",
  },
  backIcon: {
    alignSelf: "flex-start",
    paddingLeft: "15%",
  },
});

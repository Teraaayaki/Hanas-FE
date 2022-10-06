import { StyleSheet, StatusBar } from "react-native";
import { margin, fontSize, padding } from "@constants";

export default StyleSheet.create({
  statusBar: {
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "white",
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: 45,
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

import { StyleSheet, Text, View } from "react-native";
import { colors, margin, fontSize, padding, fontWeight } from "@constants";

export default StyleSheet.create({
  noWorkerImage: {
    width: 300,
    height: 300,
    alignSelf: "center",
  },
  noWorkerTextBox: {
    alignItems: "center",
    marginBottom: margin.m5,
  },
  noWorkerText: {
    color: colors.dark,
    fontFamily: "sans-serif-medium",
    // backgroundColor: "white",
    fontStyle: "italic",
  },
});

import { StyleSheet } from "react-native";
import { colors, margin, padding } from "@constants";

export default StyleSheet.create({
  location: {
    alignSelf: "center",
    width: "auto",
    padding: padding.p2,
    marginVertical: margin.m1,
    borderRadius: 20,
    backgroundColor: colors.background,
    elevation: 1,
  },
  pin: {
    width: 15,
    height: 15,
  },
  text: {
    fontStyle: "italic",
  },
});

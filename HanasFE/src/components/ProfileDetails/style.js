import { StyleSheet } from "react-native";
import { colors, margin, padding, fontSize, fontWeight } from "@constants";

export default StyleSheet.create({
  profileInfoContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.bordergrey,
    paddingVertical: padding.p5,
  },
  headingText: {
    fontFamily: "Bold",
    fontSize: fontSize.h2,
    paddingVertical: padding.p5,
  },
  values: {
    fontSize: fontSize.label,
    color: colors.black,
    paddingLeft: padding.p3,
    fontFamily: "Regular",
  },
  valuesEditable: {
    fontSize: fontSize.label,
    color: colors.blue,
    paddingLeft: padding.p3,
    fontFamily: "Regular",
  },
  controlledWidth: {
    maxWidth: 300,
  },
});

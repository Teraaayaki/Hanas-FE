import { StyleSheet } from "react-native";
import { fontSize, colors, margin, padding } from "@constants";

export default StyleSheet.create({
  labelText: {
    fontSize: fontSize.h3,
    fontWeight: "bold",
    color: colors.dark,
  },
  textContainer: {
    marginHorizontal: margin.m3,
    marginTop: margin.m3,
    marginBottom: margin.m2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: padding.p3,
    // backgroundColor: "darkgrey",
  },
});

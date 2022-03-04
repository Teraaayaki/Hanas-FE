import { StyleSheet } from "react-native";
import { colors } from "@constants";
import { fontSize, padding } from "@constants";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: padding.p3,
  },
  title: {
    fontSize: fontSize.p,
    color: colors.dark,
    paddingRight: padding.p2,
  },
  linkTitle: {
    fontSize: fontSize.p,
    color: colors.secondary,
  },
});

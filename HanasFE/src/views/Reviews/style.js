import { StyleSheet } from "react-native";
import { margin, padding, colors, fontSize, fontWeight } from "@constants";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  textContainer: {
    marginHorizontal: margin.m3,
    marginTop: margin.m3,
    marginBottom: margin.m2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: padding.p3,
    backgroundColor: colors.background,
  },
  ratingText: {
    fontSize: fontSize.h1,
    fontWeight: fontWeight.light,
  },
  fadeTextValues: {
    fontSize: fontSize.h3,
    fontWeight: fontWeight.bold,
    color: colors.black,
  },
  ratingContainer: {
    flexDirection: "row",
    marginLeft: "6%",
    marginRight: "-17%",
    width: "100%",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { colors, margin, fontSize, padding, fontWeight } from "@constants";

export default StyleSheet.create({
  //CLIENT STyLES///////////////////////////////////////////////////////////////////////////
  container: {
    flex: 1,
    backgroundColor: colors.lightGrey,
  },
  horizontalContainer: {
    flex: 1,
    flexDirection: "row",
  },
  headerText: {
    fontSize: fontSize.title,
    color: colors.dark,
    fontWeight: fontWeight.bold,
    alignSelf: "center",
  },
  horizontalScrollContainer: {
    height: "auto",
  },
  textContainer: {
    marginHorizontal: margin.m3,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: padding.p3,
    backgroundColor: "transparent",
  },
  labelText: {
    fontSize: fontSize.label,
  },
  fadeText: {
    fontSize: fontSize.h5,
    color: colors.borderGrey,
  },
  pinkText: {
    color: colors.dark, 
    fontSize: fontSize.h5, 
    alignSelf: "center"
  },
  btnPress: {
    borderRadius: 10,
    padding: 5,
  },
  adjustedTop: {
    marginTop: margin.m5,
  }
});

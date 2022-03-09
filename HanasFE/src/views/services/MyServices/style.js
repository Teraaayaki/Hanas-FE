import { StyleSheet } from "react-native";
import { colors, fontSize, margin, padding } from "@constants";

export default StyleSheet.create({
  body: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    backgroundColor: "#FBB",
    paddingHorizontal: padding.p5,
    paddingTop: padding.p6,
  },
  serviceCard: {
    width: "100%",
    backgroundColor: "#DFF",
  },
  infoCard: {
    borderColor: colors.dark,
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: colors.white,
    minHeight: 140,
    padding: padding.p3,
  },
  flexRowContainer: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#DDF",
  },
  infoColumn: {
    flex: 1,
    height: "100%",
    backgroundColor: "#CFC",
  },
  //Reusables====================================
  //Sizes========================================
  f1: {
    flex: 1,
  },
  f2: {
    flex: 2,
  },
  ml5: {
    marginLeft: margin.m5,
  },
  mr5: {
    marginRight: margin.m5,
  },
  mt3: {
    marginTop: margin.m3,
  },
  //Font=========================================
  bold: {
    fontWeight: "bold",
  },
  //FontColors-----------------------------------
  black: {
    color: colors.black,
  },
  dark: {
    color: colors.dark,
  },
  grey: {
    color: colors.grey,
  },
  //FontSize-------------------------------------
  h1: {
    fontSize: fontSize.h1,
  },
  p: {
    fontSize: fontSize.p,
  },
});

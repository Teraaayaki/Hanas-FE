import { StyleSheet } from "react-native";
import { colors, fontSize, margin, padding } from "@constants";

export default StyleSheet.create({
  body: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  bgBlack: {
    backgroundColor: colors.black,
  },
  listContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    // backgroundColor: "#FBB",
    paddingHorizontal: padding.p5,
    paddingTop: padding.p6,
  },
  serviceContainer: {
    width: "100%",
    // backgroundColor: "#DFF",
  },
  infoCard: {
    borderColor: "#AAA",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: colors.white,
    minHeight: 140,
    padding: padding.p3,
  },
  infoColumn: {
    flex: 1,
    height: "100%",
    backgroundColor: "#CFC",
  },
  infoContainer: {
    flex: 1,
    // backgroundColor: "#FFC",
    marginTop: margin.m4,
    height: 180,
  },
  scrollViewHeight: {
    flex: 1,
    width: "100%",
    // backgroundColor: "#666",
  },
  scrollView: {
    marginTop: margin.m2,
    // backgroundColor: "#CFF",
    borderRadius: 10,
  },
  scrollContent: {
    // backgroundColor: "#CCF",
    flexDirection: "row",
    flex: 1,
  },
  sampleWorkIMGCard: {
    borderRadius: 10,
    flex: 1,
    aspectRatio: 1,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  certificateIMGCard: {
    borderRadius: 10,
    flex: 1,
    aspectRatio: 1.6,
    backgroundColor: colors.secondary,
    justifyContent: "center",
    alignItems: "center",
  },
  containedIMG: {
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },
  //Reusables====================================
  flexRowContainer: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "#DDF",
  },
  alignCenter: {
    alignItems: "center",
  },
  //Sizes========================================
  f1: {
    flex: 1,
  },
  f2: {
    flex: 2,
  },
  p3: {
    padding: padding.p1,
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
  mt5: {
    marginTop: margin.m5,
  },
  mb1: {
    marginBottom: margin.m1,
  },
  mb2: {
    marginBottom: margin.m2,
  },
  mb3: {
    marginBottom: margin.m3,
  },
  mb4: {
    marginBottom: margin.m4,
  },
  mb5: {
    marginBottom: margin.m5,
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
  secondary: {
    color: colors.secondary,
  },
  //FontSize-------------------------------------
  h1: {
    fontSize: fontSize.h1,
  },
  p: {
    fontSize: fontSize.p,
  },
});

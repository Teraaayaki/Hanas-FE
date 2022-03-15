import { StyleSheet } from "react-native";
import { colors, fontSize, margin, padding } from "@constants";

export default StyleSheet.create({
  serviceContainer: {
    width: "100%",
    // backgroundColor: "#DFF",
    paddingBottom: padding.p10,
  },
  infoCard: {
    borderColor: "#BBB",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: colors.white,
    minHeight: 140,
    padding: padding.p3,
  },
  infoColumn: {
    flex: 8,
    // backgroundColor: "#CFC",
  },
  infoContainer: {
    flex: 1,
    // backgroundColor: "#FFC",
    marginTop: margin.m4,
    height: 180,
  },
  addButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#CCC",
  },
  scrollViewHeight: {
    flex: 1,

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
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  certificateIMGCard: {
    borderRadius: 10,
    flex: 1,
    aspectRatio: 1.6,
    backgroundColor: colors.black,
    justifyContent: "center",
    alignItems: "center",
  },
  containedIMG: {
    borderRadius: 10,
    height: "100%",
    width: "100%",
  },
  //Reusables====================================
  //   flexGrow: {
  //     flexGrow: "true",
  //   },
  rounded: {
    borderRadius: 10,
  },
  flexRowContainer: {
    flexDirection: "row",
    width: "100%",
    // backgroundColor: "#DDF",
  },
  alignCenter: {
    alignItems: "center",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  textCenter: {
    textAlign: "center",
  },
  textJustify: {
    textAlign: "justify",
  },
  //Sizes========================================
  square: {
    aspectRatio: 1,
  },
  h100: {
    height: "100%",
  },
  h75: {
    height: "75%",
  },
  h50: {
    height: "50%",
  },
  h25: {
    height: "25%",
  },
  w100: {
    width: "100%",
  },
  w75: {
    width: "75%",
  },
  w50: {
    width: "50%",
  },
  w25: {
    width: "25%",
  },
  f1: {
    flex: 1,
  },
  f2: {
    flex: 2,
  },
  p1: {
    padding: padding.p1,
  },
  p2: {
    padding: padding.p2,
  },
  p3: {
    padding: padding.p3,
  },
  p4: {
    padding: padding.p4,
  },
  p5: {
    padding: padding.p5,
  },
  p10: {
    padding: padding.p10,
  },
  px1: {
    paddingHorizontal: padding.p1,
  },
  px2: {
    paddingHorizontal: padding.p2,
  },
  px3: {
    paddingHorizontal: padding.p3,
  },
  px4: {
    paddingHorizontal: padding.p4,
  },
  px5: {
    paddingHorizontal: padding.p5,
  },
  py1: {
    paddingVertical: padding.p1,
  },
  py2: {
    paddingVertical: padding.p2,
  },
  py3: {
    paddingVertical: padding.p3,
  },
  py4: {
    paddingVertical: padding.p4,
  },
  py5: {
    paddingVertical: padding.p5,
  },
  m5: {
    margin: margin.m5,
  },
  my0: {
    marginVertical: "auto",
  },
  mx0: {
    marginHorizontal: "auto",
  },
  mx1: {
    marginHorizontal: margin.m1,
  },
  mx2: {
    marginHorizontal: margin.m2,
  },
  mx3: {
    marginHorizontal: margin.m3,
  },
  mx4: {
    marginHorizontal: margin.m4,
  },
  mx5: {
    marginHorizontal: margin.m5,
  },
  my0: {
    marginVertical: "auto",
  },
  mx0: {
    marginHorizontal: "auto",
  },
  my1: {
    marginVertical: margin.m1,
  },
  my2: {
    marginVertical: margin.m2,
  },
  my3: {
    marginVertical: margin.m3,
  },
  my4: {
    marginVertical: margin.m4,
  },
  my5: {
    marginVertical: margin.m5,
  },
  ml5: {
    marginLeft: margin.m5,
  },
  mt1: {
    marginTop: margin.m1,
  },
  mt2: {
    marginTop: margin.m2,
  },
  mt3: {
    marginTop: margin.m3,
  },
  mt4: {
    marginTop: margin.m4,
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
  mr1: {
    marginRight: margin.m1,
  },
  mr2: {
    marginRight: margin.m2,
  },
  mr3: {
    marginRight: margin.m3,
  },
  mr4: {
    marginRight: margin.m4,
  },
  mr5: {
    marginRight: margin.m5,
  },
  ml1: {
    marginLeft: margin.m1,
  },
  ml2: {
    marginLeft: margin.m2,
  },
  ml3: {
    marginLeft: margin.m3,
  },
  ml4: {
    marginLeft: margin.m4,
  },
  ml5: {
    marginLeft: margin.m5,
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
  h2: {
    fontSize: fontSize.h2,
  },
  p: {
    fontSize: fontSize.p,
  },
  text12: {
    fontSize: 12,
  },
  text10: {
    fontSize: 10,
  },
  //Colors---------------------------------------
  bgTemp: {
    backgroundColor: colors.light,
  },
  borderSecondary: {
    borderWidth: 1,
    borderColor: colors.secondary,
  },
});

import { StyleSheet } from "react-native";
import { colors, margin, fontSize, padding } from "@constants";

export default StyleSheet.create({
  //Unique===================================================================
  completion: {
    position: "absolute",
  },
  borderSlim: {
    borderWidth: 0.5,
  },
  //Unique===================================================================
  //Reusables================================================================
  temp1: {
    backgroundColor: "#CFF",
  },
  temp2: {
    backgroundColor: "#FFC",
  },
  temp3: {
    backgroundColor: "#FCF",
  },
  temp4: {
    backgroundColor: "#FCC",
  },
  temp5: {
    backgroundColor: "#CFC",
  },
  temp6: {
    backgroundColor: "#CCF",
  },

  body: {
    width: "100%",
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  //Design=================================================
  rounded: {
    borderRadius: 10,
  },
  rounded100: {
    borderRadius: 100,
  },
  roundedLeft100: {
    borderTopStartRadius: 100,
    borderBottomStartRadius: 100,
  },
  roundedRight100: {
    borderTopEndRadius: 100,
    borderBottomEndRadius: 100,
  },

  absolute: {
    position: "absolute",
  },

  square: {
    aspectRatio: 1,
  },
  rotate130deg: {
    transform: [{ rotateZ: "0.75rad" }],
  },
  //Layout=================================================
  flexRow: {
    flexDirection: "row",
    width: "100%",
  },
  alignCenter: {
    alignItems: "center",
  },
  alignBottom: {
    alignItems: "flex-end",
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  justifyContentSpaceEvenly: {
    justifyContent: "space-evenly",
  },
  justifyContentSpaceBetween: {
    justifyContent: "space-between",
  },
  //Height---------------------------------------
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
  h33: {
    height: "33%",
  },
  h66: {
    height: "66%",
  },
  //Width----------------------------------------
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
  w33: {
    width: "33%",
  },
  w66: {
    width: "66%",
  },
  //Flex-----------------------------------------
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  //Text===================================================
  //Placement -----------------------------------
  textCenter: {
    textAlign: "center",
  },
  textRight: {
    textAlign: "right",
  },
  textJustify: {
    textAlign: "justify",
  },
  //Style ---------------------------------------
  bold: {
    fontWeight: "bold",
  },
  underline: {
    textDecorationLine: "underline",
  },
  //Color ==================================================
  //Background Color-----------------------------
  bgWhite: { backgroundColor: "#FFF" },
  bgDark: { backgroundColor: colors.dark },
  bgLight: { backgroundColor: colors.light },
  bgLightGrey: { backgroundColor: colors.lightGrey },
  bgGrey: { backgroundColor: colors.grey },
  bgPrimary: { backgroundColor: colors.primary },
  bgSecondary: { backgroundColor: colors.secondary },
  bgBG: { backgroundColor: colors.background },
  // Border Color -------------------------------
  border: {
    borderWidth: 1,
  },
  borderTop: {
    borderTopWidth: 1,
  },

  borderBottom: {
    borderBottomWidth: 1,
  },

  borderPrimary: { borderColor: colors.primary },
  borderSecondary: { borderColor: colors.secondary },
  borderMuted50: { borderColor: colors.muted50 },
  borderMuted25: { borderColor: colors.muted25 },
  borderMuted20: { borderColor: colors.muted20 },
  //Text Color-----------------------------------
  textSecondary: { color: colors.secondary },
  textMuted50: { color: colors.muted50 },
  //Size ----------------------------------------
  h1: {
    fontSize: fontSize.h1,
  },
  h2: {
    fontSize: fontSize.h2,
  },
  h3: {
    fontSize: fontSize.h3,
  },
  h4: {
    fontSize: fontSize.h4,
  },
  h5: {
    fontSize: fontSize.h5,
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
  //Padding================================================
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
  //Padding Horizontal --------------------------
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
  px6: {
    paddingHorizontal: padding.p6,
  },
  //Padding Vertical ----------------------------
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
  //Padding Top ---------------------------------
  pt1: {
    paddingTop: padding.p1,
  },
  pt2: {
    paddingTop: padding.p2,
  },
  pt3: {
    paddingTop: padding.p3,
  },
  pt4: {
    paddingTop: padding.p4,
  },
  pt5: {
    paddingTop: padding.p5,
  },
  //Padding Bottom ------------------------------
  pb1: {
    paddingBottom: padding.p1,
  },
  pb2: {
    paddingBottom: padding.p2,
  },
  pb3: {
    paddingBottom: padding.p3,
  },
  pb4: {
    paddingBottom: padding.p4,
  },
  pb5: {
    paddingBottom: padding.p5,
  },
  //Padding Left --------------------------------
  pl1: {
    paddingLeft: padding.p1,
  },
  pl2: {
    paddingLeft: padding.p2,
  },
  pl3: {
    paddingLeft: padding.p3,
  },
  pl4: {
    paddingLeft: padding.p4,
  },
  pl5: {
    paddingLeft: padding.p5,
  },
  //Padding Right -------------------------------
  pr1: {
    paddingRight: padding.p1,
  },
  pr2: {
    paddingRight: padding.p2,
  },
  pr3: {
    paddingRight: padding.p3,
  },
  pr4: {
    paddingRight: padding.p4,
  },
  pr5: {
    paddingRight: padding.p5,
  },
  //Margin=================================================
  m1: {
    margin: margin.m1,
  },
  m2: {
    margin: margin.m2,
  },
  m3: {
    margin: margin.m3,
  },
  m4: {
    margin: margin.m4,
  },
  m5: {
    margin: margin.m5,
  },
  //Margin Horizontal ---------------------------
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
  //Margin Vertical -----------------------------
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
  //Margin Top ----------------------------------
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
  mt15: {
    marginTop: margin.m15,
  },
  //Margin Bottom -------------------------------
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
  //Margin Left ---------------------------------
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
  //Margin Right --------------------------------
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
  //==========================================================================
});

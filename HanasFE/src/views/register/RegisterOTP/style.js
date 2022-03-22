import { StyleSheet } from "react-native";
import { colors, fontSize, margin, padding } from "@constants";

export default StyleSheet.create({
  body: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
  title: {
    fontSize: fontSize.title,
    marginBottom: 60,
    paddingBottom: padding.p5,
  },
  formContainer: {
    width: "65%",
    // backgroundColor: "#CCF",
    marginTop: margin.m3,
  },
  pinGroupContainer: {
    width: "100%",
    height: 70,
    // backgroundColor: "#FFC",
    marginBottom: margin.m2,
    flexDirection: "row",
  },
  pinContainer: {
    flex: 1,
    marginHorizontal: margin.m3,
    // backgroundColor: "#FCC",
    borderBottomWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  pin: {
    fontSize: 25,
    textAlign: "center",
    color: colors.dark,
  },
  linkText: {
    marginTop: 20,
    padding: 30,
    textAlign: "center",
    fontWeight: "bold",
    color: colors.dark,
    fontSize: fontSize.p,
  },
});

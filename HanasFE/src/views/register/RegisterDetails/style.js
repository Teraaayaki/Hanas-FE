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
    paddingBottom: padding.p5,
  },
  formContainer: {
    width: "65%",
    // backgroundColor: "#CCF",
    marginTop: margin.m3,
  },
  labelContainer: {
    width: "100%",
    // backgroundColor: "#FFB",
    marginBottom: margin.m3,
  },
  label: {
    fontSize: fontSize.label,
    fontWeight: "bold",
  },
  inputRow: {
    flexDirection: "row",
  },
  rowContainer: {
    flex: 1,
    paddingRight: padding.p3,
  },
  rowContainer2: {
    flex: 1,
    paddingLeft: padding.p3,
  },
  genderContainer: {
    flex: 1,
    paddingVertical: padding.p3,
    backgroundColor: colors.white,
    borderRadius: 5,
    marginBottom: margin.m3,
  },
});

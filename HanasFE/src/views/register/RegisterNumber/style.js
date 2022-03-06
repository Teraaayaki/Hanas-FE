import { StyleSheet } from "react-native";
import { colors } from "@constants";
import { fontSize } from "@constants";
import { margin } from "@constants";
import { padding } from "@constants";

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
  h1Container: {
    width: "60%",
    marginVertical: margin.m5,
  },
  h1: {
    fontSize: fontSize.h1,
    textAlign: "center",
  },
  h3Container: {
    width: "75%",
    marginBottom: margin.m5,
    paddingVertical: padding.p5,
  },
  h3: {
    fontSize: fontSize.h3,
    textAlign: "center",
  },
  formContainer: {
    width: "65%",
    // backgroundColor: "#CCF",
    marginTop: margin.m3,
  },
  inputBox: {
    height: 46,
    width: "100%",
    marginBottom: 40,
    borderRadius: 5,
    backgroundColor: colors.white,
    color: colors.hanasDarkText,
    flexDirection: "row",
    paddingHorizontal: padding.p2,
    paddingVertical: padding.p2,
  },
  iconContainer: {
    flex: 2,
    // backgroundColor: "#FCC",
  },
  textInput: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 10,
    fontSize: fontSize.textInput,
    // backgroundColor: "#CFC",
  },
});

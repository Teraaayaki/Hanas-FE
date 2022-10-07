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
  titleContainer: {
    flexDirection: "column-reverse",
    flex: 1,
  },
  title: {
    fontSize: fontSize.title,
    paddingBottom: padding.p5,
  },
  formContainer: {
    width: "80%",
    marginTop: margin.m3,
  },
  labelContainer: {
    width: "100%",
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
  },
  error: {
    color: colors.danger,
    fontWeight: "bold",
    alignSelf: "center",
  },
  errorContainer: {
    paddingTop: padding.p3,
  },
  buttonContainer: {
    marginVertical: margin.m3,
  },
  touchable: {
    margin: margin.m1,
    padding: padding.p6,
    alignSelf: "center",
  },
  touchableText: {
    fontWeight: "bold",
    color: colors.dark,
    fontSize: fontSize.h3,
  },
  text: {
    fontWeight: "bold",
    fontSize: fontSize.h3,
    color: colors.secondary,
  },
  textContainer: {
    marginTop: "10%",
  },
  checkBoxRow: {
    flexDirection: "row",
    marginVertical: 15,
  },
  checkBox: {
    marginHorizontal: 15,
  },
  terms: {
    textDecorationLine: "underline",
    color: "blue",
  },
});

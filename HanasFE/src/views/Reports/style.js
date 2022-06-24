import { StyleSheet } from "react-native";

import { colors, padding, margin, fontSize } from "@constants";

export default StyleSheet.create({
  textStyle: {
    fontFamily: "Bold",
    fontSize: fontSize.h2,
  },
  inputContainer: {
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: padding.p4,
    marginVertical: margin.m4,
    marginHorizontal: margin.m5,
  },
  buttonTextStyle: {
    fontSize: fontSize.h3,
    fontFamily: "Bold",
  },
  buttonStyle: {
    width: "100%",
    borderRadius: 10,
    marginVertical: margin.m4,
  },
  dropdownStyle: {
    borderRadius: 10,
  },
  textArea: {
    textAlignVertical: "top",
    fontSize: fontSize.h3,
  },
  textAreaContainer: {
    marginVertical: margin.m4,
    borderWidth: 0.3,
    borderRadius: 10,
    padding: padding.p2,
  },
  headerTextStyle: {
    fontSize: fontSize.h1,
    fontFamily: "Bold",
  },
  danger: {
    color: colors.danger,
  },
  button: {
    marginHorizontal: margin.m5,
  },
  imageContainer: {
    marginVertical: margin.m4,
  },
  fileText: {
    textAlign: "center",
    fontFamily: "Regular",
    color: colors.borderGrey,
  },
  imagesContainer: {
    marginTop: margin.m4,
    marginBottom: "-4%",
  },
});

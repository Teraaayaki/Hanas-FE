import { StyleSheet } from "react-native";
import { colors, padding, fontSize } from "@constants";

export default StyleSheet.create({
  inputBox: {
    height: 46,
    width: "100%",
    borderRadius: 5,
    backgroundColor: colors.white,
    color: colors.hanasDarkText,
    flexDirection: "row",
    paddingHorizontal: padding.p5,
    paddingVertical: padding.p3,
    marginBottom: 10,
  },
  iconContainer: {
    // backgroundColor: "#FCC",
    justifyContent: "center",
  },
  icon: {
    color: colors.dark,
  },
  textInput: {
    paddingLeft: padding.p4,
    flex: 10,
    fontSize: fontSize.textInput,
    // backgroundColor: "#CFC",
  },
});
import { StyleSheet } from "react-native";
import { colors, fontSize } from "@constants";

export default StyleSheet.create({
  input: {
    height: 46,
    width: "100%",
    marginTop: 7,
    marginBottom: 18,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: colors.white,
    color: colors.hanasDarkText,
    fontSize: fontSize.textInput,
    justifyContent: "center",
  },
});

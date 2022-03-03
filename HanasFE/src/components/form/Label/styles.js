import { StyleSheet } from "react-native";
import { colors, fontSize } from "@constants";

export default StyleSheet.create({
  labelContainer: {
    width: "100%",
    padding: 5,
  },

  label: {
    fontFamily: "Roboto",
    fontWeight: "700",
    color: colors.dark,
    fontSize: fontSize.label,
  },
});

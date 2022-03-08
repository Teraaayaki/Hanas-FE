import { StyleSheet } from "react-native";
import { fontSize, colors, padding } from "@constants";

const styles = StyleSheet.create({
  text: {
    fontSize: fontSize.h4,
    fontWeight: "bold",
    color: colors.primary,
  },
  press: {
    padding: padding.p6,
  },
});

export default styles;

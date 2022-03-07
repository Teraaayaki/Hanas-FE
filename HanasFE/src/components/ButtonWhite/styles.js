import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { fontSize, margin, padding, colors } from "@constants";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
    borderRadius: 10,
    padding: padding.p5,
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    marginLeft: margin.m3,
    fontSize: fontSize.h3,
    fontWeight: "bold",
  },
});

export default styles;

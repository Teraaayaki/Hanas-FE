import { StyleSheet } from "react-native";
import { colors } from "@constants";
import { margin, padding } from "../../constants";

export default StyleSheet.create({
  container: {
      borderWidth: 1.5,
      marginTop: margin.m2,
      borderColor: colors.muted75,
      padding: padding.p2,
      borderRadius: 10
  }
});
